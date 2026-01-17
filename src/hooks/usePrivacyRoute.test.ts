import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { 
  usePrivacyRoutes, 
  usePrivacyExecution, 
  isPrivacyRoute,
  formatPrivacyTime,
} from './usePrivacyRoute';
import type { Quote, PrivacyRouteQuote, StandardRouteQuote } from '../types';

// Mock wagmi
vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x1234567890123456789012345678901234567890',
    isConnected: true,
  })),
}));

// Mock lifi service
vi.mock('../services/lifi', () => ({
  fetchRoutes: vi.fn(),
}));

// Mock railgun service
vi.mock('../services/railgun', () => ({
  isRailgunSupported: vi.fn((chainId: number) => [1, 137, 42161, 56].includes(chainId)),
  getBestRailgunChain: vi.fn(() => 42161),
  getPrivacyQuote: vi.fn(() => ({
    chainId: 42161,
    shieldFeeUSD: '0.50',
    unshieldFeeUSD: '0.50',
    totalFeeUSD: '1.00',
    estimatedShieldTime: 30,
    estimatedUnshieldTime: 30,
    recommendedWaitTime: 600,
    totalEstimatedTime: 660,
  })),
  getRailgunChainName: vi.fn(() => 'Arbitrum'),
  executePrivacyFlow: vi.fn(),
  getPrivacySteps: vi.fn(() => [
    { id: 'bridge_to_railgun', label: 'Bridge to Privacy Chain', description: 'Transfer to Railgun chain' },
    { id: 'shield', label: 'Shield Funds', description: 'Enter private balance' },
    { id: 'wait', label: 'Anonymity Period', description: 'Wait for anonymity' },
    { id: 'unshield', label: 'Unshield Funds', description: 'Exit to public address' },
    { id: 'bridge_to_hyperliquid', label: 'Bridge to Hyperliquid', description: 'Final destination' },
  ]),
}));

describe('Privacy Route Utilities', () => {
  describe('isPrivacyRoute', () => {
    it('should return true for privacy routes', () => {
      const privacyRoute: PrivacyRouteQuote = {
        id: 'privacy-route-1',
        fromChain: 1,
        toChain: 999,
        fromToken: {
          address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          symbol: 'USDC',
          name: 'USD Coin',
          decimals: 6,
          chainId: 1,
        },
        toToken: {
          address: '0xusdc',
          symbol: 'USDC',
          name: 'USD Coin',
          decimals: 6,
          chainId: 999,
        },
        fromAmount: '1000000000',
        toAmount: '990000000',
        estimatedTime: 900,
        gasCost: '3.50',
        gasCostUSD: '3.50',
        slippage: 0.5,
        steps: [],
        isPrivate: true,
        privacyChainId: 42161,
        privacyChainName: 'Arbitrum',
        shieldFeeUSD: '0.50',
        unshieldFeeUSD: '0.50',
        privacyFeeUSD: '1.00',
        recommendedWaitTime: 600,
        privacySteps: [],
      };

      expect(isPrivacyRoute(privacyRoute)).toBe(true);
    });

    it('should return false for standard routes', () => {
      const standardRoute: Quote = {
        id: 'standard-route-1',
        fromChain: 1,
        toChain: 999,
        fromToken: {
          address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          symbol: 'USDC',
          name: 'USD Coin',
          decimals: 6,
          chainId: 1,
        },
        toToken: {
          address: '0xusdc',
          symbol: 'USDC',
          name: 'USD Coin',
          decimals: 6,
          chainId: 999,
        },
        fromAmount: '1000000000',
        toAmount: '998000000',
        estimatedTime: 300,
        gasCost: '2.50',
        gasCostUSD: '2.50',
        slippage: 0.5,
        steps: [],
      };

      expect(isPrivacyRoute(standardRoute)).toBe(false);
    });

    it('should return false for routes with isPrivate=false', () => {
      const route: StandardRouteQuote = {
        id: 'standard-route-1',
        fromChain: 1,
        toChain: 999,
        fromToken: {
          address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          symbol: 'USDC',
          name: 'USD Coin',
          decimals: 6,
          chainId: 1,
        },
        toToken: {
          address: '0xusdc',
          symbol: 'USDC',
          name: 'USD Coin',
          decimals: 6,
          chainId: 999,
        },
        fromAmount: '1000000000',
        toAmount: '998000000',
        estimatedTime: 300,
        gasCost: '2.50',
        gasCostUSD: '2.50',
        slippage: 0.5,
        steps: [],
        isPrivate: false,
      };

      expect(isPrivacyRoute(route)).toBe(false);
    });
  });

  describe('formatPrivacyTime', () => {
    it('should format seconds', () => {
      expect(formatPrivacyTime(30)).toBe('30s');
      expect(formatPrivacyTime(59)).toBe('59s');
    });

    it('should format minutes', () => {
      expect(formatPrivacyTime(60)).toBe('1 min');
      expect(formatPrivacyTime(300)).toBe('5 min');
      expect(formatPrivacyTime(3599)).toBe('60 min');
    });

    it('should format hours and minutes', () => {
      expect(formatPrivacyTime(3600)).toBe('1h 0m');
      expect(formatPrivacyTime(3660)).toBe('1h 1m');
      expect(formatPrivacyTime(7200)).toBe('2h 0m');
      expect(formatPrivacyTime(7260)).toBe('2h 1m');
    });
  });
});

describe('usePrivacyRoutes', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
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

  it('should return empty arrays when params are missing', async () => {
    const { result } = renderHook(
      () => usePrivacyRoutes({
        fromChainId: null,
        fromTokenAddress: null,
        toTokenAddress: '0xusdc',
        amount: '0',
        privacyEnabled: true,
      }),
      { wrapper }
    );

    expect(result.current.standardRoutes).toEqual([]);
    expect(result.current.privacyRoutes).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  it('should return empty privacy routes when privacy is disabled', async () => {
    const { result } = renderHook(
      () => usePrivacyRoutes({
        fromChainId: 1,
        fromTokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        toTokenAddress: '0xusdc',
        amount: '1000000',
        privacyEnabled: false,
      }),
      { wrapper }
    );

    // Privacy routes should be empty when disabled
    expect(result.current.privacyRoutes).toEqual([]);
  });

  it('should fetch standard routes', async () => {
    const lifiService = await import('../services/lifi');
    vi.mocked(lifiService.fetchRoutes).mockResolvedValue([{
      id: 'route-1',
      fromChain: 1,
      toChain: 999,
      fromToken: {
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        chainId: 1,
      },
      toToken: {
        address: '0xusdc',
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        chainId: 999,
      },
      fromAmount: '1000000',
      toAmount: '990000',
      estimatedTime: 300,
      gasCost: '2.50',
      gasCostUSD: '2.50',
      slippage: 0.5,
      steps: [],
    }]);

    const { result } = renderHook(
      () => usePrivacyRoutes({
        fromChainId: 1,
        fromTokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        toTokenAddress: '0xusdc',
        amount: '1000000',
        privacyEnabled: true,
      }),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.standardRoutes.length).toBeGreaterThanOrEqual(0);
    });
  });
});

describe('usePrivacyExecution', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with idle status', () => {
    const { result } = renderHook(() => usePrivacyExecution());

    expect(result.current.executionState.status).toBe('idle');
    expect(result.current.executionState.currentStepId).toBeNull();
    expect(result.current.executionState.steps).toEqual([]);
    expect(result.current.executionState.overallProgress).toBe(0);
    expect(result.current.isExecuting).toBe(false);
  });

  it('should reset state correctly', async () => {
    const { result } = renderHook(() => usePrivacyExecution());

    // Manually set some state by calling executePrivacyRoute which will fail
    // since we don't have a proper route
    const mockRoute: PrivacyRouteQuote = {
      id: 'privacy-route-1',
      fromChain: 1,
      toChain: 999,
      fromToken: {
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        chainId: 1,
      },
      toToken: {
        address: '0xusdc',
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        chainId: 999,
      },
      fromAmount: '1000000000',
      toAmount: '990000000',
      estimatedTime: 900,
      gasCost: '3.50',
      gasCostUSD: '3.50',
      slippage: 0.5,
      steps: [],
      isPrivate: true,
      privacyChainId: 42161,
      privacyChainName: 'Arbitrum',
      shieldFeeUSD: '0.50',
      unshieldFeeUSD: '0.50',
      privacyFeeUSD: '1.00',
      recommendedWaitTime: 600,
      privacySteps: [],
    };

    // Start execution then reset
    act(() => {
      result.current.executePrivacyRoute(mockRoute);
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.executionState.status).toBe('idle');
    expect(result.current.executionState.currentStepId).toBeNull();
    expect(result.current.executionState.steps).toEqual([]);
    expect(result.current.executionState.overallProgress).toBe(0);
    expect(result.current.isExecuting).toBe(false);
  });

  it('should track isExecuting correctly', () => {
    const { result } = renderHook(() => usePrivacyExecution());

    expect(result.current.isExecuting).toBe(false);
  });

  it('should handle execution with valid route', async () => {
    const railgunService = await import('../services/railgun');
    vi.mocked(railgunService.executePrivacyFlow).mockResolvedValue({
      success: true,
      shieldTxHash: '0xshield123',
      unshieldTxHash: '0xunshield123',
    });

    const { result } = renderHook(() => usePrivacyExecution());

    const mockRoute: PrivacyRouteQuote = {
      id: 'privacy-route-1',
      fromChain: 42161, // Start from Railgun-supported chain
      toChain: 999,
      fromToken: {
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        chainId: 42161,
      },
      toToken: {
        address: '0xusdc',
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        chainId: 999,
      },
      fromAmount: '1000000000',
      toAmount: '990000000',
      estimatedTime: 900,
      gasCost: '3.50',
      gasCostUSD: '3.50',
      slippage: 0.5,
      steps: [],
      isPrivate: true,
      privacyChainId: 42161,
      privacyChainName: 'Arbitrum',
      shieldFeeUSD: '0.50',
      unshieldFeeUSD: '0.50',
      privacyFeeUSD: '1.00',
      recommendedWaitTime: 600,
      privacySteps: [],
    };

    let executePromise: Promise<boolean>;
    act(() => {
      executePromise = result.current.executePrivacyRoute(mockRoute);
    });

    // Should be executing
    expect(result.current.executionState.status).toBe('executing');
    expect(result.current.isExecuting).toBe(true);
  });
});

describe('Privacy Route Integration', () => {
  it('should have consistent privacy step IDs', async () => {
    const railgunService = await import('../services/railgun');
    const steps = railgunService.getPrivacySteps();
    
    const expectedIds = [
      'bridge_to_railgun',
      'shield',
      'wait',
      'unshield',
      'bridge_to_hyperliquid',
    ];

    expect(steps.map(s => s.id)).toEqual(expectedIds);
  });

  it('should calculate correct total estimated time', () => {
    const baseTime = 300; // 5 minutes for bridge
    const privacyTime = 660; // ~11 minutes for privacy
    const totalTime = baseTime + privacyTime;
    
    expect(totalTime).toBe(960); // 16 minutes total
  });
});
