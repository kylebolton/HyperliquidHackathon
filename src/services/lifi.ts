import { createConfig, getQuote, executeRoute, getStatus, getChains, getTokens, type Route, type QuoteRequest, type GetStatusRequest, type ExtendedChain, type Token as LiFiToken } from '@lifi/sdk';
import type { Quote, RouteStep } from '../types';
import { HYPERLIQUID_CHAIN_ID, SONIC_CHAIN_ID } from '../config/chains';
import type { LiFiRoute } from './lifi-api';

const lifiConfig = createConfig({
  integrator: 'liquyn-swap',
  apiKey: '07bbc064-8482-437e-b270-dbca23da1b44.644090d2-cdf2-4939-b5a3-a29d5b9e8572',
});

export { lifiConfig };

let cachedHyperliquidChainId: number | null = null;
let cachedLiFiChains: ExtendedChain[] | null = null;
let cachedHyperliquidTokens: LiFiToken[] | null = null;

export async function discoverHyperliquidChainId(): Promise<number> {
  if (cachedHyperliquidChainId !== null) {
    return cachedHyperliquidChainId;
  }

  try {
    const chains = await getChains();
    cachedLiFiChains = chains;
    
    // Log all chains for debugging - search for anything with "hyp" to help find it
    const possibleMatches = chains.filter(c => 
      c.name.toLowerCase().includes('hyp') || 
      c.key?.toLowerCase().includes('hyp') ||
      c.id === 998 || c.id === 999
    );
    console.log('[LI.FI] Possible Hyperliquid matches:', possibleMatches.map(c => ({ id: c.id, name: c.name, key: c.key })));
    console.log('[LI.FI] Total available chains:', chains.length);
    
    // Search for Hyperliquid with various possible identifiers
    const hyperliquid = chains.find(c => 
      c.name.toLowerCase() === 'hyperliquid' ||
      c.name.toLowerCase().includes('hyperliquid') || 
      c.name.toLowerCase().includes('hyperevm') ||
      c.key?.toLowerCase() === 'hyperliquid' ||
      c.key?.toLowerCase() === 'hyp' ||
      c.key?.toLowerCase() === 'hpl' ||
      c.id === HYPERLIQUID_CHAIN_ID ||
      c.id === 999
    );
    
    if (hyperliquid) {
      console.log('[LI.FI] ✓ Found Hyperliquid chain:', { id: hyperliquid.id, name: hyperliquid.name, key: hyperliquid.key });
      cachedHyperliquidChainId = hyperliquid.id;
      return hyperliquid.id;
    }
    
    // If not found by name, try searching by chain ID 999 (mainnet)
    const byId = chains.find(c => c.id === 999);
    if (byId) {
      console.log('[LI.FI] ✓ Found chain ID 999 (mainnet):', { id: byId.id, name: byId.name, key: byId.key });
      cachedHyperliquidChainId = byId.id;
      return byId.id;
    }
    
    console.warn('[LI.FI] Hyperliquid not found by name or ID. Using fallback chain ID:', HYPERLIQUID_CHAIN_ID);
    cachedHyperliquidChainId = HYPERLIQUID_CHAIN_ID;
    return HYPERLIQUID_CHAIN_ID;
  } catch (error) {
    console.error('[LI.FI] Error fetching chains:', error);
    cachedHyperliquidChainId = HYPERLIQUID_CHAIN_ID;
    return HYPERLIQUID_CHAIN_ID;
  }
}

export async function isHyperliquidSupported(): Promise<boolean> {
  // Always return true - we know LI.FI supports Hyperliquid from their widget
  // The chain discovery will handle finding the correct chain ID
  return true;
}

export async function getHyperliquidTokens(): Promise<LiFiToken[]> {
  if (cachedHyperliquidTokens !== null) {
    return cachedHyperliquidTokens;
  }

  try {
    const chainId = await discoverHyperliquidChainId();
    console.log('[LI.FI] Fetching tokens for Hyperliquid chain ID:', chainId);
    const result = await getTokens({ chains: [chainId] });
    const tokens = result.tokens[chainId] || [];
    console.log('[LI.FI] Available Hyperliquid tokens:', tokens.map(t => ({ symbol: t.symbol, address: t.address })));
    cachedHyperliquidTokens = tokens;
    return tokens;
  } catch (error) {
    console.error('[LI.FI] Error fetching Hyperliquid tokens:', error);
    return [];
  }
}

export async function findHyperliquidTokenAddress(symbol: string): Promise<string | null> {
  const tokens = await getHyperliquidTokens();
  const token = tokens.find(t => t.symbol.toUpperCase() === symbol.toUpperCase());
  return token?.address || null;
}

export async function getLiFiChains(): Promise<ExtendedChain[]> {
  if (cachedLiFiChains !== null) {
    return cachedLiFiChains;
  }

  try {
    const chains = await getChains();
    cachedLiFiChains = chains;
    return chains;
  } catch {
    return [];
  }
}

// Convert REST API route to Quote format (used when bypassing SDK)
function convertApiRouteToQuote(route: LiFiRoute): Quote {
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

  // Store the raw API route for execution
  const quote: Quote & { _rawRoute?: LiFiRoute } = {
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
    slippage: 0.5,
    _rawRoute: route, // Store the raw API route for direct execution
  };

  console.log('[LI.FI API] Converted quote - toToken:', route.toToken.symbol, route.toToken.address);
  
  return quote;
}

export async function fetchQuote(
  fromChainId: number,
  fromTokenAddress: string,
  toTokenAddress: string,
  fromAmount: string,
  fromAddress: string,
  slippage: number = 0.5
): Promise<Quote | null> {
  try {
    const toChainId = await discoverHyperliquidChainId();
    
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
      slippage: slippage / 100,
    };

    const quote = await getQuote(quoteRequest);
    
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
  } catch {
    return null;
  }
}

export async function fetchRoutes(
  fromChainId: number,
  fromTokenAddress: string,
  toTokenAddress: string,
  fromAmount: string,
  fromAddress: string,
  slippage: number = 0.5
): Promise<Quote[]> {
  try {
    const toChainId = await discoverHyperliquidChainId();
    
    // First, get available tokens on Hyperliquid from LI.FI
    const hlTokens = await getHyperliquidTokens();
    console.log('[LI.FI] Available Hyperliquid tokens from LI.FI:', hlTokens.map(t => ({ symbol: t.symbol, address: t.address })));
    
    // Find the matching destination token
    // For USDC, we want to find LI.FI's USDC token on Hyperliquid
    // For HYPE, we want to find LI.FI's native token representation
    let resolvedToTokenAddress = toTokenAddress;
    const isLookingForUsdc = toTokenAddress.toLowerCase() === '0xeb62eee3685fc4c43992febcd9e75443aef550ab';
    const isLookingForNative = toTokenAddress.toLowerCase() === '0x0000000000000000000000000000000000000000';
    
    console.log('[LI.FI] Token resolution:', { 
      requestedAddress: toTokenAddress, 
      isLookingForUsdc, 
      isLookingForNative 
    });
    
    if (isLookingForUsdc) {
      // Find USDC on Hyperliquid from LI.FI's token list
      const lifiUsdc = hlTokens.find(t => 
        t.symbol.toUpperCase() === 'USDC' || 
        t.symbol.toUpperCase() === 'USDC.E'
      );
      if (lifiUsdc) {
        resolvedToTokenAddress = lifiUsdc.address;
        console.log('[LI.FI] ✓ Resolved USDC to LI.FI address:', lifiUsdc.address);
      } else {
        console.log('[LI.FI] ⚠ No USDC found on Hyperliquid from LI.FI, using original address');
      }
    } else if (isLookingForNative) {
      // For native token (HYPE), first check if LI.FI has a specific token representation
      const lifiHype = hlTokens.find(t => 
        t.symbol.toUpperCase() === 'HYPE' || 
        t.symbol.toUpperCase() === 'WHYPE' ||
        t.address.toLowerCase() === '0x0000000000000000000000000000000000000000'
      );
      if (lifiHype) {
        resolvedToTokenAddress = lifiHype.address;
        console.log('[LI.FI] ✓ Resolved HYPE to LI.FI address:', lifiHype.address, 'symbol:', lifiHype.symbol);
      } else {
        // Fallback to native zero address
        resolvedToTokenAddress = '0x0000000000000000000000000000000000000000';
        console.log('[LI.FI] ✓ Using native zero address for HYPE');
      }
    } else {
      console.log('[LI.FI] Using provided token address as-is:', toTokenAddress);
    }
    
    console.log('[LI.FI] Fetching routes via REST API:', { 
      fromChainId, 
      toChainId, 
      fromTokenAddress, 
      toTokenAddress: resolvedToTokenAddress,
      fromAmount,
    });
    
    // Use direct REST API instead of SDK to bypass potential SDK bugs
    const { getRoutesApi } = await import('./lifi-api');
    
    const result = await getRoutesApi({
      fromChainId,
      toChainId,
      fromTokenAddress,
      toTokenAddress: resolvedToTokenAddress,
      fromAmount,
      fromAddress,
      slippage: slippage / 100,
    });
    
    console.log('[LI.FI] Routes found:', result.routes.length);
    
    if (result.routes.length > 0) {
      // Log the actual toToken address that LI.FI returned
      console.log('[LI.FI] Route toToken from response:', result.routes[0].toToken);
    }
    
    return result.routes.map(convertApiRouteToQuote);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[LI.FI] Error fetching routes:', message, error);
    
    // Re-throw with cleaner message for UI
    if (message.includes('toChainId') || message.includes('allowed values')) {
      throw new Error(`Chain ID ${await discoverHyperliquidChainId()} not recognized. Please check LI.FI chain support.`);
    }
    if (message.includes('invalid') || message.includes('deny list')) {
      throw new Error('Token not supported for bridging to Hyperliquid. LI.FI may have limited token support.');
    }
    throw error;
  }
}

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

export async function getSupportedChains(): Promise<number[]> {
  try {
    const chains = await getLiFiChains();
    return chains.map(c => c.id);
  } catch {
    return [1, 10, 42161, 137, 8453, 56, 43114, SONIC_CHAIN_ID, HYPERLIQUID_CHAIN_ID];
  }
}

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
      '1000000',
      '0x0000000000000000000000000000000000000000'
    );
    return routes.length > 0;
  } catch {
    return false;
  }
}

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

export async function getTransactionStatus(
  txHash: string,
  fromChainId: number,
  toChainId?: number
): Promise<TransactionStatus> {
  const resolvedToChainId = toChainId || await discoverHyperliquidChainId();
  try {
    const statusRequest: GetStatusRequest = {
      txHash,
      fromChain: fromChainId,
      toChain: resolvedToChainId,
    };

    const result = await getStatus(statusRequest);

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
  } catch {
    return {
      status: 'NOT_FOUND',
    };
  }
}
