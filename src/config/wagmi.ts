import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet, arbitrum, optimism, polygon, base, bsc, avalanche } from 'wagmi/chains';
import { hyperliquid, hyperliquidTestnet, sonic } from './chains';

// Wagmi configuration with RainbowKit
export const config = getDefaultConfig({
  appName: 'Liquyn Swap',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo-project-id',
  chains: [mainnet, arbitrum, optimism, polygon, base, bsc, avalanche, sonic, hyperliquid, hyperliquidTestnet],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
    [avalanche.id]: http(),
    [sonic.id]: http('https://rpc.soniclabs.com'),
    [hyperliquid.id]: http('https://rpc.hyperliquid.xyz/evm'),
    [hyperliquidTestnet.id]: http('https://rpc.hyperliquid-testnet.xyz/evm'),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
