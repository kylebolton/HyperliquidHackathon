import { createConfig, getQuote, getRoutes, executeRoute, getStatus, getChains, getTokens, type Route, type RoutesRequest, type QuoteRequest, type GetStatusRequest, type ExtendedChain, type Token as LiFiToken } from '@lifi/sdk';
import type { Quote, RouteStep } from '../types';
import { HYPERLIQUID_CHAIN_ID, SONIC_CHAIN_ID } from '../config/chains';

// Initialize LI.FI SDK
// LI.FI natively supports Sonic (146) and most major EVM chains
// Custom RPC URLs for Hyperliquid are configured in wagmi.ts
const lifiConfig = createConfig({
  integrator: 'liquyn-swap',
  // apiKey: import.meta.env.VITE_LIFI_API_KEY, // Optional: Add for higher rate limits
});

export { lifiConfig };

// Cache for discovered chain ID and tokens
let cachedHyperliquidChainId: number | null = null;
let cachedLiFiChains: ExtendedChain[] | null = null;
let cachedHyperliquidTokens: LiFiToken[] | null = null;

// Discover the correct Hyperliquid chain ID from LI.FI
export async function discoverHyperliquidChainId(): Promise<number> {
  if (cachedHyperliquidChainId !== null) {
    return cachedHyperliquidChainId;
  }

  try {
    const chains = await getChains();
    cachedLiFiChains = chains;
    
    // Log all available chains for debugging
    console.log('[LI.FI] Available chains:', chains.map(c => ({ id: c.id, name: c.name, key: c.key })));
    
    // Find Hyperliquid by various possible names/keys
    const hyperliquid = chains.find(c => 
      c.name.toLowerCase().includes('hyperliquid') || 
      c.name.toLowerCase().includes('hyperevm') ||
      c.key?.toLowerCase().includes('hyp') ||
      c.key?.toLowerCase() === 'hpl' ||
      c.id === HYPERLIQUID_CHAIN_ID ||
      c.id === 999 // Also check 999 as possible ID
    );
    
    if (hyperliquid) {
      console.log('[LI.FI] Found Hyperliquid chain:', hyperliquid);
      cachedHyperliquidChainId = hyperliquid.id;
      return hyperliquid.id;
    }
    
    // Fallback to configured ID
    console.warn('[LI.FI] Hyperliquid not found in LI.FI chains, using configured ID:', HYPERLIQUID_CHAIN_ID);
    cachedHyperliquidChainId = HYPERLIQUID_CHAIN_ID;
    return HYPERLIQUID_CHAIN_ID;
  } catch (error) {
    console.error('[LI.FI] Error discovering chains:', error);
    cachedHyperliquidChainId = HYPERLIQUID_CHAIN_ID;
    return HYPERLIQUID_CHAIN_ID;
  }
}

// Get tokens available on Hyperliquid from LI.FI
export async function getHyperliquidTokens(): Promise<LiFiToken[]> {
  if (cachedHyperliquidTokens !== null) {
    return cachedHyperliquidTokens;
  }

  try {
    const chainId = await discoverHyperliquidChainId();
    const result = await getTokens({ chains: [chainId] });
    const tokens = result.tokens[chainId] || [];
    
    console.log('[LI.FI] Hyperliquid tokens:', tokens.map(t => ({ 
      symbol: t.symbol, 
      address: t.address,
      decimals: t.decimals 
    })));
    
    cachedHyperliquidTokens = tokens;
    return tokens;
  } catch (error) {
    console.error('[LI.FI] Error fetching Hyperliquid tokens:', error);
    return [];
  }
}

// Find the correct token address on Hyperliquid by symbol
export async function findHyperliquidTokenAddress(symbol: string): Promise<string | null> {
  const tokens = await getHyperliquidTokens();
  const token = tokens.find(t => t.symbol.toUpperCase() === symbol.toUpperCase());
  
  if (token) {
    console.log(`[LI.FI] Found ${symbol} on Hyperliquid:`, token.address);
    return token.address;
  }
  
  console.warn(`[LI.FI] Token ${symbol} not found on Hyperliquid`);
  return null;
}

// Get all LI.FI supported chains
export async function getLiFiChains(): Promise<ExtendedChain[]> {
  if (cachedLiFiChains !== null) {
    return cachedLiFiChains;
  }

  try {
    const chains = await getChains();
    cachedLiFiChains = chains;
    return chains;
  } catch (error) {
    console.error('[LI.FI] Error fetching chains:', error);
    return [];
  }
}

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

// Fetch quote for bridging to Hyperliquid
export async function fetchQuote(
  fromChainId: number,
  fromTokenAddress: string,
  toTokenAddress: string,
  fromAmount: string,
  fromAddress: string,
  slippage: number = 0.5
): Promise<Quote | null> {
  try {
    // Discover the correct Hyperliquid chain ID from LI.FI
    const toChainId = await discoverHyperliquidChainId();
    
    // Try to resolve destination token address if it looks like our hardcoded one
    let resolvedToTokenAddress = toTokenAddress;
    if (toTokenAddress.toLowerCase() === '0xeb62eee3685fc4c43992febcd9e75443aef550ab') {
      const lifiUsdcAddress = await findHyperliquidTokenAddress('USDC');
      if (lifiUsdcAddress) {
        resolvedToTokenAddress = lifiUsdcAddress;
      }
    }
    
    const quoteRequest: QuoteRequest = {
      fromChain: fromChainId,
      toChain: toChainId,
      fromToken: fromTokenAddress,
      toToken: resolvedToTokenAddress,
      fromAmount: fromAmount,
      fromAddress: fromAddress,
      slippage: slippage / 100, // Convert percentage to decimal
    };

    console.log('[LI.FI] Fetching quote with params:', quoteRequest);
    const quote = await getQuote(quoteRequest);
    console.log('[LI.FI] Quote received:', quote);
    
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
    console.error('[LI.FI] Error fetching quote:', {
      error,
      params: { fromChainId, fromTokenAddress, toTokenAddress, fromAmount, fromAddress, slippage }
    });
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
    // Discover the correct Hyperliquid chain ID from LI.FI
    const toChainId = await discoverHyperliquidChainId();
    
    // Try to resolve destination token address if it looks like our hardcoded one
    let resolvedToTokenAddress = toTokenAddress;
    if (toTokenAddress.toLowerCase() === '0xeb62eee3685fc4c43992febcd9e75443aef550ab') {
      const lifiUsdcAddress = await findHyperliquidTokenAddress('USDC');
      if (lifiUsdcAddress) {
        resolvedToTokenAddress = lifiUsdcAddress;
        console.log('[LI.FI] Resolved USDC address from LI.FI:', resolvedToTokenAddress);
      }
    }
    
    const routesRequest: RoutesRequest = {
      fromChainId,
      toChainId,
      fromTokenAddress,
      toTokenAddress: resolvedToTokenAddress,
      fromAmount,
      fromAddress,
      options: {
        slippage: slippage / 100,
        order: 'RECOMMENDED',
      },
    };

    console.log('[LI.FI] Fetching routes with params:', {
      ...routesRequest,
      configuredHyperliquidId: HYPERLIQUID_CHAIN_ID,
      discoveredHyperliquidId: toChainId,
    });
    
    const result = await getRoutes(routesRequest);
    
    console.log('[LI.FI] Routes response:', {
      routesFound: result.routes.length,
      routes: result.routes.map(r => ({
        id: r.id,
        fromChain: r.fromChainId,
        toChain: r.toChainId,
        steps: r.steps.map(s => s.tool),
      }))
    });
    
    if (result.routes.length === 0) {
      console.warn('[LI.FI] No routes found. Check if:', {
        fromChainSupported: `Chain ${fromChainId} is supported by LI.FI`,
        toChainSupported: `Chain ${toChainId} (Hyperliquid) is supported by LI.FI`,
        tokensSupported: 'Both tokens exist on respective chains',
        amountSufficient: 'Amount is not too small for bridging',
      });
    }
    
    return result.routes.map(convertToQuote);
  } catch (error) {
    console.error('[LI.FI] Error fetching routes:', {
      error,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      params: { fromChainId, fromTokenAddress, toTokenAddress, fromAmount, fromAddress, slippage }
    });
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
  try {
    const chains = await getLiFiChains();
    const chainIds = chains.map(c => c.id);
    console.log('[LI.FI] Supported chains:', chainIds.length, 'chains');
    return chainIds;
  } catch (error) {
    console.error('[LI.FI] Error getting supported chains:', error);
    // Fallback to predefined list
    return [1, 10, 42161, 137, 8453, 56, 43114, SONIC_CHAIN_ID, HYPERLIQUID_CHAIN_ID];
  }
}

// Check if a route to Hyperliquid is possible
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

// Transaction status types
export interface TransactionStatus {
  status: 'NOT_FOUND' | 'PENDING' | 'DONE' | 'FAILED' | 'INVALID';
  substatus?: string;
  substatusMessage?: string;
  bridgeExplorerLink?: string;
  fromChain?: {
    chainId: number;
    txHash: string;
    amount: string;
    token: {
      symbol: string;
      decimals: number;
    };
  };
  toChain?: {
    chainId: number;
    txHash?: string;
    amount?: string;
    token?: {
      symbol: string;
      decimals: number;
    };
  };
  tool?: string;
}

// Poll transaction status for cross-chain bridges
export async function getTransactionStatus(
  txHash: string,
  fromChainId: number,
  toChainId?: number
): Promise<TransactionStatus> {
  // Use provided toChainId or discover Hyperliquid chain ID
  const resolvedToChainId = toChainId || await discoverHyperliquidChainId();
  try {
    const statusRequest: GetStatusRequest = {
      txHash,
      fromChain: fromChainId,
      toChain: resolvedToChainId,
    };

    const result = await getStatus(statusRequest);

    // Cast to any to handle SDK type variations
    const sending = (result as { sending?: { 
      chainId: number; 
      txHash: string; 
      amount?: string;
      token?: { symbol: string; decimals: number };
    } }).sending;
    
    const receiving = (result as { receiving?: { 
      chainId: number; 
      txHash?: string; 
      amount?: string;
      token?: { symbol: string; decimals: number };
    } }).receiving;
    
    const bridgeExplorerLink = (result as { bridgeExplorerLink?: string }).bridgeExplorerLink;
    const tool = (result as { tool?: string }).tool;

    return {
      status: result.status as TransactionStatus['status'],
      substatus: result.substatus,
      substatusMessage: result.substatusMessage,
      bridgeExplorerLink,
      fromChain: sending ? {
        chainId: sending.chainId,
        txHash: sending.txHash,
        amount: sending.amount || '0',
        token: {
          symbol: sending.token?.symbol || '',
          decimals: sending.token?.decimals || 18,
        },
      } : undefined,
      toChain: receiving ? {
        chainId: receiving.chainId,
        txHash: receiving.txHash,
        amount: receiving.amount,
        token: {
          symbol: receiving.token?.symbol || '',
          decimals: receiving.token?.decimals || 18,
        },
      } : undefined,
      tool,
    };
  } catch (error) {
    console.error('Error fetching transaction status:', error);
    return {
      status: 'NOT_FOUND',
    };
  }
}
