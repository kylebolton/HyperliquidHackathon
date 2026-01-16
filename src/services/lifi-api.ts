/**
 * LI.FI Direct REST API Service
 * 
 * This bypasses the LI.FI SDK to make direct HTTP calls to their REST API.
 * This gives us full control over requests and helps debug token address issues.
 */

import { HYPERLIQUID_CHAIN_ID } from '../config/chains';

const LIFI_API_BASE = 'https://li.quest/v1';
const API_KEY = '07bbc064-8482-437e-b270-dbca23da1b44.644090d2-cdf2-4939-b5a3-a29d5b9e8572';

// Types for API responses
export interface LiFiToken {
  address: string;
  symbol: string;
  decimals: number;
  chainId: number;
  name: string;
  logoURI?: string;
  priceUSD?: string;
}

export interface LiFiStep {
  id: string;
  type: string;
  tool: string;
  toolDetails: {
    key: string;
    name: string;
    logoURI: string;
  };
  action: {
    fromChainId: number;
    fromAmount: string;
    fromToken: LiFiToken;
    toChainId: number;
    toToken: LiFiToken;
    slippage: number;
    fromAddress: string;
    toAddress: string;
  };
  estimate: {
    tool: string;
    fromAmount: string;
    toAmount: string;
    toAmountMin: string;
    approvalAddress: string;
    executionDuration: number;
    feeCosts?: Array<{
      name: string;
      percentage: string;
      token: LiFiToken;
      amount: string;
      amountUSD: string;
    }>;
    gasCosts?: Array<{
      type: string;
      estimate: string;
      limit: string;
      amount: string;
      amountUSD: string;
      price: string;
      token: LiFiToken;
    }>;
  };
  transactionRequest?: {
    to: string;
    from: string;
    data: string;
    value: string;
    gasLimit: string;
    gasPrice?: string;
    chainId: number;
  };
}

export interface LiFiRoute {
  id: string;
  fromChainId: number;
  fromAmount: string;
  fromToken: LiFiToken;
  fromAddress: string;
  toChainId: number;
  toAmount: string;
  toAmountMin: string;
  toToken: LiFiToken;
  toAddress: string;
  gasCostUSD?: string;
  steps: LiFiStep[];
  insurance?: {
    state: string;
    feeAmountUsd: string;
  };
}

export interface LiFiQuoteResponse {
  id: string;
  type: string;
  tool: string;
  action: LiFiStep['action'];
  estimate: LiFiStep['estimate'];
  transactionRequest?: LiFiStep['transactionRequest'];
  // Include full route info
  includedSteps?: LiFiStep[];
}

export interface LiFiRoutesResponse {
  routes: LiFiRoute[];
  unavailableRoutes?: {
    filteredOut: any[];
    failed: any[];
  };
}

export interface LiFiStatusResponse {
  transactionId: string;
  sending: {
    txHash: string;
    txLink: string;
    amount: string;
    token: LiFiToken;
    chainId: number;
  };
  receiving?: {
    txHash: string;
    txLink: string;
    amount: string;
    token: LiFiToken;
    chainId: number;
  };
  status: 'NOT_FOUND' | 'PENDING' | 'DONE' | 'FAILED';
  substatus?: string;
  substatusMessage?: string;
  bridgeExplorerLink?: string;
}

// Helper to make API calls with proper headers
async function lifiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${LIFI_API_BASE}${endpoint}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'x-lifi-api-key': API_KEY,
    ...options.headers,
  };

  console.log(`[LI.FI API] ${options.method || 'GET'} ${endpoint}`);
  if (options.body) {
    console.log('[LI.FI API] Request body:', JSON.parse(options.body as string));
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json();
  
  if (!response.ok) {
    console.error('[LI.FI API] Error response:', data);
    throw new Error(data.message || `API error: ${response.status}`);
  }

  console.log('[LI.FI API] Response:', data);
  return data as T;
}

/**
 * Get available tokens on a specific chain from LI.FI
 */
export async function getTokensOnChain(chainId: number): Promise<LiFiToken[]> {
  const response = await lifiRequest<{ tokens: Record<number, LiFiToken[]> }>(
    `/tokens?chains=${chainId}`
  );
  return response.tokens[chainId] || [];
}

/**
 * Get supported chains from LI.FI
 */
export async function getSupportedChains(): Promise<any[]> {
  return lifiRequest<any[]>('/chains');
}

/**
 * Get a quote for a cross-chain swap/bridge
 * This endpoint returns transactionRequest directly - no need for stepTransaction
 */
export async function getQuoteApi(params: {
  fromChain: number;
  toChain: number;
  fromToken: string;
  toToken: string;
  fromAmount: string;
  fromAddress: string;
  slippage?: number;
  integrator?: string;
}): Promise<LiFiQuoteResponse> {
  // Use query params for GET request (quote endpoint)
  const queryParams = new URLSearchParams({
    fromChain: params.fromChain.toString(),
    toChain: params.toChain.toString(),
    fromToken: params.fromToken,
    toToken: params.toToken,
    fromAmount: params.fromAmount,
    fromAddress: params.fromAddress,
    slippage: (params.slippage || 0.01).toString(),
    integrator: params.integrator || 'liquyn-swap',
  });

  return lifiRequest<LiFiQuoteResponse>(`/quote?${queryParams}`);
}

/**
 * Get multiple route options for a cross-chain swap/bridge
 */
export async function getRoutesApi(params: {
  fromChainId: number;
  toChainId: number;
  fromTokenAddress: string;
  toTokenAddress: string;
  fromAmount: string;
  fromAddress: string;
  slippage?: number;
}): Promise<LiFiRoutesResponse> {
  const requestBody = {
    fromChainId: params.fromChainId,
    toChainId: params.toChainId,
    fromTokenAddress: params.fromTokenAddress,
    toTokenAddress: params.toTokenAddress,
    fromAmount: params.fromAmount,
    fromAddress: params.fromAddress,
    options: {
      slippage: params.slippage || 0.01,
      order: 'RECOMMENDED',
    },
  };

  console.log('[LI.FI API] Getting routes with params:', requestBody);

  return lifiRequest<LiFiRoutesResponse>('/advanced/routes', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
}

/**
 * Get transaction data for a specific step
 * The API expects: id, type, tool, toolDetails, action, estimate, integrator, includedSteps
 */
export async function getStepTransaction(step: LiFiStep): Promise<LiFiStep> {
  // Build the step object for includedSteps array
  const includedStep = {
    id: step.id,
    type: step.type,
    tool: step.tool,
    toolDetails: step.toolDetails,
    action: step.action,
    estimate: step.estimate,
  };
  
  // The API requires these top-level fields plus includedSteps array
  const stepRequest = {
    id: step.id,
    type: step.type,
    tool: step.tool,
    toolDetails: step.toolDetails,
    action: step.action,
    estimate: step.estimate,
    integrator: 'liquyn-swap',
    includedSteps: [includedStep],
  };
  
  console.log('[LI.FI API] Step transaction request:', stepRequest);
  
  return lifiRequest<LiFiStep>('/advanced/stepTransaction', {
    method: 'POST',
    body: JSON.stringify(stepRequest),
  });
}

/**
 * Check the status of a bridge transaction
 */
export async function getTransactionStatus(params: {
  txHash: string;
  fromChain: number;
  toChain: number;
  bridge?: string;
}): Promise<LiFiStatusResponse> {
  const queryParams = new URLSearchParams({
    txHash: params.txHash,
    fromChain: params.fromChain.toString(),
    toChain: params.toChain.toString(),
  });
  if (params.bridge) {
    queryParams.append('bridge', params.bridge);
  }

  return lifiRequest<LiFiStatusResponse>(`/status?${queryParams}`);
}

/**
 * Get the correct USDC token address for Hyperliquid from LI.FI
 */
export async function getHyperliquidUsdcAddress(): Promise<string | null> {
  try {
    const tokens = await getTokensOnChain(HYPERLIQUID_CHAIN_ID);
    console.log('[LI.FI API] Hyperliquid tokens:', tokens.map(t => ({ symbol: t.symbol, address: t.address })));
    
    const usdc = tokens.find(t => 
      t.symbol.toUpperCase() === 'USDC' || 
      t.symbol.toUpperCase() === 'USDC.E'
    );
    
    return usdc?.address || null;
  } catch (error) {
    console.error('[LI.FI API] Error fetching Hyperliquid tokens:', error);
    return null;
  }
}

/**
 * Debug function to inspect what LI.FI returns for Hyperliquid
 */
export async function debugHyperliquidSupport(): Promise<void> {
  console.log('=== LI.FI Hyperliquid Debug ===');
  
  try {
    // Check chains
    const chains = await getSupportedChains();
    const hlChain = chains.find((c: any) => 
      c.id === HYPERLIQUID_CHAIN_ID || 
      c.name?.toLowerCase().includes('hyperliquid')
    );
    console.log('[DEBUG] Hyperliquid chain from LI.FI:', hlChain);
    
    // Check tokens
    const tokens = await getTokensOnChain(HYPERLIQUID_CHAIN_ID);
    console.log('[DEBUG] Tokens on Hyperliquid:', tokens);
    
  } catch (error) {
    console.error('[DEBUG] Error:', error);
  }
}

/**
 * Fetch routes and return both the quote data and raw route for execution
 */
export async function fetchRoutesWithTransaction(params: {
  fromChainId: number;
  toChainId: number;
  fromTokenAddress: string;
  toTokenAddress: string;
  fromAmount: string;
  fromAddress: string;
  slippage?: number;
}): Promise<{
  routes: LiFiRoute[];
  transactionRequest?: LiFiStep['transactionRequest'];
}> {
  // First get routes
  const routesResponse = await getRoutesApi({
    fromChainId: params.fromChainId,
    toChainId: params.toChainId,
    fromTokenAddress: params.fromTokenAddress,
    toTokenAddress: params.toTokenAddress,
    fromAmount: params.fromAmount,
    fromAddress: params.fromAddress,
    slippage: params.slippage,
  });

  if (!routesResponse.routes.length) {
    return { routes: [] };
  }

  // Get transaction data for the first step of the best route
  const bestRoute = routesResponse.routes[0];
  if (bestRoute.steps.length > 0) {
    try {
      const stepWithTx = await getStepTransaction(bestRoute.steps[0]);
      bestRoute.steps[0] = stepWithTx;
    } catch (error) {
      console.warn('[LI.FI API] Could not get transaction data:', error);
    }
  }

  return {
    routes: routesResponse.routes,
    transactionRequest: bestRoute.steps[0]?.transactionRequest,
  };
}
