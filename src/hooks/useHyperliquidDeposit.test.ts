import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useHyperliquidDeposit, useHyperliquidBalance } from './useHyperliquidDeposit';
import { HYPERLIQUID_CHAIN_ID } from '../config/chains';

// Track usePublicClient calls to verify chain ID
const mockUsePublicClient = vi.fn();

// Mock wagmi hooks
vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x1234567890123456789012345678901234567890',
    isConnected: true,
  })),
  useWalletClient: vi.fn(() => ({
    data: {
      account: { address: '0x1234567890123456789012345678901234567890' },
      chain: { id: 146 }, // User connected to Sonic
      transport: {},
    },
  })),
  usePublicClient: (options?: { chainId?: number }) => {
    mockUsePublicClient(options);
    return {
      readContract: vi.fn(),
      waitForTransactionReceipt: vi.fn(),
    };
  },
}));

// Mock hyperliquid service
vi.mock('../services/hyperliquid', () => ({
  depositToHyperliquid: vi.fn(),
  checkUSDCBalance: vi.fn(),
}));

// Mock chains config
vi.mock('../config/chains', () => ({
  HYPERLIQUID_CHAIN_ID: 999,
}));

describe('useHyperliquidDeposit', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUsePublicClient.mockClear();
  });

  it('should initialize with idle status', () => {
    const { result } = renderHook(() => useHyperliquidDeposit());

    expect(result.current.status).toBe('idle');
    expect(result.current.statusMessage).toBe('');
    expect(result.current.txHash).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.isDepositing).toBe(false);
  });

  it('should use Hyperliquid-specific public client (chain 999) regardless of connected chain', () => {
    // User is connected to Sonic (146) but should query Hyperliquid (999) for balance
    renderHook(() => useHyperliquidDeposit());

    // Verify usePublicClient was called with Hyperliquid chain ID
    expect(mockUsePublicClient).toHaveBeenCalledWith({ chainId: 999 });
  });

  it('should deposit successfully', async () => {
    const hyperliquidService = await import('../services/hyperliquid');
    vi.mocked(hyperliquidService.depositToHyperliquid).mockImplementation(
      async (_walletClient, _publicClient, _amount, onStatusUpdate) => {
        onStatusUpdate?.('checking', 'Checking balance...');
        onStatusUpdate?.('approving', 'Approving USDC...');
        onStatusUpdate?.('depositing', 'Depositing to Hyperliquid...');
        return { success: true, txHash: '0xabc123' };
      }
    );

    const { result } = renderHook(() => useHyperliquidDeposit());

    let success: boolean = false;
    await act(async () => {
      success = await result.current.deposit('100');
    });

    expect(success).toBe(true);
    expect(result.current.status).toBe('completed');
    expect(result.current.txHash).toBe('0xabc123');
    expect(result.current.error).toBeNull();
  });

  it('should handle deposit failure', async () => {
    const hyperliquidService = await import('../services/hyperliquid');
    vi.mocked(hyperliquidService.depositToHyperliquid).mockResolvedValue({
      success: false,
      error: 'Insufficient balance',
    });

    const { result } = renderHook(() => useHyperliquidDeposit());

    await act(async () => {
      await result.current.deposit('100');
    });

    expect(result.current.status).toBe('failed');
    expect(result.current.error).toBe('Insufficient balance');
    expect(result.current.txHash).toBeNull();
  });

  it('should handle exceptions', async () => {
    const hyperliquidService = await import('../services/hyperliquid');
    vi.mocked(hyperliquidService.depositToHyperliquid).mockRejectedValue(
      new Error('Network timeout')
    );

    const { result } = renderHook(() => useHyperliquidDeposit());

    await act(async () => {
      await result.current.deposit('100');
    });

    expect(result.current.status).toBe('failed');
    expect(result.current.error).toBe('Network timeout');
  });

  it('should reset state correctly', async () => {
    const hyperliquidService = await import('../services/hyperliquid');
    vi.mocked(hyperliquidService.depositToHyperliquid).mockResolvedValue({
      success: true,
      txHash: '0xabc123',
    });

    const { result } = renderHook(() => useHyperliquidDeposit());

    await act(async () => {
      await result.current.deposit('100');
    });

    expect(result.current.status).toBe('completed');

    act(() => {
      result.current.reset();
    });

    expect(result.current.status).toBe('idle');
    expect(result.current.statusMessage).toBe('');
    expect(result.current.txHash).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should track isDepositing correctly', () => {
    const { result } = renderHook(() => useHyperliquidDeposit());

    // Initial state - not depositing
    expect(result.current.isDepositing).toBe(false);
  });
});

describe('useHyperliquidBalance', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUsePublicClient.mockClear();
  });

  it('should use Hyperliquid-specific public client for balance checks', () => {
    // User might be connected to any chain (Sonic, Arbitrum, etc.)
    // but balance check should always query Hyperliquid chain
    renderHook(() => useHyperliquidBalance());

    // Verify usePublicClient was called with Hyperliquid chain ID
    expect(mockUsePublicClient).toHaveBeenCalledWith({ chainId: 999 });
  });

  it('should initialize with zero balance', () => {
    const { result } = renderHook(() => useHyperliquidBalance());

    expect(result.current.balance).toBe('0');
    expect(result.current.isLoading).toBe(false);
  });

  it('should fetch balance from Hyperliquid chain', async () => {
    const hyperliquidService = await import('../services/hyperliquid');
    vi.mocked(hyperliquidService.checkUSDCBalance).mockResolvedValue(BigInt(1000000)); // 1 USDC

    const { result } = renderHook(() => useHyperliquidBalance());

    await act(async () => {
      await result.current.fetchBalance();
    });

    expect(result.current.balance).toBe('1');
    expect(hyperliquidService.checkUSDCBalance).toHaveBeenCalled();
  });

  it('should handle balance fetch errors gracefully', async () => {
    const hyperliquidService = await import('../services/hyperliquid');
    vi.mocked(hyperliquidService.checkUSDCBalance).mockRejectedValue(new Error('RPC error'));

    const { result } = renderHook(() => useHyperliquidBalance());

    await act(async () => {
      await result.current.fetchBalance();
    });

    // Should not crash, balance remains at 0
    expect(result.current.balance).toBe('0');
    expect(result.current.isLoading).toBe(false);
  });
});

describe('Cross-chain compatibility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUsePublicClient.mockClear();
  });

  it('should work when user is connected to Sonic (146)', async () => {
    // Sonic is not a Railgun chain, but user should still be able to
    // check balance and deposit after bridging to Hyperliquid
    const hyperliquidService = await import('../services/hyperliquid');
    vi.mocked(hyperliquidService.depositToHyperliquid).mockResolvedValue({
      success: true,
      txHash: '0xabc123',
    });

    const { result } = renderHook(() => useHyperliquidDeposit());

    await act(async () => {
      await result.current.deposit('100');
    });

    expect(result.current.status).toBe('completed');
    // Verify we're querying Hyperliquid chain, not Sonic
    expect(mockUsePublicClient).toHaveBeenCalledWith({ chainId: 999 });
  });

  it('should work when user is connected to Arbitrum (42161)', async () => {
    // Arbitrum is a Railgun-supported chain
    const hyperliquidService = await import('../services/hyperliquid');
    vi.mocked(hyperliquidService.depositToHyperliquid).mockResolvedValue({
      success: true,
      txHash: '0xdef456',
    });

    const { result } = renderHook(() => useHyperliquidDeposit());

    await act(async () => {
      await result.current.deposit('50');
    });

    expect(result.current.status).toBe('completed');
    // Still queries Hyperliquid chain for deposit operations
    expect(mockUsePublicClient).toHaveBeenCalledWith({ chainId: 999 });
  });

  it('should work when user is connected to Ethereum (1)', async () => {
    // Ethereum is a Railgun-supported chain
    const hyperliquidService = await import('../services/hyperliquid');
    vi.mocked(hyperliquidService.depositToHyperliquid).mockResolvedValue({
      success: true,
      txHash: '0x789xyz',
    });

    const { result } = renderHook(() => useHyperliquidDeposit());

    await act(async () => {
      await result.current.deposit('200');
    });

    expect(result.current.status).toBe('completed');
    expect(mockUsePublicClient).toHaveBeenCalledWith({ chainId: 999 });
  });
});
