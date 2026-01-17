/**
 * Debug test for Arbitrum → Hyperliquid USDC privacy routing
 * 
 * This test makes real API calls to diagnose why routes aren't being found.
 */

import { describe, it, expect, vi, beforeAll } from 'vitest';

// IMPORTANT: Clear any mocks that might be affecting the LI.FI SDK
beforeAll(() => {
  vi.unmock('@lifi/sdk');
  vi.unmock('./lifi-api');
});

// Real addresses
const ARBITRUM_CHAIN_ID = 42161;
const HYPERLIQUID_CHAIN_ID = 999;
const ARBITRUM_USDC = '0xaf88d065e77c8cC2239327C5EDb3A432268e5831';
const HYPERLIQUID_USDC = '0xb88339CB7199b77E23DB6E890353E22632Ba630f';
const TEST_WALLET = '0x686E8fa935e73D175c741d33cc30D390c8067330';

const LIFI_API_BASE = 'https://li.quest/v1';
const API_KEY = '07bbc064-8482-437e-b270-dbca23da1b44.644090d2-cdf2-4939-b5a3-a29d5b9e8572';

describe('Privacy Route Debug - Arbitrum to Hyperliquid', () => {
  
  it('should verify LI.FI supports Hyperliquid chain', async () => {
    const response = await fetch(`${LIFI_API_BASE}/chains`, {
      headers: { 'x-lifi-api-key': API_KEY },
    });
    const data = await response.json();
    // API returns { chains: [...] } wrapper
    const chains = data.chains || data;
    
    const hyperevm = chains.find((c: any) => c.id === HYPERLIQUID_CHAIN_ID);
    console.log('HyperEVM (999) chain from LI.FI:', hyperevm);
    
    // LI.FI has two entries: "Hyperliquid" (1337) and "HyperEVM" (999)
    // We want HyperEVM (999) for mainnet
    expect(hyperevm).toBeDefined();
    expect(hyperevm.id).toBe(999);
  });

  it('should verify LI.FI has USDC token on Hyperliquid', async () => {
    const response = await fetch(`${LIFI_API_BASE}/tokens?chains=${HYPERLIQUID_CHAIN_ID}`, {
      headers: { 'x-lifi-api-key': API_KEY },
    });
    const data = await response.json();
    const tokens = data.tokens[HYPERLIQUID_CHAIN_ID] || [];
    
    console.log('All tokens on Hyperliquid:', tokens.map((t: any) => ({ symbol: t.symbol, address: t.address })));
    
    const usdc = tokens.find((t: any) => t.symbol.toUpperCase() === 'USDC');
    console.log('USDC on Hyperliquid from LI.FI:', usdc);
    
    expect(tokens.length).toBeGreaterThan(0);
  });

  it('should fetch routes from Arbitrum USDC to Hyperliquid USDC (direct)', async () => {
    const requestBody = {
      fromChainId: ARBITRUM_CHAIN_ID,
      toChainId: HYPERLIQUID_CHAIN_ID,
      fromTokenAddress: ARBITRUM_USDC,
      toTokenAddress: HYPERLIQUID_USDC,
      fromAmount: '10000000', // 10 USDC (6 decimals)
      fromAddress: TEST_WALLET,
      options: {
        slippage: 0.01,
        order: 'RECOMMENDED',
      },
    };

    console.log('Request body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(`${LIFI_API_BASE}/advanced/routes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-lifi-api-key': API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Routes found:', data.routes?.length || 0);
    
    if (data.routes && data.routes.length > 0) {
      console.log('First route:', {
        id: data.routes[0].id,
        fromToken: data.routes[0].fromToken?.symbol,
        toToken: data.routes[0].toToken?.symbol,
        toAmount: data.routes[0].toAmount,
        steps: data.routes[0].steps?.map((s: any) => ({ tool: s.tool, type: s.type })),
      });
    } else {
      console.log('No routes found. Error message:', data.message);
      console.log('Unavailable routes:', data.unavailableRoutes);
    }

    // This test is diagnostic - we want to see the output
    expect(response.status).toBe(200);
  });

  it('should fetch routes using native zero address for destination', async () => {
    // Try with zero address to get native token on destination
    const requestBody = {
      fromChainId: ARBITRUM_CHAIN_ID,
      toChainId: HYPERLIQUID_CHAIN_ID,
      fromTokenAddress: ARBITRUM_USDC,
      toTokenAddress: '0x0000000000000000000000000000000000000000', // Native token
      fromAmount: '10000000', // 10 USDC
      fromAddress: TEST_WALLET,
      options: {
        slippage: 0.01,
        order: 'RECOMMENDED',
      },
    };

    console.log('Testing with native zero address...');

    const response = await fetch(`${LIFI_API_BASE}/advanced/routes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-lifi-api-key': API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Routes found:', data.routes?.length || 0);
    
    if (data.routes && data.routes.length > 0) {
      console.log('First route toToken:', data.routes[0].toToken);
    } else {
      console.log('No routes with native address either');
    }

    expect(response.status).toBe(200);
  });

  it('should test quote endpoint directly', async () => {
    const params = new URLSearchParams({
      fromChain: ARBITRUM_CHAIN_ID.toString(),
      toChain: HYPERLIQUID_CHAIN_ID.toString(),
      fromToken: ARBITRUM_USDC,
      toToken: HYPERLIQUID_USDC,
      fromAmount: '10000000',
      fromAddress: TEST_WALLET,
      slippage: '0.01',
      integrator: 'liquyn-swap',
    });

    console.log('Quote params:', params.toString());

    const response = await fetch(`${LIFI_API_BASE}/quote?${params}`, {
      headers: {
        'x-lifi-api-key': API_KEY,
      },
    });

    const data = await response.json();
    
    console.log('Quote response status:', response.status);
    
    if (response.ok) {
      console.log('Quote success:', {
        id: data.id,
        tool: data.tool,
        toAmount: data.estimate?.toAmount,
        toToken: data.action?.toToken?.symbol,
      });
    } else {
      console.log('Quote error:', data.message);
    }

    // Diagnostic test
    expect(true).toBe(true);
  });

  it('should check what token address we are actually using', async () => {
    // Import the actual service to see what addresses it uses
    const { fetchRoutes } = await import('./lifi');
    
    console.log('Configured USDC addresses:');
    console.log('- Arbitrum USDC:', ARBITRUM_USDC);
    console.log('- Hyperliquid USDC (our config):', HYPERLIQUID_USDC);
    
    // Get LI.FI's Hyperliquid token list
    const response = await fetch(`${LIFI_API_BASE}/tokens?chains=${HYPERLIQUID_CHAIN_ID}`, {
      headers: { 'x-lifi-api-key': API_KEY },
    });
    const data = await response.json();
    const tokens = data.tokens[HYPERLIQUID_CHAIN_ID] || [];
    
    const lifiUsdc = tokens.find((t: any) => 
      t.symbol.toUpperCase() === 'USDC' || 
      t.symbol.toUpperCase() === 'USDC.E'
    );
    
    console.log('- Hyperliquid USDC (from LI.FI):', lifiUsdc?.address);
    
    if (lifiUsdc && lifiUsdc.address.toLowerCase() !== HYPERLIQUID_USDC.toLowerCase()) {
      console.log('⚠️ MISMATCH! Our USDC address differs from LI.FI');
    } else if (lifiUsdc) {
      console.log('✓ USDC addresses match');
    } else {
      console.log('⚠️ No USDC found on Hyperliquid in LI.FI token list');
    }

    expect(true).toBe(true);
  });

  it('should test the actual fetchRoutes function from our service', async () => {
    // Reset cache to ensure fresh state
    const { resetLiFiCache, fetchRoutes, discoverHyperliquidChainId, getHyperliquidTokens } = await import('./lifi');
    resetLiFiCache();
    
    // Check what the SDK returns directly
    const { getChains } = await import('@lifi/sdk');
    
    console.log('=== Direct SDK check ===');
    const chains = await getChains();
    console.log('SDK getChains returned', chains.length, 'chains');
    const hlChains = chains.filter((c: any) => c.id === 999 || c.name?.toLowerCase().includes('hyperliquid'));
    console.log('All Hyperliquid-related chains from SDK:', hlChains.map((c: any) => ({ id: c.id, name: c.name })));
    
    // Reset cache again before our wrapper tests
    resetLiFiCache();
    
    console.log('\n=== Checking our wrapper state (after fix) ===');
    const chainId = await discoverHyperliquidChainId();
    console.log('discoverHyperliquidChainId returned:', chainId);
    console.log('Expected:', HYPERLIQUID_CHAIN_ID, '(999)');
    
    const tokens = await getHyperliquidTokens();
    console.log('getHyperliquidTokens returned:', tokens.length, 'tokens');
    const usdcToken = tokens.find((t: any) => t.symbol.toUpperCase() === 'USDC');
    console.log('USDC from getHyperliquidTokens:', usdcToken?.address);
    console.log('Expected USDC:', HYPERLIQUID_USDC);
    
    console.log('\n=== Testing fetchRoutes ===');
    
    // Reset cache one more time to ensure fetchRoutes uses fresh discovery
    resetLiFiCache();
    
    try {
      const routes = await fetchRoutes(
        ARBITRUM_CHAIN_ID,
        ARBITRUM_USDC,
        HYPERLIQUID_USDC,
        '10000000',
        TEST_WALLET,
        0.5
      );
      
      console.log('✓ Routes returned:', routes.length);
      if (routes.length > 0) {
        console.log('First route:', {
          id: routes[0].id,
          fromChain: routes[0].fromChain,
          toChain: routes[0].toChain,
          toToken: routes[0].toToken,
        });
        expect(routes.length).toBeGreaterThan(0);
      }
    } catch (error: any) {
      console.log('✗ fetchRoutes threw error:', error.message);
      // Don't fail the test - this is diagnostic
    }

    // The main assertion: chain ID should be 999
    expect(chainId).toBe(999);
  });

  it('should test getRoutesApi directly to see what its sending', async () => {
    const { getRoutesApi } = await import('./lifi-api');
    
    // Test with exact same parameters as direct API call
    const params = {
      fromChainId: ARBITRUM_CHAIN_ID,
      toChainId: HYPERLIQUID_CHAIN_ID,
      fromTokenAddress: ARBITRUM_USDC,
      toTokenAddress: HYPERLIQUID_USDC,
      fromAmount: '10000000',
      fromAddress: TEST_WALLET,
      slippage: 0.01, // 1% slippage
    };
    
    console.log('Testing getRoutesApi with params:', JSON.stringify(params, null, 2));
    
    try {
      const result = await getRoutesApi(params);
      console.log('getRoutesApi success! Routes:', result.routes?.length || 0);
    } catch (error: any) {
      console.log('getRoutesApi error:', error.message);
      console.log('Full error:', error);
    }
    
    expect(true).toBe(true);
  });

  it('should check slippage conversion in fetchRoutes', async () => {
    // The issue might be slippage conversion
    // fetchRoutes passes slippage / 100, so if user passes 0.5, it becomes 0.005 (0.5%)
    // But if we're already passing 0.5 as 0.5%, it becomes 0.005 which is 0.5%
    // Direct test passes 0.01 (1%)
    
    const { getRoutesApi } = await import('./lifi-api');
    
    // Test with 0.5% slippage (what fetchRoutes sends when user passes slippage=0.5)
    const paramsWithSmallSlippage = {
      fromChainId: ARBITRUM_CHAIN_ID,
      toChainId: HYPERLIQUID_CHAIN_ID,
      fromTokenAddress: ARBITRUM_USDC,
      toTokenAddress: HYPERLIQUID_USDC,
      fromAmount: '10000000',
      fromAddress: TEST_WALLET,
      slippage: 0.005, // 0.5% - this is what fetchRoutes sends (0.5 / 100)
    };
    
    console.log('Testing with slippage 0.005 (0.5%)...');
    
    try {
      const result = await getRoutesApi(paramsWithSmallSlippage);
      console.log('With 0.5% slippage - Routes found:', result.routes?.length || 0);
    } catch (error: any) {
      console.log('With 0.5% slippage - Error:', error.message);
    }
    
    expect(true).toBe(true);
  });

  it('should debug the actual request body getRoutesApi sends', async () => {
    // Let's manually construct the request body exactly like getRoutesApi does
    const params = {
      fromChainId: ARBITRUM_CHAIN_ID,
      toChainId: HYPERLIQUID_CHAIN_ID,
      fromTokenAddress: ARBITRUM_USDC,
      toTokenAddress: HYPERLIQUID_USDC,
      fromAmount: '10000000',
      fromAddress: TEST_WALLET,
      slippage: 0.005,
    };

    // This is what getRoutesApi builds
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

    console.log('Request body from getRoutesApi:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(`${LIFI_API_BASE}/advanced/routes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-lifi-api-key': API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response:', JSON.stringify(data, null, 2).substring(0, 1000));

    expect(response.status).toBe(200);
  });
});
