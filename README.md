# Liquyn Swap

A minimal, mobile-first bridge dApp for swapping and bridging from any chain to Hyperliquid, with privacy bult in as standard. Built for the Hyperliquid Hackathon.

**Live Demo:** https://liquyn-swap.vercel.app/  
**Repository:** https://github.com/kylebolton/HyperliquidHackathon

## Features

- 🌉 Cross-chain bridging to Hyperliquid via LI.FI
- 🔒 **Privacy Mode** - Break on-chain traceability with Railgun
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
- Railgun SDK (privacy)
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

→ All bridging to **Hyperliquid** (Chain ID: 999)

## Privacy Mode

Enable **Privacy Mode** to break the on-chain link between your source wallet and Hyperliquid account using [Railgun](https://www.railgun.org/).

### How it works

1. **Shield** - Your tokens are encrypted into Railgun's private pool
2. **Bridge** - Funds are privately bridged to the destination chain
3. **Unshield** - Tokens are delivered to your Hyperliquid wallet with no traceable link

### Supported Privacy Chains

Privacy routing is available through these Railgun-supported networks:

| Chain | ID |
|-------|-----|
| Ethereum | 1 |
| Arbitrum | 42161 |
| Polygon | 137 |
| BNB Chain | 56 |

**Starting from any chain?** No problem! If you're bridging from a non-Railgun chain (like Sonic, Base, or Avalanche), your funds will automatically bridge to a Railgun-supported chain first, then go through the privacy flow.

### Privacy Considerations

- Adds ~5-15 minutes to transaction time for shielding/unshielding
- Small additional fees for Railgun relayer services
- Uses zero-knowledge proofs - your transaction details remain private

## LI.FI Integration

Sonic and all other source chains are fully integrated with LI.FI for:
- Cross-chain bridging (Relay, StargateV2, Symbiosis, etc.)
- DEX aggregation (KyberSwap, OpenOcean, Sushiswap, etc.)
- Optimal route finding and gas estimation

## License

MIT
