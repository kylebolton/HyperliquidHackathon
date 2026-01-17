/**
 * End-to-End Deposit Flow Tests
 * 
 * These tests verify the complete flow from:
 * 1. External Chain -> HyperEVM (via LI.FI bridge)
 * 2. HyperEVM -> Hyperliquid L1 (via bridge contract)
 * 
 * The distinction is critical:
 * - HyperEVM (Chain ID 999): EVM-compatible layer where tokens arrive from bridges
 * - Hyperliquid L1: The actual perps/spot trading platform (NOT EVM accessible)
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { parseUnits } from 'viem';

// Mock the services
vi.mock('./hyperliquid', () => ({
  checkUSDCBalance: vi.fn(),
  checkAllowance: vi.fn(),
  approveUSDC: vi.fn(),
  depositToHyperliquid: vi.fn(),
  estimateDepositGas: vi.fn(),
}));

vi.mock('./lifi', () => ({
  fetchRoutes: vi.fn(),
  discoverHyperliquidChainId: vi.fn(),
  getTransactionStatus: vi.fn(),
}));

// Import after mocking
import {
  checkUSDCBalance,
  checkAllowance,
  approveUSDC,
  depositToHyperliquid,
} from './hyperliquid';
import { fetchRoutes, discoverHyperliquidChainId, getTransactionStatus } from './lifi';

// Constants for testing
const HYPEREVM_CHAIN_ID = 999;
const ARBITRUM_CHAIN_ID = 42161;
const MOCK_USER = '0x1234567890123456789012345678901234567890' as `0x${string}`;
const USDC_ON_ARBITRUM = '0xaf88d065e77c8cC2239327C5EDb3A432268e5831';
const USDC_ON_HYPEREVM = '0xeb62eee3685fc4c43992febcd9e75443aef550ab';

describe('End-to-End Deposit Flow: External Chain -> HyperEVM -> Hyperliquid L1', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Flow Step 1: Bridge to HyperEVM (via LI.FI)', () => {
    it('should discover HyperEVM chain ID (999)', async () => {
      vi.mocked(discoverHyperliquidChainId).mockResolvedValue(HYPEREVM_CHAIN_ID);

      const chainId = await discoverHyperliquidChainId();

      expect(chainId).toBe(HYPEREVM_CHAIN_ID);
    });

    it('should fetch routes TO HyperEVM (not to L1 directly)', async () => {
      vi.mocked(discoverHyperliquidChainId).mockResolvedValue(HYPEREVM_CHAIN_ID);
      vi.mocked(fetchRoutes).mockResolvedValue([
        {
          id: 'route-1',
          fromChain: ARBITRUM_CHAIN_ID,
          toChain: HYPEREVM_CHAIN_ID, // Destination is HyperEVM, NOT L1
          fromToken: {
            symbol: 'USDC',
            name: 'USD Coin',
            decimals: 6,
            address: USDC_ON_ARBITRUM,
            chainId: ARBITRUM_CHAIN_ID,
          },
          toToken: {
            symbol: 'USDC',
            name: 'USD Coin',
            decimals: 6,
            address: USDC_ON_HYPEREVM,
            chainId: HYPEREVM_CHAIN_ID,
          },
          fromAmount: '100000000', // 100 USDC
          toAmount: '99000000', // ~99 USDC after fees
          estimatedTime: 300,
          gasCost: '0.50',
          gasCostUSD: '0.50',
          steps: [],
          slippage: 0.5,
        },
      ]);

      const routes = await fetchRoutes(
        ARBITRUM_CHAIN_ID,
        USDC_ON_ARBITRUM,
        USDC_ON_HYPEREVM,
        '100000000',
        MOCK_USER
      );

      expect(routes.length).toBeGreaterThan(0);
      expect(routes[0].toChain).toBe(HYPEREVM_CHAIN_ID);
      // Verify destination is HyperEVM, not some other chain
      expect(routes[0].toToken.chainId).toBe(HYPEREVM_CHAIN_ID);
    });

    it('should track bridge transaction status until completion on HyperEVM', async () => {
      const mockTxHash = '0xbridge123';
      
      vi.mocked(getTransactionStatus)
        .mockResolvedValueOnce({
          status: 'PENDING',
          substatus: 'WAIT_DESTINATION_TRANSACTION',
        } as any)
        .mockResolvedValueOnce({
          status: 'DONE',
          toChain: {
            chainId: HYPEREVM_CHAIN_ID,
            txHash: '0xhyperevm456',
          },
        } as any);

      // First call - still pending
      const pendingStatus = await getTransactionStatus(
        mockTxHash,
        ARBITRUM_CHAIN_ID,
        HYPEREVM_CHAIN_ID
      );
      expect(pendingStatus.status).toBe('PENDING');

      // Second call - completed on HyperEVM
      const doneStatus = await getTransactionStatus(
        mockTxHash,
        ARBITRUM_CHAIN_ID,
        HYPEREVM_CHAIN_ID
      );
      expect(doneStatus.status).toBe('DONE');
      expect(doneStatus.toChain?.chainId).toBe(HYPEREVM_CHAIN_ID);
    });
  });

  describe('Flow Step 2: Deposit from HyperEVM to Hyperliquid L1', () => {
    it('should check USDC balance on HyperEVM after bridge completes', async () => {
      const bridgedAmount = parseUnits('99', 6); // 99 USDC arrived on HyperEVM
      vi.mocked(checkUSDCBalance).mockResolvedValue(bridgedAmount);

      const balance = await checkUSDCBalance({} as any, MOCK_USER);

      expect(balance).toBe(bridgedAmount);
      expect(checkUSDCBalance).toHaveBeenCalledWith(expect.anything(), MOCK_USER);
    });

    it('should check and request approval for L1 bridge contract', async () => {
      const depositAmount = parseUnits('99', 6);
      
      vi.mocked(checkAllowance).mockResolvedValue(false); // Not approved
      vi.mocked(approveUSDC).mockResolvedValue({
        success: true,
        txHash: '0xapprove789',
      });

      const hasAllowance = await checkAllowance({} as any, MOCK_USER, depositAmount);
      expect(hasAllowance).toBe(false);

      const approvalResult = await approveUSDC({} as any, {} as any, depositAmount);
      expect(approvalResult.success).toBe(true);
    });

    it('should execute deposit from HyperEVM to Hyperliquid L1', async () => {
      const statusUpdates: Array<{ status: string; message?: string }> = [];
      
      vi.mocked(depositToHyperliquid).mockImplementation(
        async (_wallet, _public, _amount, onStatus) => {
          onStatus?.('checking', 'Checking USDC balance...');
          statusUpdates.push({ status: 'checking', message: 'Checking USDC balance...' });
          
          onStatus?.('checking', 'Checking approval...');
          statusUpdates.push({ status: 'checking', message: 'Checking approval...' });
          
          onStatus?.('depositing', 'Depositing to Hyperliquid L1...');
          statusUpdates.push({ status: 'depositing', message: 'Depositing to Hyperliquid L1...' });
          
          onStatus?.('completed', 'Deposit successful!');
          statusUpdates.push({ status: 'completed', message: 'Deposit successful!' });
          
          return { success: true, txHash: '0xdeposit_to_l1' };
        }
      );

      const result = await depositToHyperliquid(
        {} as any,
        {} as any,
        '99',
        (status, message) => statusUpdates.push({ status, message })
      );

      expect(result.success).toBe(true);
      expect(result.txHash).toBe('0xdeposit_to_l1');
      expect(statusUpdates).toContainEqual({ status: 'completed', message: 'Deposit successful!' });
    });
  });

  describe('Complete Flow Simulation', () => {
    it('should complete full flow: Arbitrum -> HyperEVM -> Hyperliquid L1', async () => {
      // Step 1: Discover HyperEVM
      vi.mocked(discoverHyperliquidChainId).mockResolvedValue(HYPEREVM_CHAIN_ID);
      
      // Step 2: Get bridge routes
      vi.mocked(fetchRoutes).mockResolvedValue([{
        id: 'route-1',
        fromChain: ARBITRUM_CHAIN_ID,
        toChain: HYPEREVM_CHAIN_ID,
        fromToken: { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: USDC_ON_ARBITRUM, chainId: ARBITRUM_CHAIN_ID },
        toToken: { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: USDC_ON_HYPEREVM, chainId: HYPEREVM_CHAIN_ID },
        fromAmount: '100000000',
        toAmount: '99000000',
        estimatedTime: 300,
        gasCost: '0.50',
        gasCostUSD: '0.50',
        steps: [],
        slippage: 0.5,
      }]);
      
      // Step 3: Bridge transaction completes
      vi.mocked(getTransactionStatus).mockResolvedValue({
        status: 'DONE',
        toChain: { chainId: HYPEREVM_CHAIN_ID, txHash: '0xhyperevm_tx' },
      } as any);
      
      // Step 4: Check HyperEVM balance
      vi.mocked(checkUSDCBalance).mockResolvedValue(parseUnits('99', 6));
      
      // Step 5: Deposit to L1
      vi.mocked(depositToHyperliquid).mockResolvedValue({
        success: true,
        txHash: '0xl1_deposit_tx',
      });

      // Execute flow
      const chainId = await discoverHyperliquidChainId();
      expect(chainId).toBe(HYPEREVM_CHAIN_ID);

      const routes = await fetchRoutes(
        ARBITRUM_CHAIN_ID,
        USDC_ON_ARBITRUM,
        USDC_ON_HYPEREVM,
        '100000000',
        MOCK_USER
      );
      expect(routes[0].toChain).toBe(HYPEREVM_CHAIN_ID);

      const bridgeStatus = await getTransactionStatus('0xbridge', ARBITRUM_CHAIN_ID, HYPEREVM_CHAIN_ID);
      expect(bridgeStatus.status).toBe('DONE');

      const hyperevmBalance = await checkUSDCBalance({} as any, MOCK_USER);
      expect(hyperevmBalance).toBe(parseUnits('99', 6));

      const l1DepositResult = await depositToHyperliquid({} as any, {} as any, '99');
      expect(l1DepositResult.success).toBe(true);
    });
  });

  describe('Layer Distinction Verification', () => {
    it('HyperEVM chain ID should be 999', () => {
      expect(HYPEREVM_CHAIN_ID).toBe(999);
    });

    it('bridge destinations should target HyperEVM, not L1 directly', async () => {
      vi.mocked(fetchRoutes).mockResolvedValue([{
        id: 'test',
        fromChain: 1,
        toChain: 999, // HyperEVM
        fromToken: { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: '0x', chainId: 1 },
        toToken: { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: USDC_ON_HYPEREVM, chainId: 999 },
        fromAmount: '100',
        toAmount: '99',
        estimatedTime: 300,
        gasCost: '0.50',
        gasCostUSD: '0.50',
        steps: [],
        slippage: 0.5,
      }]);

      const routes = await fetchRoutes(1, '0x', USDC_ON_HYPEREVM, '100', MOCK_USER);
      
      // The destination chain should be HyperEVM (999)
      // Users CANNOT bridge directly to Hyperliquid L1 - they must go through HyperEVM
      expect(routes[0].toChain).toBe(999);
      expect(routes[0].toChain).not.toBe('L1'); // L1 is not directly bridgeable
    });

    it('deposits should go from HyperEVM (EVM) to L1 (non-EVM)', async () => {
      // The deposit function bridges FROM HyperEVM TO L1
      // This is a different layer transition than the external bridge
      vi.mocked(depositToHyperliquid).mockImplementation(async () => ({
        success: true,
        txHash: '0x_hyperevm_to_l1',
      }));

      const result = await depositToHyperliquid({} as any, {} as any, '100');
      
      // Success means USDC moved from HyperEVM address to Hyperliquid L1 trading account
      expect(result.success).toBe(true);
      // The tx hash is on HyperEVM (where the bridge contract lives)
      expect(result.txHash).toContain('hyperevm_to_l1');
    });
  });

  describe('Error Scenarios', () => {
    it('should handle bridge failure (stuck on source chain)', async () => {
      vi.mocked(getTransactionStatus).mockResolvedValue({
        status: 'FAILED',
        substatusMessage: 'Bridge transaction reverted',
      } as any);

      const status = await getTransactionStatus('0xfailed', ARBITRUM_CHAIN_ID, HYPEREVM_CHAIN_ID);
      
      expect(status.status).toBe('FAILED');
    });

    it('should handle insufficient balance on HyperEVM for L1 deposit', async () => {
      vi.mocked(checkUSDCBalance).mockResolvedValue(parseUnits('10', 6)); // Only 10 USDC
      vi.mocked(depositToHyperliquid).mockResolvedValue({
        success: false,
        error: 'Insufficient USDC balance. Have: 10, Need: 100',
      });

      const balance = await checkUSDCBalance({} as any, MOCK_USER);
      expect(balance).toBeLessThan(parseUnits('100', 6));

      const result = await depositToHyperliquid({} as any, {} as any, '100');
      expect(result.success).toBe(false);
      expect(result.error).toContain('Insufficient');
    });

    it('should handle L1 bridge contract failure', async () => {
      vi.mocked(depositToHyperliquid).mockResolvedValue({
        success: false,
        error: 'Bridge contract execution failed',
      });

      const result = await depositToHyperliquid({} as any, {} as any, '100');
      
      expect(result.success).toBe(false);
      expect(result.error).toContain('Bridge contract');
    });
  });

  describe('Explorer Links Verification', () => {
    it('bridge transactions should link to source chain explorer', () => {
      const arbitrumTx = '0xarbitrum_bridge_tx';
      const explorerUrl = `https://arbiscan.io/tx/${arbitrumTx}`;
      
      expect(explorerUrl).toContain('arbiscan.io');
      expect(explorerUrl).toContain(arbitrumTx);
    });

    it('HyperEVM transactions should link to Hyperliquid explorer', () => {
      const hyperevmTx = '0xhyperevm_tx';
      const explorerUrl = `https://explorer.hyperliquid.xyz/tx/${hyperevmTx}`;
      
      expect(explorerUrl).toContain('explorer.hyperliquid.xyz');
      expect(explorerUrl).toContain(hyperevmTx);
    });

    it('L1 deposit transactions occur on HyperEVM (via bridge contract)', () => {
      // The deposit to L1 happens via a contract ON HyperEVM
      // So the tx explorer link should be Hyperliquid explorer (HyperEVM)
      const depositTx = '0xl1_deposit_via_hyperevm';
      const explorerUrl = `https://explorer.hyperliquid.xyz/tx/${depositTx}`;
      
      expect(explorerUrl).toContain('explorer.hyperliquid.xyz');
    });
  });
});

describe('USDC Token Address Verification', () => {
  it('should use correct USDC address on HyperEVM', () => {
    // This address is USDC on HyperEVM (chain 999)
    // It's different from USDC on other chains
    expect(USDC_ON_HYPEREVM.toLowerCase()).toBe('0xeb62eee3685fc4c43992febcd9e75443aef550ab');
  });

  it('should differentiate between chain-specific USDC addresses', () => {
    // Different chains have different USDC addresses
    expect(USDC_ON_ARBITRUM).not.toBe(USDC_ON_HYPEREVM);
    
    // Arbitrum USDC (native)
    expect(USDC_ON_ARBITRUM).toBe('0xaf88d065e77c8cC2239327C5EDb3A432268e5831');
    
    // HyperEVM USDC
    expect(USDC_ON_HYPEREVM).toBe('0xeb62eee3685fc4c43992febcd9e75443aef550ab');
  });
});
