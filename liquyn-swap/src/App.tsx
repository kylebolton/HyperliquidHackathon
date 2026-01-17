import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'motion/react';
import { config } from './config/wagmi';
import { Layout } from './components/layout/Layout';
import { BridgeWidget } from './components/bridge/BridgeWidget';
import { AnimatedContainer } from './components/ui/AnimatedContainer';

const queryClient = new QueryClient();

// Custom RainbowKit theme matching Liquyn
const customTheme = darkTheme({
  accentColor: '#4ADE80',
  accentColorForeground: '#0a0a0a',
  borderRadius: 'large',
  fontStack: 'system',
  overlayBlur: 'small',
});

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={customTheme} modalSize="compact">
          <Layout>
            <div className="max-w-7xl mx-auto">
              {/* Hero Section */}
              <div className="text-center px-4 pt-4 pb-8 sm:pt-8 sm:pb-12">
                <AnimatedContainer>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/20 rounded-full mb-6">
                    <span className="text-sm font-medium text-accent">⚡ Powered by LI.FI</span>
                  </div>
                </AnimatedContainer>

                <AnimatedContainer delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    Bridge to <span className="text-accent">HyperEVM</span>
                  </h1>
                </AnimatedContainer>

                <AnimatedContainer delay={0.2}>
                  <p className="text-base sm:text-lg text-white/50 max-w-lg mx-auto">
                    Swap and bridge from any chain to HyperEVM in one transaction.
                  </p>
                </AnimatedContainer>
              </div>

              {/* Bridge Widget */}
              <AnimatedContainer delay={0.3}>
                <BridgeWidget />
              </AnimatedContainer>

              {/* Features */}
              <AnimatedContainer delay={0.4}>
                <div className="mt-12 sm:mt-16 px-4 pb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    {[
                      { title: 'One-Click', desc: 'Single transaction bridging' },
                      { title: 'Best Rates', desc: 'LI.FI finds optimal routes' },
                      { title: 'Auto-Deposit', desc: 'Start trading instantly' },
                    ].map((feature, i) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="p-4 bg-dark-800/30 border border-dark-400/20 rounded-xl text-center"
                      >
                        <div className="text-sm font-semibold text-white mb-1">{feature.title}</div>
                        <div className="text-xs text-white/40">{feature.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedContainer>

              {/* Chains */}
              <AnimatedContainer delay={0.6}>
                <div className="text-center px-4 pb-12">
                  <p className="text-xs text-white/30 mb-4">Supported Chains</p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {[
                      { name: 'ETH', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png' },
                      { name: 'ARB', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png' },
                      { name: 'OP', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png' },
                      { name: 'MATIC', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png' },
                      { name: 'BASE', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png' },
                      { name: 'BNB', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png' },
                      { name: 'AVAX', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png' },
                    ].map((chain) => (
                      <div
                        key={chain.name}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-800/30 rounded-lg border border-dark-400/20"
                      >
                        <img
                          src={chain.logo}
                          alt={chain.name}
                          className="w-4 h-4 rounded-full"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <span className="text-xs text-white/50">{chain.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </Layout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
