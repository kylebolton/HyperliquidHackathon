import { createConfig, getQuote, getRoutes, executeRoute, type Route, type RoutesRequest, type QuoteRequest } from '@lifi/sdk';
import type { Quote, RouteStep } from '../types';

// Initialize LI.FI SDK
const lifiConfig = createConfig({
  integrator: 'liquyn-swap',
  // apiKey: import.meta.env.VITE_LIFI_API_KEY, // Optional: Add for higher rate limits
});

export { lifiConfig };

// HyperEVM chain ID
export const HYPEREVM_CHAIN_ID = 998;

// Convert LI.FI route to our Quote format
function convertToQuote(route: Route): Quote {
  const steps: RouteStep[] = route.steps.map((step) => ({
    type: step.type as 'swap' | 'bridge' | 'cross',
    tool: step.tool,
    toolLogo: step.toolDetails?.logoURI,
    fromChain: step.action.fromChainId,
    toChain: step.action.toChainId,
    fromToken: {
      symbol: step.action.fromToken.symbol,
      name: step.action.fromToken.name || step.action.fromToken.symbol,
      decimals: step.action.fromToken.decimals,
      address: step.action.fromToken.address,
      chainId: step.action.fromChainId,
      logo: step.action.fromToken.logoURI,
    },
    toToken: {
      symbol: step.action.toToken.symbol,
      name: step.action.toToken.name || step.action.toToken.symbol,
      decimals: step.action.toToken.decimals,
      address: step.action.toToken.address,
      chainId: step.action.toChainId,
      logo: step.action.toToken.logoURI,
    },
    fromAmount: step.action.fromAmount,
    toAmount: step.estimate.toAmount,
    estimatedTime: step.estimate.executionDuration,
  }));

  return {
    id: route.id,
    fromChain: route.fromChainId,
    toChain: route.toChainId,
    fromToken: {
      symbol: route.fromToken.symbol,
      name: route.fromToken.name || route.fromToken.symbol,
      decimals: route.fromToken.decimals,
      address: route.fromToken.address,
      chainId: route.fromChainId,
      logo: route.fromToken.logoURI,
    },
    toToken: {
      symbol: route.toToken.symbol,
      name: route.toToken.name || route.toToken.symbol,
      decimals: route.toToken.decimals,
      address: route.toToken.address,
      chainId: route.toChainId,
      logo: route.toToken.logoURI,
    },
    fromAmount: route.fromAmount,
    toAmount: route.toAmount,
    estimatedTime: route.steps.reduce((acc, step) => acc + step.estimate.executionDuration, 0),
    gasCost: route.gasCostUSD || '0',
    gasCostUSD: route.gasCostUSD || '0',
    steps,
    slippage: 0.5, // Default slippage
  };
}

// Fetch quote for bridging to HyperEVM
export async function fetchQuote(
  fromChainId: number,
  fromTokenAddress: string,
  toTokenAddress: string,
  fromAmount: string,
  fromAddress: string,
  slippage: number = 0.5
): Promise<Quote | null> {
  try {
    const quoteRequest: QuoteRequest = {
      fromChain: fromChainId,
      toChain: HYPEREVM_CHAIN_ID,
      fromToken: fromTokenAddress,
      toToken: toTokenAddress,
      fromAmount: fromAmount,
      fromAddress: fromAddress,
      slippage: slippage / 100, // Convert percentage to decimal
    };

    const quote = await getQuote(quoteRequest);
    
    // Create a minimal route-like structure from the quote
    const quoteAsRoute = {
      id: quote.id,
      fromChainId: quote.action.fromChainId,
      toChainId: quote.action.toChainId,
      fromToken: quote.action.fromToken,
      toToken: quote.action.toToken,
      fromAmount: quote.action.fromAmount,
      toAmount: quote.estimate.toAmount,
      gasCostUSD: quote.estimate.gasCosts?.reduce((acc, gc) => acc + parseFloat(gc.amountUSD || '0'), 0).toString() || '0',
      steps: [{
        id: quote.id,
        type: quote.type,
        tool: quote.tool,
        toolDetails: quote.toolDetails,
        action: quote.action,
        estimate: quote.estimate,
      }],
    };

    // Convert to our Quote format manually
    const result: Quote = {
      id: quoteAsRoute.id,
      fromChain: quoteAsRoute.fromChainId,
      toChain: quoteAsRoute.toChainId,
      fromToken: {
        symbol: quoteAsRoute.fromToken.symbol,
        name: quoteAsRoute.fromToken.name || quoteAsRoute.fromToken.symbol,
        decimals: quoteAsRoute.fromToken.decimals,
        address: quoteAsRoute.fromToken.address,
        chainId: quoteAsRoute.fromChainId,
        logo: quoteAsRoute.fromToken.logoURI,
      },
      toToken: {
        symbol: quoteAsRoute.toToken.symbol,
        name: quoteAsRoute.toToken.name || quoteAsRoute.toToken.symbol,
        decimals: quoteAsRoute.toToken.decimals,
        address: quoteAsRoute.toToken.address,
        chainId: quoteAsRoute.toChainId,
        logo: quoteAsRoute.toToken.logoURI,
      },
      fromAmount: quoteAsRoute.fromAmount,
      toAmount: quoteAsRoute.toAmount,
      estimatedTime: quote.estimate.executionDuration,
      gasCost: quoteAsRoute.gasCostUSD,
      gasCostUSD: quoteAsRoute.gasCostUSD,
      steps: [{
        type: quote.type as 'swap' | 'bridge' | 'cross',
        tool: quote.tool,
        toolLogo: quote.toolDetails?.logoURI,
        fromChain: quote.action.fromChainId,
        toChain: quote.action.toChainId,
        fromToken: {
          symbol: quote.action.fromToken.symbol,
          name: quote.action.fromToken.name || quote.action.fromToken.symbol,
          decimals: quote.action.fromToken.decimals,
          address: quote.action.fromToken.address,
          chainId: quote.action.fromChainId,
          logo: quote.action.fromToken.logoURI,
        },
        toToken: {
          symbol: quote.action.toToken.symbol,
          name: quote.action.toToken.name || quote.action.toToken.symbol,
          decimals: quote.action.toToken.decimals,
          address: quote.action.toToken.address,
          chainId: quote.action.toChainId,
          logo: quote.action.toToken.logoURI,
        },
        fromAmount: quote.action.fromAmount,
        toAmount: quote.estimate.toAmount,
        estimatedTime: quote.estimate.executionDuration,
      }],
      slippage,
    };

    return result;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return null;
  }
}

// Fetch multiple routes for comparison
export async function fetchRoutes(
  fromChainId: number,
  fromTokenAddress: string,
  toTokenAddress: string,
  fromAmount: string,
  fromAddress: string,
  slippage: number = 0.5
): Promise<Quote[]> {
  try {
    const routesRequest: RoutesRequest = {
      fromChainId,
      toChainId: HYPEREVM_CHAIN_ID,
      fromTokenAddress,
      toTokenAddress,
      fromAmount,
      fromAddress,
      options: {
        slippage: slippage / 100,
        order: 'RECOMMENDED',
      },
    };

    const result = await getRoutes(routesRequest);
    return result.routes.map(convertToQuote);
  } catch (error) {
    console.error('Error fetching routes:', error);
    return [];
  }
}

// Execute a bridge route
export async function executeBridgeRoute(
  route: Route,
  updateCallback?: (status: {
    status: string;
    substatus?: string;
    txHash?: string;
    error?: string;
  }) => void
): Promise<void> {
  try {
    await executeRoute(route, {
      updateRouteHook: (updatedRoute) => {
        const currentStep = updatedRoute.steps.find((step) => {
          const execution = (step as { execution?: { status: string } }).execution;
          return execution?.status === 'PENDING' || execution?.status === 'ACTION_REQUIRED';
        });
        
        const execution = (currentStep as { execution?: { status: string; process?: Array<{ substatus?: string; txHash?: string }> } })?.execution;
        if (execution) {
          updateCallback?.({
            status: execution.status,
            substatus: execution.process?.[0]?.substatus,
            txHash: execution.process?.[0]?.txHash,
          });
        }
      },
    });
    
    updateCallback?.({ status: 'DONE' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    updateCallback?.({ status: 'FAILED', error: errorMessage });
    throw error;
  }
}

// Get supported chains from LI.FI
export async function getSupportedChains(): Promise<number[]> {
  // LI.FI supports most major EVM chains
  // For now, return our predefined list that includes HyperEVM
  return [1, 10, 42161, 137, 8453, 56, 43114, 998];
}

// Check if a route to HyperEVM is possible
export async function checkRouteAvailable(
  fromChainId: number,
  fromTokenAddress: string,
  toTokenAddress: string
): Promise<boolean> {
  try {
    const routes = await fetchRoutes(
      fromChainId,
      fromTokenAddress,
      toTokenAddress,
      '1000000', // 1 USDC (6 decimals) as test amount
      '0x0000000000000000000000000000000000000000' // Dummy address
    );
    return routes.length > 0;
  } catch {
    return false;
  }
}
