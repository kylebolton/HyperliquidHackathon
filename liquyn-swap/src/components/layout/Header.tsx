import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 safe-top"
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 glass-card mt-3 sm:mt-4 px-4 sm:px-6 max-w-2xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/assets/green.png" 
              alt="Liquyn" 
              className="h-7 sm:h-8 w-auto"
            />
          </div>

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
                        <button
                          onClick={openConnectModal}
                          className="px-4 py-2 sm:px-5 sm:py-2.5 bg-accent text-dark-900 font-semibold 
                                     rounded-xl text-sm sm:text-base transition-all active:scale-[0.98]"
                        >
                          Connect
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button
                          onClick={openChainModal}
                          className="px-4 py-2 bg-error/10 border border-error/30 text-error 
                                     font-medium rounded-xl text-sm transition-all"
                        >
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={openChainModal}
                          className="hidden sm:flex items-center gap-2 px-3 py-2 btn-ghost text-sm"
                        >
                          {chain.hasIcon && chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain'}
                              src={chain.iconUrl}
                              className="w-4 h-4 rounded-full"
                            />
                          )}
                          <span className="text-white/70">{chain.name}</span>
                        </button>

                        <button
                          onClick={openAccountModal}
                          className="px-3 py-2 sm:px-4 btn-ghost text-sm"
                        >
                          <span className="text-white font-medium">
                            {account.displayName}
                          </span>
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </motion.header>
  );
}
