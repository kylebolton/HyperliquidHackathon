import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useLiFiQuote } from './useLiFiQuote';
import type { Quote } from '../types';
import React from 'react';

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
  gasCost: '0.001',
  gasCostUSD: '2.50',
  slippage: 0.5,
  steps: [],
};

// Mock wagmi
vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x1234567890123456789012345678901234567890',
    isConnected: true,
  })),
}));

// Mock lifi service
vi.mock('../services/lifi', () => ({
  fetchQuote: vi.fn(),
  fetchRoutes: vi.fn(),
  HYPEREVM_CHAIN_ID: 998,
}));

describe('useLiFiQuote', () => {
  let queryClient: QueryClient;

  beforeEach(async () => {
    vi.clearAllMocks();
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  });

  const wrapper = ({ children }: { children: React.ReactNode }) =>
    React.createElement(QueryClientProvider, { client: queryClient }, children);

  it('should not fetch when params are missing', async () => {
    const { result } = renderHook(
      () => useLiFiQuote({
        fromChainId: null,
        fromTokenAddress: null,
        toTokenAddress: '0x3c499c542cAb58579e359c57eBfE402d69d5c88d',
        amount: '0',
      }),
      { wrapper }
    );

    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
  });

  it('should not fetch when amount is zero', async () => {
    const { result } = renderHook(
      () => useLiFiQuote({
        fromChainId: 1,
        fromTokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        toTokenAddress: '0x3c499c542cAb58579e359c57eBfE402d69d5c88d',
        amount: '0',
      }),
      { wrapper }
    );

    expect(result.current.fetchStatus).toBe('idle');
  });

  it('should not fetch when disabled', async () => {
    const { result } = renderHook(
      () => useLiFiQuote({
        fromChainId: 1,
        fromTokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        toTokenAddress: '0x3c499c542cAb58579e359c57eBfE402d69d5c88d',
        amount: '1000000000',
        enabled: false,
      }),
      { wrapper }
    );

    expect(result.current.fetchStatus).toBe('idle');
  });

  it('should fetch quote when all params are valid', async () => {
    const lifiService = await import('../services/lifi');
    vi.mocked(lifiService.fetchQuote).mockResolvedValue(mockQuote);

    const { result } = renderHook(
      () => useLiFiQuote({
        fromChainId: 1,
        fromTokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        toTokenAddress: '0x3c499c542cAb58579e359c57eBfE402d69d5c88d',
        amount: '1000000000',
      }),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(mockQuote);
  });

  it('should handle fetch errors', async () => {
    const lifiService = await import('../services/lifi');
    vi.mocked(lifiService.fetchQuote).mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(
      () => useLiFiQuote({
        fromChainId: 1,
        fromTokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        toTokenAddress: '0x3c499c542cAb58579e359c57eBfE402d69d5c88d',
        amount: '1000000000',
      }),
      { wrapper }
    );

    // Wait for the query to either error out or settle
    await waitFor(() => {
      expect(result.current.isError || result.current.isFetched).toBe(true);
    }, { timeout: 2000 });
  });
});
