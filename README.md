# Liquyn Swap

A minimal, mobile-first bridge dApp for swapping and bridging from any chain to Hyperliquid. Built for the Hyperliquid Hackathon.

**Live Demo:** https://liquyn-swap.vercel.app/  
**Repository:** https://github.com/kylebolton/HyperliquidHackathon

## Features

- 🌉 Cross-chain bridging to Hyperliquid via LI.FI
- 📱 Mobile-first responsive design
- 💰 Auto-deposit to Hyperliquid L1 trading account
- 🔄 Multiple route comparison (fastest, cheapest, recommended)
- ⚙️ Configurable slippage settings
- 🔁 Automatic retry for failed transactions
- 📊 Real-time transaction status tracking
- 🎨 Subtle Three.js network visualization background
- ♻️ Reusable `<DepositToHyperliquid />` component

## Quick Start

```bash
npm install
cp .env.example .env
# Add VITE_WALLETCONNECT_PROJECT_ID to .env
npm run dev
```

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS v3
- RainbowKit + wagmi v2 + viem
- LI.FI SDK
- Motion (framer-motion)
- Three.js
- TanStack Query

## Reusable Component

```tsx
import { DepositToHyperliquid } from './components/deposit/DepositToHyperliquid';

<DepositToHyperliquid
  amount="100"
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  onSuccess={(txHash) => console.log('Success!', txHash)}
/>
```

## Supported Source Chains

| Chain | ID | Native Token |
|-------|-----|--------------|
| Ethereum | 1 | ETH |
| Arbitrum | 42161 | ETH |
| Optimism | 10 | ETH |
| Polygon | 137 | MATIC |
| Base | 8453 | ETH |
| BNB Chain | 56 | BNB |
| Avalanche | 43114 | AVAX |
| **Sonic** | **146** | **S** |

→ All bridging to **Hyperliquid** (Chain ID: 998)

## LI.FI Integration

Sonic and all other source chains are fully integrated with LI.FI for:
- Cross-chain bridging (Relay, StargateV2, Symbiosis, etc.)
- DEX aggregation (KyberSwap, OpenOcean, Sushiswap, etc.)
- Optimal route finding and gas estimation

## License

MIT
