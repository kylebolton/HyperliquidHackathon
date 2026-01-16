import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useHyperliquidDeposit } from './useHyperliquidDeposit';

// Mock wagmi hooks
vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x1234567890123456789012345678901234567890',
    isConnected: true,
  })),
  useWalletClient: vi.fn(() => ({
    data: {
      account: { address: '0x1234567890123456789012345678901234567890' },
      chain: { id: 998 },
      transport: {},
    },
  })),
  usePublicClient: vi.fn(() => ({
    readContract: vi.fn(),
    waitForTransactionReceipt: vi.fn(),
  })),
}));

// Mock hyperliquid service
vi.mock('../services/hyperliquid', () => ({
  depositToHyperliquid: vi.fn(),
  checkUSDCBalance: vi.fn(),
}));

describe('useHyperliquidDeposit', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with idle status', () => {
    const { result } = renderHook(() => useHyperliquidDeposit());

    expect(result.current.status).toBe('idle');
    expect(result.current.statusMessage).toBe('');
    expect(result.current.txHash).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.isDepositing).toBe(false);
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
