import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion, useScroll, useTransform } from 'motion/react';

export function Header() {
  const { scrollY } = useScroll();
  
  // Animate header background opacity based on scroll
  const headerBgOpacity = useTransform(scrollY, [0, 100], [0.3, 0.9]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);
  const headerScale = useTransform(scrollY, [0, 50], [1, 0.98]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0.1, 0.3]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: 0.1,
      }}
      className="fixed top-0 left-0 right-0 z-40 safe-top"
    >
      <div className="mx-auto px-4 sm:px-6">
        <motion.div 
          style={{ 
            scale: headerScale,
            backgroundColor: `rgba(13, 13, 13, ${headerBgOpacity.get()})`,
            backdropFilter: `blur(${headerBlur.get()}px)`,
            borderColor: `rgba(74, 222, 128, ${borderOpacity.get()})`,
          }}
          className="flex items-center justify-between h-16 sm:h-20 mt-3 sm:mt-4 px-4 sm:px-6 max-w-2xl mx-auto rounded-2xl border"
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img 
              src="/assets/green.png" 
              alt="Liquyn" 
              className="h-7 sm:h-8 w-auto"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            />
          </motion.div>

          {/* Connect Button */}
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              const ready = mounted;
              const connected = ready && account && chain;

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    style: {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <motion.button
                          onClick={openConnectModal}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)',
                          }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
                          className="px-4 py-2 sm:px-5 sm:py-2.5 bg-accent text-dark-900 font-semibold 
                                     rounded-xl text-sm sm:text-base"
                        >
                          Connect
                        </motion.button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <motion.button
                          onClick={openChainModal}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          animate={{ 
                            boxShadow: [
                              '0 0 0 rgba(239, 68, 68, 0)',
                              '0 0 15px rgba(239, 68, 68, 0.3)',
                              '0 0 0 rgba(239, 68, 68, 0)',
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-4 py-2 bg-error/10 border border-error/30 text-error 
                                     font-medium rounded-xl text-sm"
                        >
                          Wrong network
                        </motion.button>
                      );
                    }

                    return (
                      <motion.div 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <motion.button
                          onClick={openChainModal}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="hidden sm:flex items-center gap-2 px-3 py-2 btn-ghost text-sm rounded-lg
                                     hover:bg-white/5"
                        >
                          {chain.hasIcon && chain.iconUrl && (
                            <motion.img
                              alt={chain.name ?? 'Chain'}
                              src={chain.iconUrl}
                              className="w-4 h-4 rounded-full"
                              layoutId="chain-icon"
                            />
                          )}
                          <span className="text-white/70">{chain.name}</span>
                        </motion.button>

                        <motion.button
                          onClick={openAccountModal}
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="px-3 py-2 sm:px-4 btn-ghost text-sm rounded-lg"
                        >
                          <motion.span 
                            className="text-white font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {account.displayName}
                          </motion.span>
                        </motion.button>
                      </motion.div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </motion.div>
      </div>
    </motion.header>
  );
}
