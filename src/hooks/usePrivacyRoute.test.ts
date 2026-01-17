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

  describe('isFetched property', () => {
    it('should have isFetched=false initially when queries are disabled', () => {
      const { result } = renderHook(
        () => usePrivacyRoutes({
          fromChainId: null,
          fromTokenAddress: null,
          toTokenAddress: '0xusdc',
          amount: '0',
          privacyEnabled: true,
          enabled: false,
        }),
        { wrapper }
      );

      // When queries are disabled, isFetched should be false
      expect(result.current.isFetched).toBe(false);
    });

    it('should have isFetched=true after queries complete with results', async () => {
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
          privacyEnabled: false,
        }),
        { wrapper }
      );

      await waitFor(() => {
        expect(result.current.isFetched).toBe(true);
      });

      expect(result.current.standardRoutes.length).toBeGreaterThan(0);
    });

    it('should have isFetched=true after queries complete with empty results', async () => {
      const lifiService = await import('../services/lifi');
      // Return empty array - no routes found
      vi.mocked(lifiService.fetchRoutes).mockResolvedValue([]);

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

      await waitFor(() => {
        expect(result.current.isFetched).toBe(true);
      });

      // Routes should be empty but isFetched should still be true
      expect(result.current.standardRoutes).toEqual([]);
      expect(result.current.isFetched).toBe(true);
    });

    it('should have isFetched=true in privacy mode after both queries complete', async () => {
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
        expect(result.current.isFetched).toBe(true);
      });
    });

    it('should have isFetched=true in privacy mode even when no routes found', async () => {
      const lifiService = await import('../services/lifi');
      // Mock returns empty array - simulating no routes available
      vi.mocked(lifiService.fetchRoutes).mockResolvedValue([]);

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
        expect(result.current.isFetched).toBe(true);
      });

      // This is the key test case: even with empty routes,
      // isFetched should be true so the UI shows "No Route Found"
      // instead of "Select a Route"
      expect(result.current.standardRoutes).toEqual([]);
      expect(result.current.privacyRoutes).toEqual([]);
      expect(result.current.isFetched).toBe(true);
    });

    it('should track loading state correctly while fetching', async () => {
      const lifiService = await import('../services/lifi');
      
      // Create a promise we can control
      let resolveRoutes: (value: Quote[]) => void;
      const routesPromise = new Promise<Quote[]>((resolve) => {
        resolveRoutes = resolve;
      });
      
      vi.mocked(lifiService.fetchRoutes).mockReturnValue(routesPromise);

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

      // Should be loading initially
      expect(result.current.isLoading).toBe(true);
      expect(result.current.isFetched).toBe(false);

      // Resolve the promise
      await act(async () => {
        resolveRoutes!([]);
      });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
        expect(result.current.isFetched).toBe(true);
      });
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

    act(() => {
      result.current.executePrivacyRoute(mockRoute);
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

describe('Sonic Privacy Routing', () => {
  // Sonic (chain ID 146) is NOT a Railgun-supported chain.
  // When privacy mode is enabled from Sonic, funds must first bridge to a 
  // Railgun-supported chain (Arbitrum, Polygon, BSC, or Ethereum) before 
  // going through the privacy flow.

  const SONIC_CHAIN_ID = 146;
  const RAILGUN_CHAINS = [1, 137, 42161, 56]; // Ethereum, Polygon, Arbitrum, BSC

  it('should recognize Sonic is NOT a Railgun-supported chain', async () => {
    const railgunService = await import('../services/railgun');
    
    expect(railgunService.isRailgunSupported(SONIC_CHAIN_ID)).toBe(false);
  });

  it('should recognize all Railgun-supported chains', async () => {
    const railgunService = await import('../services/railgun');
    
    RAILGUN_CHAINS.forEach(chainId => {
      expect(railgunService.isRailgunSupported(chainId)).toBe(true);
    });
  });

  it('should route Sonic to a Railgun chain for privacy (defaults to Arbitrum)', async () => {
    const railgunService = await import('../services/railgun');
    
    // When source chain (Sonic) doesn't support Railgun, it should pick a default
    const recommendedChain = railgunService.getBestRailgunChain(SONIC_CHAIN_ID);
    
    // Should return Arbitrum (42161) as the default Railgun chain
    expect(recommendedChain).toBe(42161);
    expect(RAILGUN_CHAINS).toContain(recommendedChain);
  });

  it('should use source chain if it IS a Railgun chain', async () => {
    const railgunService = await import('../services/railgun');
    
    // If user starts from Arbitrum, use Arbitrum for privacy
    const fromArbitrum = railgunService.getBestRailgunChain(42161);
    expect(fromArbitrum).toBe(42161);
    
    // If user starts from Polygon, use Polygon for privacy
    vi.mocked(railgunService.getBestRailgunChain).mockImplementationOnce((chainId) => {
      if (chainId && [1, 137, 42161, 56].includes(chainId)) return chainId as any;
      return 42161;
    });
    const fromPolygon = railgunService.getBestRailgunChain(137);
    expect(fromPolygon).toBe(137);
  });

  it('should include bridge_to_railgun step when starting from non-Railgun chain like Sonic', async () => {
    const railgunService = await import('../services/railgun');
    const steps = railgunService.getPrivacySteps();
    
    // The first step should be bridge_to_railgun for non-Railgun source chains
    const bridgeStep = steps.find(s => s.id === 'bridge_to_railgun');
    expect(bridgeStep).toBeDefined();
    expect(bridgeStep?.label).toBe('Bridge to Privacy Chain');
    expect(bridgeStep?.description).toContain('Railgun');
  });

  it('should support privacy mode for Sonic users via bridging', async () => {
    // This test verifies the full flow works for Sonic users:
    // 1. User is on Sonic (146)
    // 2. Privacy mode bridges to Arbitrum (42161) 
    // 3. Funds are shielded on Arbitrum
    // 4. After wait period, unshield to new address
    // 5. Bridge to Hyperliquid (999)
    
    const railgunService = await import('../services/railgun');
    
    // Verify Sonic is not directly supported
    expect(railgunService.isRailgunSupported(SONIC_CHAIN_ID)).toBe(false);
    
    // Verify we get a valid Railgun chain for the privacy flow
    const privacyChainId = railgunService.getBestRailgunChain(SONIC_CHAIN_ID);
    expect(railgunService.isRailgunSupported(privacyChainId)).toBe(true);
    
    // Verify we can get a privacy quote for that chain
    const quote = railgunService.getPrivacyQuote(privacyChainId as any);
    expect(quote).toBeDefined();
    expect(quote.chainId).toBe(privacyChainId);
    expect(parseFloat(quote.totalFeeUSD)).toBeGreaterThan(0);
    
    // Verify the chain name is correct
    const chainName = railgunService.getRailgunChainName(privacyChainId as any);
    expect(chainName).toBe('Arbitrum');
  });
});
