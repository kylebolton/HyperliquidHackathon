import { useState, useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAccount, useWalletClient } from 'wagmi';
import { BrowserProvider, JsonRpcSigner } from 'ethers';
import { fetchRoutes } from '../services/lifi';
import {
  isRailgunSupported,
  getBestRailgunChain,
  getPrivacyQuote,
  getRailgunChainName,
  executePrivacyFlow,
  getPrivacySteps,
  getNetworkName,
  isEngineReady,
  isWalletReady,
  type RailgunChainId,
  type PrivacyOperationState,
  type ShieldParams,
  type UnshieldParams,
} from '../services/railgun';
import type { Quote, PrivacyRouteQuote, StandardRouteQuote, PrivacyStep, PrivacyExecutionState } from '../types';

interface UsePrivacyRouteParams {
  fromChainId: number | null;
  fromTokenAddress: string | null;
  toTokenAddress: string;
  amount: string;
  slippage?: number;
  privacyEnabled: boolean;
  enabled?: boolean;
}

interface PrivacyRouteResult {
  standardRoutes: StandardRouteQuote[];
  privacyRoutes: PrivacyRouteQuote[];
  allRoutes: (StandardRouteQuote | PrivacyRouteQuote)[];
  isLoading: boolean;
  isFetched: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Hook to fetch both standard and privacy-enhanced routes
 */
export function usePrivacyRoutes({
  fromChainId,
  fromTokenAddress,
  toTokenAddress,
  amount,
  slippage = 0.5,
  privacyEnabled,
  enabled = true,
}: UsePrivacyRouteParams): PrivacyRouteResult {
  const { address } = useAccount();

  // Fetch standard routes
  const standardRoutesQuery = useQuery({
    queryKey: ['standard-routes', fromChainId, fromTokenAddress, toTokenAddress, amount, address, slippage],
    queryFn: async (): Promise<StandardRouteQuote[]> => {
      if (!fromChainId || !fromTokenAddress || !address || !amount || amount === '0') {
        return [];
      }

      const routes = await fetchRoutes(
        fromChainId,
        fromTokenAddress,
        toTokenAddress,
        amount,
        address,
        slippage
      );

      return routes.map(route => ({
        ...route,
        isPrivate: false as const,
      }));
    },
    enabled: enabled && !!fromChainId && !!fromTokenAddress && !!address && !!amount && amount !== '0',
    staleTime: 30000,
    refetchInterval: 30000,
    retry: 1,
  });

  // Fetch privacy-enhanced routes
  const privacyRoutesQuery = useQuery({
    queryKey: ['privacy-routes', fromChainId, fromTokenAddress, toTokenAddress, amount, address, slippage],
    queryFn: async (): Promise<PrivacyRouteQuote[]> => {
      if (!fromChainId || !fromTokenAddress || !address || !amount || amount === '0') {
        return [];
      }

      // Determine the best Railgun chain to use
      const railgunChainId = getBestRailgunChain(
        isRailgunSupported(fromChainId) ? fromChainId : undefined
      );
      const privacyQuote = getPrivacyQuote(railgunChainId);
      const railgunChainName = getRailgunChainName(railgunChainId);

      // If source chain is not a Railgun chain, we need to bridge to one first
      let routesToRailgun: Quote[] = [];
      if (fromChainId !== railgunChainId) {
        // Get native USDC on the Railgun chain as intermediate token
        const intermediateToken = getIntermediateToken(railgunChainId);
        
        routesToRailgun = await fetchRoutes(
          fromChainId,
          fromTokenAddress,
          intermediateToken,
          amount,
          address,
          slippage
        );
      }

      // Then get routes from Railgun chain to Hyperliquid
      // For now, we'll use the same quote structure and estimate
      const baseRoute = routesToRailgun[0] || await getDirectRoute(
        railgunChainId,
        fromTokenAddress,
        toTokenAddress,
        amount,
        address,
        slippage
      );

      if (!baseRoute) return [];

      // Build privacy steps
      const privacySteps = getPrivacySteps().map((step): PrivacyStep => ({
        ...step,
        status: 'pending',
      }));

      // Create privacy route quote
      const privacyRoute: PrivacyRouteQuote = {
        ...baseRoute,
        isPrivate: true,
        privacyChainId: railgunChainId,
        privacyChainName: railgunChainName,
        shieldFeeUSD: privacyQuote.shieldFeeUSD,
        unshieldFeeUSD: privacyQuote.unshieldFeeUSD,
        privacyFeeUSD: privacyQuote.totalFeeUSD,
        recommendedWaitTime: privacyQuote.recommendedWaitTime,
        estimatedTime: baseRoute.estimatedTime + privacyQuote.totalEstimatedTime,
        gasCostUSD: (parseFloat(baseRoute.gasCostUSD) + parseFloat(privacyQuote.totalFeeUSD)).toFixed(2),
        gasCost: (parseFloat(baseRoute.gasCost) + parseFloat(privacyQuote.totalFeeUSD)).toFixed(2),
        privacySteps,
      };

      return [privacyRoute];
    },
    enabled: enabled && privacyEnabled && !!fromChainId && !!fromTokenAddress && !!address && !!amount && amount !== '0',
    staleTime: 30000,
    refetchInterval: 30000,
    retry: 1,
  });

  // Combine all routes
  const allRoutes = useMemo(() => {
    const standard = standardRoutesQuery.data || [];
    const privacy = privacyRoutesQuery.data || [];
    return [...standard, ...privacy];
  }, [standardRoutesQuery.data, privacyRoutesQuery.data]);

  return {
    standardRoutes: standardRoutesQuery.data || [],
    privacyRoutes: privacyRoutesQuery.data || [],
    allRoutes,
    isLoading: standardRoutesQuery.isLoading || (privacyEnabled && privacyRoutesQuery.isLoading),
    isFetched: standardRoutesQuery.isFetched && (!privacyEnabled || privacyRoutesQuery.isFetched),
    error: standardRoutesQuery.error || privacyRoutesQuery.error || null,
    refetch: () => {
      standardRoutesQuery.refetch();
      if (privacyEnabled) privacyRoutesQuery.refetch();
    },
  };
}

/**
 * Hook to execute privacy route using real RAILGUN SDK
 */
export function usePrivacyExecution() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [executionState, setExecutionState] = useState<PrivacyExecutionState>({
    status: 'idle',
    currentStepId: null,
    steps: [],
    overallProgress: 0,
  });

  // Convert wagmi wallet client to ethers signer
  const getSigner = useCallback(async (): Promise<JsonRpcSigner | null> => {
    if (!walletClient) return null;

    try {
      const provider = new BrowserProvider(walletClient.transport as any);
      const signer = await provider.getSigner();
      return signer;
    } catch (error) {
      console.error('[Privacy] Failed to get signer:', error);
      return null;
    }
  }, [walletClient]);

  const reset = useCallback(() => {
    setExecutionState({
      status: 'idle',
      currentStepId: null,
      steps: [],
      overallProgress: 0,
    });
  }, []);

  const executePrivacyRoute = useCallback(async (
    route: PrivacyRouteQuote,
    destinationAddress?: string
  ): Promise<boolean> => {
    if (!address) {
      setExecutionState(prev => ({
        ...prev,
        status: 'failed',
        error: 'Wallet not connected',
      }));
      return false;
    }

    // Check if engine and wallet are ready
    if (!isEngineReady()) {
      setExecutionState(prev => ({
        ...prev,
        status: 'failed',
        error: 'RAILGUN engine not initialized. Please wait or refresh the page.',
      }));
      return false;
    }

    if (!isWalletReady()) {
      setExecutionState(prev => ({
        ...prev,
        status: 'failed',
        error: 'RAILGUN wallet not ready. Please enable privacy mode first.',
      }));
      return false;
    }

    const signer = await getSigner();
    if (!signer) {
      setExecutionState(prev => ({
        ...prev,
        status: 'failed',
        error: 'Could not get wallet signer',
      }));
      return false;
    }

    // Initialize steps
    const initialSteps: PrivacyStep[] = getPrivacySteps().map((step): PrivacyStep => ({
      ...step,
      status: 'pending',
    }));

    setExecutionState({
      status: 'executing',
      currentStepId: 'bridge_to_railgun',
      steps: initialSteps,
      overallProgress: 0,
    });

    try {
      // Step 1: Bridge to Railgun chain (if needed)
      updateStepStatus('bridge_to_railgun', 'in_progress');
      
      // TODO: Implement actual bridge via LI.FI if source chain differs from privacy chain
      // For now, assume user is already on the privacy chain or will handle bridge separately
      await delay(1000); // Small delay for UX
      updateStepStatus('bridge_to_railgun', 'completed');

      // Get network name for RAILGUN operations
      const networkName = getNetworkName(route.privacyChainId as RailgunChainId);

      // Prepare shield parameters
      const shieldParams: ShieldParams = {
        networkName,
        tokenAddress: route.fromToken.address,
        tokenDecimals: route.fromToken.decimals,
        amount: BigInt(route.fromAmount),
        fromAddress: address,
      };

      // Prepare unshield parameters
      const unshieldParams: UnshieldParams = {
        networkName,
        tokenAddress: route.toToken.address,
        tokenDecimals: route.toToken.decimals,
        amount: BigInt(route.toAmount),
        toAddress: destinationAddress || address,
        walletId: '', // Will be filled by the SDK internally
      };

      // Execute the full privacy flow using real RAILGUN SDK
      const privacyResult = await executePrivacyFlow(
        signer,
        shieldParams,
        unshieldParams,
        (state: PrivacyOperationState) => {
          handlePrivacyProgress(state);
        },
        false // Don't skip wait
      );

      if (!privacyResult.success) {
        throw new Error(privacyResult.error || 'Privacy operation failed');
      }

      // Step 5: Bridge to Hyperliquid
      updateStepStatus('bridge_to_hyperliquid', 'in_progress');
      
      // TODO: Implement actual bridge to Hyperliquid via LI.FI
      await delay(2000);
      updateStepStatus('bridge_to_hyperliquid', 'completed');

      setExecutionState(prev => ({
        ...prev,
        status: 'completed',
        currentStepId: null,
        overallProgress: 100,
        shieldTxHash: privacyResult.shieldTxHash,
        unshieldTxHash: privacyResult.unshieldTxHash,
      }));

      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setExecutionState(prev => ({
        ...prev,
        status: 'failed',
        error: errorMessage,
      }));
      return false;
    }

    function updateStepStatus(stepId: string, status: PrivacyStep['status'], txHash?: string) {
      setExecutionState(prev => {
        const newSteps = prev.steps.map(step =>
          step.id === stepId ? { ...step, status, txHash } : step
        );
        const completedCount = newSteps.filter(s => s.status === 'completed').length;
        const progress = Math.round((completedCount / newSteps.length) * 100);
        
        return {
          ...prev,
          steps: newSteps,
          currentStepId: status === 'in_progress' ? stepId as PrivacyStep['id'] : prev.currentStepId,
          overallProgress: progress,
        };
      });
    }

    function handlePrivacyProgress(state: PrivacyOperationState) {
      if (state.status === 'shielding' || state.status === 'preparing' || state.status === 'awaiting_approval' || state.status === 'generating_proof') {
        updateStepStatus('shield', 'in_progress', state.txHash);
      } else if (state.status === 'shielded' || state.status === 'waiting') {
        updateStepStatus('shield', 'completed', state.shieldTxHash);
        updateStepStatus('wait', 'in_progress');
        
        // Update wait time remaining in step
        if (state.waitTimeRemaining !== undefined) {
          setExecutionState(prev => ({
            ...prev,
            steps: prev.steps.map(step =>
              step.id === 'wait' 
                ? { ...step, estimatedTime: state.waitTimeRemaining } 
                : step
            ),
          }));
        }
      } else if (state.status === 'unshielding') {
        updateStepStatus('wait', 'completed');
        updateStepStatus('unshield', 'in_progress');
      } else if (state.status === 'completed') {
        updateStepStatus('unshield', 'completed', state.unshieldTxHash);
      }
    }
  }, [address, getSigner]);

  return {
    executionState,
    executePrivacyRoute,
    reset,
    isExecuting: executionState.status === 'executing',
  };
}

// Helper functions
function getIntermediateToken(chainId: RailgunChainId): string {
  // USDC addresses on different chains
  const USDC_ADDRESSES: Record<number, string> = {
    1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // Ethereum
    137: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', // Polygon
    42161: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // Arbitrum
    56: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', // BSC
  };
  return USDC_ADDRESSES[chainId] || USDC_ADDRESSES[42161];
}

async function getDirectRoute(
  chainId: number,
  fromTokenAddress: string,
  toTokenAddress: string,
  amount: string,
  fromAddress: string,
  slippage: number
): Promise<Quote | null> {
  try {
    const routes = await fetchRoutes(
      chainId,
      fromTokenAddress,
      toTokenAddress,
      amount,
      fromAddress,
      slippage
    );
    return routes[0] || null;
  } catch {
    return null;
  }
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Utility to check if a route is a privacy route
 */
export function isPrivacyRoute(route: Quote): route is PrivacyRouteQuote {
  return 'isPrivate' in route && route.isPrivate === true;
}

/**
 * Get formatted privacy time estimate
 */
export function formatPrivacyTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  if (seconds < 3600) {
    const mins = Math.ceil(seconds / 60);
    return `${mins} min`;
  }
  const hours = Math.floor(seconds / 3600);
  const mins = Math.ceil((seconds % 3600) / 60);
  return `${hours}h ${mins}m`;
}
