import { HYPERLIQUID_CHAIN_ID } from './chains';

// Token definitions for bridging
export interface Token {
  symbol: string;
  name: string;
  decimals: number;
  address: string;
  chainId: number;
  logo?: string;
}

// Native token addresses (0x0...0 or specific addresses)
export const NATIVE_TOKEN_ADDRESS = '0x0000000000000000000000000000000000000000';

// Popular tokens on source chains
export const popularTokens: Record<number, Token[]> = {
  // Ethereum Mainnet
  1: [
    {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
      address: NATIVE_TOKEN_ADDRESS,
      chainId: 1,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      chainId: 1,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      symbol: 'USDT',
      name: 'Tether USD',
      decimals: 6,
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      chainId: 1,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    },
  ],
  // Arbitrum
  42161: [
    {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
      address: NATIVE_TOKEN_ADDRESS,
      chainId: 42161,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      chainId: 42161,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      symbol: 'ARB',
      name: 'Arbitrum',
      decimals: 18,
      address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      chainId: 42161,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
    },
  ],
  // Optimism
  10: [
    {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
      address: NATIVE_TOKEN_ADDRESS,
      chainId: 10,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
      chainId: 10,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      symbol: 'OP',
      name: 'Optimism',
      decimals: 18,
      address: '0x4200000000000000000000000000000000000042',
      chainId: 10,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png',
    },
  ],
  // Polygon
  137: [
    {
      symbol: 'MATIC',
      name: 'Polygon',
      decimals: 18,
      address: NATIVE_TOKEN_ADDRESS,
      chainId: 137,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      chainId: 137,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
  ],
  // Base
  8453: [
    {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
      address: NATIVE_TOKEN_ADDRESS,
      chainId: 8453,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      chainId: 8453,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
  ],
  // BNB Chain
  56: [
    {
      symbol: 'BNB',
      name: 'BNB',
      decimals: 18,
      address: NATIVE_TOKEN_ADDRESS,
      chainId: 56,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 18,
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      chainId: 56,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
  ],
  // Avalanche
  43114: [
    {
      symbol: 'AVAX',
      name: 'Avalanche',
      decimals: 18,
      address: NATIVE_TOKEN_ADDRESS,
      chainId: 43114,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png',
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      chainId: 43114,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
  ],
  // Sonic
  146: [
    {
      symbol: 'S',
      name: 'Sonic',
      decimals: 18,
      address: NATIVE_TOKEN_ADDRESS,
      chainId: 146,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/32684.png',
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
      chainId: 146,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      symbol: 'WETH',
      name: 'Wrapped Ether',
      decimals: 18,
      address: '0x50c42dEAcD8Fc9773493ED674b675bE577f2634b',
      chainId: 146,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    },
  ],
};

// Hyperliquid destination tokens
export const hyperliquidTokens: Token[] = [
  {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    address: '0xeb62eee3685fc4c43992febcd9e75443aef550ab', // USDC on Hyperliquid
    chainId: HYPERLIQUID_CHAIN_ID,
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    symbol: 'HYPE',
    name: 'Hyperliquid',
    decimals: 18,
    address: NATIVE_TOKEN_ADDRESS,
    chainId: HYPERLIQUID_CHAIN_ID,
    logo: '/assets/green.png',
  },
];

export const getTokensForChain = (chainId: number): Token[] => {
  return popularTokens[chainId] || [];
};
