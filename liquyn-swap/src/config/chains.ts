import { defineChain } from 'viem';
import { mainnet, arbitrum, optimism, polygon, base, bsc, avalanche } from 'wagmi/chains';

// HyperEVM Chain Definition
export const hyperEVM = defineChain({
  id: 998,
  name: 'HyperEVM',
  nativeCurrency: {
    name: 'HYPE',
    symbol: 'HYPE',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.hyperliquid.xyz/evm'],
    },
  },
  blockExplorers: {
    default: {
      name: 'HyperScan',
      url: 'https://explorer.hyperliquid.xyz',
    },
  },
});

// Supported source chains for bridging
export const sourceChains = [
  mainnet,
  arbitrum,
  optimism,
  polygon,
  base,
  bsc,
  avalanche,
] as const;

// All supported chains including HyperEVM
export const allChains = [...sourceChains, hyperEVM] as const;

// Chain metadata for UI
export const chainMetadata: Record<number, {
  name: string;
  shortName: string;
  logo: string;
  color: string;
}> = {
  1: {
    name: 'Ethereum',
    shortName: 'ETH',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    color: '#627EEA',
  },
  42161: {
    name: 'Arbitrum',
    shortName: 'ARB',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
    color: '#28A0F0',
  },
  10: {
    name: 'Optimism',
    shortName: 'OP',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png',
    color: '#FF0420',
  },
  137: {
    name: 'Polygon',
    shortName: 'MATIC',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
    color: '#8247E5',
  },
  8453: {
    name: 'Base',
    shortName: 'BASE',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png',
    color: '#0052FF',
  },
  56: {
    name: 'BNB Chain',
    shortName: 'BNB',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
    color: '#F3BA2F',
  },
  43114: {
    name: 'Avalanche',
    shortName: 'AVAX',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png',
    color: '#E84142',
  },
  998: {
    name: 'HyperEVM',
    shortName: 'HYPE',
    logo: '/hyperliquid-logo.svg',
    color: '#00d4ff',
  },
};

export type SupportedChainId = (typeof allChains)[number]['id'];
