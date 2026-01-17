import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLiFiExecution } from './useLiFiExecution';
import type { Quote } from '../types';

// Mock quote for testing
const mockQuote: Quote = {
  id: 'test-quote-123',
  fromChain: 1,
  toChain: 998,
  fromToken: {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logo: 'https://example.com/usdc.png',
    chainId: 1,
  },
  toToken: {
    address: '0x3c499c542cAb58579e359c57eBfE402d69d5c88d',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logo: 'https://example.com/usdc.png',
    chainId: 998,
  },
  fromAmount: '1000000000',
  toAmount: '998000000',
  estimatedTime: 300,
  gasCostUSD: '2.50',
  slippage: 0.5,
  steps: [{ type: 'bridge', fromChain: 1, toChain: 998, fromToken: {} as never, toToken: {} as never }],
};

// Mock wagmi
vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x1234567890123456789012345678901234567890',
    isConnected: true,
    chainId: 1,
  })),
  useWalletClient: vi.fn(() => ({
    data: {
      account: { address: '0x1234567890123456789012345678901234567890' },
      chain: { id: 1 },
      transport: {},
    },
  })),
}));

// Mock LI.FI SDK
vi.mock('@lifi/sdk', () => ({
  getRoutes: vi.fn(),
  executeRoute: vi.fn(),
  createConfig: vi.fn(() => ({})),
}));

describe('useLiFiExecution', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with idle status', () => {
    const { result } = renderHook(() => useLiFiExecution());

    expect(result.current.status.status).toBe('idle');
    expect(result.current.status.currentStep).toBe(0);
    expect(result.current.status.totalSteps).toBe(0);
    expect(result.current.isExecuting).toBe(false);
  });

  it('should fail if no routes are available', async () => {
    const lifiSdk = await import('@lifi/sdk');
    vi.mocked(lifiSdk.getRoutes).mockResolvedValue({ routes: [] });

    const { result } = renderHook(() => useLiFiExecution());

    let success: boolean = true;
    await act(async () => {
      success = await result.current.execute(mockQuote);
    });

    expect(success).toBe(false);
    expect(result.current.status.status).toBe('failed');
    expect(result.current.status.error).toBe('No routes available');
  });

  it('should execute route successfully', async () => {
    const mockRoute = { steps: [{ id: 'step-1' }] };
    const lifiSdk = await import('@lifi/sdk');
    
    vi.mocked(lifiSdk.getRoutes).mockResolvedValue({ routes: [mockRoute] });
    vi.mocked(lifiSdk.executeRoute).mockResolvedValue(mockRoute as never);

    const { result } = renderHook(() => useLiFiExecution());

    let success: boolean = false;
    await act(async () => {
      success = await result.current.execute(mockQuote);
    });

    expect(success).toBe(true);
    expect(result.current.status.status).toBe('completed');
  });

  it('should handle execution errors', async () => {
    const lifiSdk = await import('@lifi/sdk');
    vi.mocked(lifiSdk.getRoutes).mockRejectedValue(new Error('RPC error'));

    const { result } = renderHook(() => useLiFiExecution());

    await act(async () => {
      await result.current.execute(mockQuote);
    });

    expect(result.current.status.status).toBe('failed');
    expect(result.current.status.error).toBe('RPC error');
  });

  it('should reset status correctly', async () => {
    const lifiSdk = await import('@lifi/sdk');
    vi.mocked(lifiSdk.getRoutes).mockRejectedValue(new Error('Error'));

    const { result } = renderHook(() => useLiFiExecution());

    await act(async () => {
      await result.current.execute(mockQuote);
    });

    expect(result.current.status.status).toBe('failed');

    act(() => {
      result.current.reset();
    });

    expect(result.current.status.status).toBe('idle');
    expect(result.current.status.currentStep).toBe(0);
    expect(result.current.status.totalSteps).toBe(0);
  });
});
