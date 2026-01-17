import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { useRef } from 'react';
import { Lock } from 'lucide-react';
import { config } from './config/wagmi';
import { Layout } from './components/layout/Layout';
import { BridgeWidget } from './components/bridge/BridgeWidget';
import { NetworkBackground } from './components/ui/NetworkBackground';

const queryClient = new QueryClient();

// Custom RainbowKit theme matching app background
const customTheme = {
  ...darkTheme({
    accentColor: '#4ADE80',
    accentColorForeground: '#030712',
    borderRadius: 'large',
    fontStack: 'system',
    overlayBlur: 'small',
  }),
  colors: {
    ...darkTheme().colors,
    // Match the app's dark gradient background
    modalBackground: '#0c1219',
    modalBackdrop: 'rgba(3, 7, 18, 0.9)',
    profileForeground: '#0c1219',
    menuItemBackground: 'rgba(74, 222, 128, 0.06)',
    closeButton: 'rgba(255, 255, 255, 0.5)',
    closeButtonBackground: 'rgba(255, 255, 255, 0.06)',
    modalBorder: 'rgba(74, 222, 128, 0.15)',
    generalBorder: 'rgba(74, 222, 128, 0.1)',
    actionButtonSecondaryBackground: 'rgba(74, 222, 128, 0.08)',
    connectButtonBackground: '#0c1219',
    connectButtonInnerBackground: '#0a0f1a',
    selectedOptionBorder: 'rgba(74, 222, 128, 0.5)',
  },
};

// Animation variants
const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    rotateX: -90,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 12,
    },
  },
};

const featureVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

const chainBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

// Animated text component with letter-by-letter reveal
function AnimatedText({ text, className, accentWord }: { text: string; className?: string; accentWord?: string }) {
  const words = text.split(' ');
  
  return (
    <motion.span
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.3em' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-flex' }}>
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={letterVariants}
              className={word === accentWord ? 'text-accent' : ''}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

// Inner app content with motion transforms - isolated from RainbowKit
function AppContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Parallax effects for hero section
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <>
      <NetworkBackground />
      <Layout>
        <div ref={containerRef} className="max-w-7xl mx-auto relative">
          {/* Hero Section with Parallax */}
          <motion.div 
            className="text-center px-4 pt-4 pb-8 sm:pt-8 sm:pb-12"
            style={{ y: heroY, opacity: heroOpacity }}
          >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    <AnimatedText text="Bridge to Hyperliquid" accentWord="Hyperliquid" />
                    <motion.span
                      initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                      transition={{ 
                        delay: 1.2, 
                        duration: 0.6,
                        type: 'spring',
                        stiffness: 120,
                        damping: 20,
                      }}
                      className="inline-flex items-baseline gap-3 ml-4"
                    >
                      <span className="italic font-medium text-accent">
                        privately
                      </span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 1.6,
                          duration: 0.5,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="inline-flex items-center"
                      >
                        <Lock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-accent/80 translate-y-0.5" />
                      </motion.span>
                    </motion.span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="text-base sm:text-lg text-white/50 max-w-lg mx-auto"
                >
                  Swap and bridge from any chain to Hyperliquid in one transaction.
                </motion.p>
              </motion.div>

              {/* Bridge Widget */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 25,
                }}
              >
                <BridgeWidget />
              </motion.div>

              {/* Features with Scroll-Triggered Animations */}
              <div className="mt-12 sm:mt-16 px-4 pb-8">
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ staggerChildren: 0.15 }}
                >
                  {[
                    { title: 'One-Click', desc: 'Single transaction bridging' },
                    { title: 'Best Rates', desc: 'LI.FI finds optimal routes' },
                    { title: 'Auto-Deposit', desc: 'Start trading instantly' },
                  ].map((feature) => (
                    <motion.div
                      key={feature.title}
                      variants={featureVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 0 30px rgba(74, 222, 128, 0.15)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="p-4 bg-dark-800/30 border border-dark-400/20 rounded-xl text-center cursor-default
                                 hover:border-accent/30 transition-colors"
                    >
                      <div className="text-sm font-semibold text-white mb-1">{feature.title}</div>
                      <div className="text-xs text-white/40">{feature.desc}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Chains with Scroll-Triggered Stagger */}
              <div className="text-center px-4 pb-12">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-xs text-white/30 mb-4"
                >
                  Supported Chains
                </motion.p>
                <motion.div 
                  className="flex flex-wrap items-center justify-center gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ staggerChildren: 0.05 }}
                >
                  {[
                    { name: 'ETH', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png', color: '#627EEA' },
                    { name: 'ARB', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png', color: '#28A0F0' },
                    { name: 'OP', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png', color: '#FF0420' },
                    { name: 'MATIC', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png', color: '#8247E5' },
                    { name: 'BASE', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png', color: '#0052FF' },
                    { name: 'BNB', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png', color: '#F0B90B' },
                    { name: 'AVAX', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png', color: '#E84142' },
                  ].map((chain) => (
                    <motion.div
                      key={chain.name}
                      variants={chainBadgeVariants}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: `0 0 20px ${chain.color}40`,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-800/30 rounded-lg border border-dark-400/20
                                 hover:border-white/20 transition-colors cursor-default"
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
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </Layout>
        </>
      );
    }

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={customTheme} modalSize="compact">
          <AppContent />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
