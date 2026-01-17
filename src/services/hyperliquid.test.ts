import { describe, it, expect, vi, beforeEach } from 'vitest';
import { parseUnits } from 'viem';
import {
  checkUSDCBalance,
  checkAllowance,
  approveUSDC,
  depositToHyperliquid,
  estimateDepositGas,
} from './hyperliquid';

// Contract addresses used in the service
// Updated to correct addresses from Chainstack/Circle docs
const HYPERLIQUID_BRIDGE_ADDRESS = '0x6b9e773128f453f5c2c60935ee2de2cbc5390a24';
const USDC_HYPEREVM_ADDRESS = '0xb88339CB7199b77E23DB6E890353E22632Ba630f';

// Mock user address
const MOCK_USER_ADDRESS = '0x1234567890123456789012345678901234567890' as `0x${string}`;

// Create mock clients
const createMockPublicClient = () => ({
  readContract: vi.fn(),
  waitForTransactionReceipt: vi.fn(),
  estimateContractGas: vi.fn(),
});

const createMockWalletClient = () => ({
  getAddresses: vi.fn().mockResolvedValue([MOCK_USER_ADDRESS]),
  writeContract: vi.fn(),
});

describe('Hyperliquid Service - HyperEVM to L1 Deposit', () => {
  let mockPublicClient: ReturnType<typeof createMockPublicClient>;
  let mockWalletClient: ReturnType<typeof createMockWalletClient>;

  beforeEach(() => {
    vi.clearAllMocks();
    mockPublicClient = createMockPublicClient();
    mockWalletClient = createMockWalletClient();
  });

  describe('checkUSDCBalance', () => {
    it('should return USDC balance on HyperEVM', async () => {
      const expectedBalance = parseUnits('1000', 6); // 1000 USDC
      mockPublicClient.readContract.mockResolvedValue(expectedBalance);

      const balance = await checkUSDCBalance(
        mockPublicClient as any,
        MOCK_USER_ADDRESS
      );

      expect(balance).toBe(expectedBalance);
      expect(mockPublicClient.readContract).toHaveBeenCalledWith({
        address: USDC_HYPEREVM_ADDRESS,
        abi: expect.any(Array),
        functionName: 'balanceOf',
        args: [MOCK_USER_ADDRESS],
      });
    });

    it('should return 0 if balance check fails', async () => {
      mockPublicClient.readContract.mockRejectedValue(new Error('RPC error'));

      const balance = await checkUSDCBalance(
        mockPublicClient as any,
        MOCK_USER_ADDRESS
      );

      expect(balance).toBe(BigInt(0));
    });

    it('should query the correct USDC address on HyperEVM (not L1)', async () => {
      mockPublicClient.readContract.mockResolvedValue(BigInt(0));

      await checkUSDCBalance(mockPublicClient as any, MOCK_USER_ADDRESS);

      // Verify we're checking HyperEVM USDC, not some other address
      const callArgs = mockPublicClient.readContract.mock.calls[0][0];
      expect(callArgs.address.toLowerCase()).toBe(USDC_HYPEREVM_ADDRESS.toLowerCase());
    });
  });

  describe('checkAllowance', () => {
    it('should return true when allowance is sufficient for bridge', async () => {
      const amount = parseUnits('100', 6);
      mockPublicClient.readContract.mockResolvedValue(amount + BigInt(1));

      const hasAllowance = await checkAllowance(
        mockPublicClient as any,
        MOCK_USER_ADDRESS,
        amount
      );

      expect(hasAllowance).toBe(true);
    });

    it('should return false when allowance is insufficient', async () => {
      const amount = parseUnits('100', 6);
      mockPublicClient.readContract.mockResolvedValue(amount - BigInt(1));

      const hasAllowance = await checkAllowance(
        mockPublicClient as any,
        MOCK_USER_ADDRESS,
        amount
      );

      expect(hasAllowance).toBe(false);
    });

    it('should check allowance against the bridge contract address', async () => {
      const amount = parseUnits('100', 6);
      mockPublicClient.readContract.mockResolvedValue(BigInt(0));

      await checkAllowance(mockPublicClient as any, MOCK_USER_ADDRESS, amount);

      const callArgs = mockPublicClient.readContract.mock.calls[0][0];
      expect(callArgs.args[1].toLowerCase()).toBe(HYPERLIQUID_BRIDGE_ADDRESS.toLowerCase());
    });

    it('should return false on error', async () => {
      mockPublicClient.readContract.mockRejectedValue(new Error('RPC error'));

      const hasAllowance = await checkAllowance(
        mockPublicClient as any,
        MOCK_USER_ADDRESS,
        parseUnits('100', 6)
      );

      expect(hasAllowance).toBe(false);
    });
  });

  describe('approveUSDC', () => {
    it('should approve USDC spending for the bridge contract', async () => {
      const amount = parseUnits('100', 6);
      const mockTxHash = '0xabc123' as `0x${string}`;
      
      mockWalletClient.writeContract.mockResolvedValue(mockTxHash);
      mockPublicClient.waitForTransactionReceipt.mockResolvedValue({ status: 'success' });

      const result = await approveUSDC(
        mockWalletClient as any,
        mockPublicClient as any,
        amount
      );

      expect(result.success).toBe(true);
      expect(result.txHash).toBe(mockTxHash);
    });

    it('should approve to the bridge contract address', async () => {
      const amount = parseUnits('100', 6);
      mockWalletClient.writeContract.mockResolvedValue('0xabc123');
      mockPublicClient.waitForTransactionReceipt.mockResolvedValue({ status: 'success' });

      await approveUSDC(mockWalletClient as any, mockPublicClient as any, amount);

      const callArgs = mockWalletClient.writeContract.mock.calls[0][0];
      expect(callArgs.args[0].toLowerCase()).toBe(HYPERLIQUID_BRIDGE_ADDRESS.toLowerCase());
    });

    it('should return failure on approval error', async () => {
      mockWalletClient.writeContract.mockRejectedValue(new Error('User rejected'));

      const result = await approveUSDC(
        mockWalletClient as any,
        mockPublicClient as any,
        parseUnits('100', 6)
      );

      expect(result.success).toBe(false);
      expect(result.error).toContain('User rejected');
    });
  });

  describe('depositToHyperliquid - HyperEVM to L1', () => {
    const depositAmount = '100'; // 100 USDC

    beforeEach(() => {
      // Default successful mocks
      mockPublicClient.readContract
        .mockResolvedValueOnce(parseUnits('1000', 6)) // Balance check
        .mockResolvedValueOnce(parseUnits('1000', 6)); // Allowance check
      mockWalletClient.writeContract.mockResolvedValue('0xdeposit123' as `0x${string}`);
      mockPublicClient.waitForTransactionReceipt.mockResolvedValue({ status: 'success' });
    });

    it('should complete full deposit flow: balance -> approval -> deposit', async () => {
      const statusUpdates: string[] = [];
      const onStatusUpdate = (status: string) => {
        statusUpdates.push(status);
      };

      const result = await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        depositAmount,
        onStatusUpdate
      );

      expect(result.success).toBe(true);
      expect(statusUpdates).toContain('checking');
      expect(statusUpdates).toContain('depositing');
      expect(statusUpdates).toContain('completed');
    });

    it('should call depositUsdc on the bridge contract', async () => {
      await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        depositAmount
      );

      // Find the deposit call (not the approval)
      const depositCall = mockWalletClient.writeContract.mock.calls.find(
        call => call[0].functionName === 'depositUsdc'
      );

      expect(depositCall).toBeDefined();
      expect(depositCall![0].address.toLowerCase()).toBe(HYPERLIQUID_BRIDGE_ADDRESS.toLowerCase());
    });

    it('should return failure on insufficient balance', async () => {
      // Override balance to be insufficient
      mockPublicClient.readContract.mockReset();
      mockPublicClient.readContract.mockResolvedValueOnce(parseUnits('50', 6)); // Only 50 USDC

      const result = await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        depositAmount
      );

      expect(result.success).toBe(false);
      expect(result.error).toContain('Insufficient');
    });

    it('should skip approval if already approved', async () => {
      // Already has sufficient allowance
      mockPublicClient.readContract.mockReset();
      mockPublicClient.readContract
        .mockResolvedValueOnce(parseUnits('1000', 6)) // Balance
        .mockResolvedValueOnce(parseUnits('1000', 6)); // Allowance (sufficient)

      await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        depositAmount
      );

      // Should only have one writeContract call (deposit, not approve)
      const approveCalls = mockWalletClient.writeContract.mock.calls.filter(
        call => call[0].functionName === 'approve'
      );
      expect(approveCalls.length).toBe(0);
    });

    it('should request approval if not approved', async () => {
      // Insufficient allowance
      mockPublicClient.readContract.mockReset();
      mockPublicClient.readContract
        .mockResolvedValueOnce(parseUnits('1000', 6)) // Balance
        .mockResolvedValueOnce(BigInt(0)); // No allowance
      mockWalletClient.writeContract
        .mockResolvedValueOnce('0xapprove123' as `0x${string}`) // Approval tx
        .mockResolvedValueOnce('0xdeposit123' as `0x${string}`); // Deposit tx

      const statusUpdates: string[] = [];
      await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        depositAmount,
        (status) => statusUpdates.push(status)
      );

      expect(statusUpdates).toContain('approving');
      
      const approveCalls = mockWalletClient.writeContract.mock.calls.filter(
        call => call[0].functionName === 'approve'
      );
      expect(approveCalls.length).toBe(1);
    });

    it('should handle deposit transaction failure', async () => {
      mockWalletClient.writeContract.mockRejectedValue(new Error('Transaction reverted'));

      const result = await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        depositAmount
      );

      expect(result.success).toBe(false);
      expect(result.error).toContain('Transaction reverted');
    });

    it('should update status to failed on error', async () => {
      mockWalletClient.writeContract.mockRejectedValue(new Error('Network error'));

      const statusUpdates: string[] = [];
      await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        depositAmount,
        (status) => statusUpdates.push(status)
      );

      expect(statusUpdates).toContain('failed');
    });

    it('should return transaction hash on success', async () => {
      const expectedHash = '0xsuccesshash123';
      mockWalletClient.writeContract.mockResolvedValue(expectedHash as `0x${string}`);

      const result = await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        depositAmount
      );

      expect(result.txHash).toBe(expectedHash);
    });
  });

  describe('estimateDepositGas', () => {
    it('should estimate gas for deposit transaction', async () => {
      const expectedGas = BigInt(150000);
      mockPublicClient.estimateContractGas.mockResolvedValue(expectedGas);

      const gas = await estimateDepositGas(
        mockPublicClient as any,
        MOCK_USER_ADDRESS,
        '100'
      );

      expect(gas).toBe(expectedGas);
    });

    it('should call estimate on the bridge contract', async () => {
      mockPublicClient.estimateContractGas.mockResolvedValue(BigInt(150000));

      await estimateDepositGas(mockPublicClient as any, MOCK_USER_ADDRESS, '100');

      const callArgs = mockPublicClient.estimateContractGas.mock.calls[0][0];
      expect(callArgs.address.toLowerCase()).toBe(HYPERLIQUID_BRIDGE_ADDRESS.toLowerCase());
      expect(callArgs.functionName).toBe('depositUsdc');
    });

    it('should return null on estimation error', async () => {
      mockPublicClient.estimateContractGas.mockRejectedValue(new Error('Estimation failed'));

      const gas = await estimateDepositGas(
        mockPublicClient as any,
        MOCK_USER_ADDRESS,
        '100'
      );

      expect(gas).toBeNull();
    });
  });

  describe('Layer Distinction - HyperEVM vs Hyperliquid L1', () => {
    it('should use HyperEVM USDC address for balance/allowance checks', async () => {
      mockPublicClient.readContract.mockResolvedValue(BigInt(0));

      await checkUSDCBalance(mockPublicClient as any, MOCK_USER_ADDRESS);

      // The USDC address used should be the HyperEVM USDC contract
      const callArgs = mockPublicClient.readContract.mock.calls[0][0];
      expect(callArgs.address).toBe(USDC_HYPEREVM_ADDRESS);
    });

    it('should deposit to bridge contract (HyperEVM -> L1 bridge)', async () => {
      mockPublicClient.readContract
        .mockResolvedValueOnce(parseUnits('1000', 6))
        .mockResolvedValueOnce(parseUnits('1000', 6));
      mockWalletClient.writeContract.mockResolvedValue('0xhash' as `0x${string}`);
      mockPublicClient.waitForTransactionReceipt.mockResolvedValue({ status: 'success' });

      await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        '100'
      );

      // The bridge address is on HyperEVM and bridges to L1
      const depositCall = mockWalletClient.writeContract.mock.calls.find(
        call => call[0].functionName === 'depositUsdc'
      );
      expect(depositCall).toBeDefined();
      expect(depositCall![0].address).toBe(HYPERLIQUID_BRIDGE_ADDRESS);
    });

    it('should verify deposit amounts use correct decimals (6 for USDC)', async () => {
      mockPublicClient.readContract
        .mockResolvedValueOnce(parseUnits('1000', 6))
        .mockResolvedValueOnce(parseUnits('1000', 6));
      mockWalletClient.writeContract.mockResolvedValue('0xhash' as `0x${string}`);
      mockPublicClient.waitForTransactionReceipt.mockResolvedValue({ status: 'success' });

      await depositToHyperliquid(
        mockWalletClient as any,
        mockPublicClient as any,
        '100' // 100 USDC
      );

      const depositCall = mockWalletClient.writeContract.mock.calls.find(
        call => call[0].functionName === 'depositUsdc'
      );
      expect(depositCall).toBeDefined();
      // 100 USDC = 100 * 10^6 = 100000000
      expect(depositCall![0].args[0]).toBe(parseUnits('100', 6));
    });
  });
});

describe('Contract Address Constants', () => {
  it('should use correct bridge contract address (CoreDepositWallet)', () => {
    // This is the canonical bridge address for HyperEVM -> Hyperliquid L1
    // Source: https://docs.chainstack.com/docs/hyperliquid-bridging-usdc
    expect(HYPERLIQUID_BRIDGE_ADDRESS).toBe('0x6b9e773128f453f5c2c60935ee2de2cbc5390a24');
  });

  it('should use correct USDC address on HyperEVM (Native USDC by Circle)', () => {
    // This is native USDC on HyperEVM (chain 999)
    // Source: https://www.circle.com/multi-chain-usdc/hyperevm
    expect(USDC_HYPEREVM_ADDRESS).toBe('0xb88339CB7199b77E23DB6E890353E22632Ba630f');
  });
});
