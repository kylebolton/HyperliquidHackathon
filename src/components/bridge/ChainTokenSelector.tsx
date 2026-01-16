import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Search, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { chainMetadata, sourceChains } from '../../config/chains';
import { getTokensForChain, type Token } from '../../config/tokens';
import { Modal } from '../ui/Modal';

interface ChainSelectorProps {
  selectedChainId: number | null;
  onSelect: (chainId: number) => void;
  label?: string;
  disabled?: boolean;
}

export function ChainSelector({ selectedChainId, onSelect, label, disabled }: ChainSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedChain = selectedChainId ? chainMetadata[selectedChainId] : null;
  
  const filteredChains = sourceChains.filter((chain) => {
    const metadata = chainMetadata[chain.id];
    return metadata?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           metadata?.shortName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div className="space-y-2">
        {label && (
          <label className="text-sm text-white/50 font-medium">{label}</label>
        )}
        <button
          onClick={() => !disabled && setIsOpen(true)}
          disabled={disabled}
          className={cn(
            'w-full flex items-center justify-between gap-2 px-4 py-3.5',
            'bg-dark-700 border border-dark-400/30 rounded-xl',
            'hover:border-accent/30 active:scale-[0.99] transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          <div className="flex items-center gap-3 min-w-0">
            {selectedChain ? (
              <>
                <img
                  src={selectedChain.logo}
                  alt={selectedChain.name}
                  className="w-7 h-7 rounded-full flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/28';
                  }}
                />
                <span className="font-medium text-white truncate">{selectedChain.name}</span>
              </>
            ) : (
              <span className="text-white/40">Select chain</span>
            )}
          </div>
          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0" />
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSearchQuery('');
        }}
        title="Select Chain"
      >
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search chains..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
            autoFocus={false}
          />
        </div>

        {/* Chain List */}
        <div className="space-y-1">
          {filteredChains.map((chain) => {
            const metadata = chainMetadata[chain.id];
            const isSelected = chain.id === selectedChainId;
            
            return (
              <motion.button
                key={chain.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onSelect(chain.id);
                  setIsOpen(false);
                  setSearchQuery('');
                }}
                className={cn(
                  'w-full touch-item',
                  isSelected 
                    ? 'bg-accent/10 border border-accent/30' 
                    : 'hover:bg-dark-600/50'
                )}
              >
                <img
                  src={metadata?.logo}
                  alt={metadata?.name}
                  className="w-8 h-8 rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32';
                  }}
                />
                <span className="flex-1 text-left font-medium text-white">{metadata?.name}</span>
                {isSelected && <Check className="w-5 h-5 text-accent" />}
              </motion.button>
            );
          })}
        </div>
      </Modal>
    </>
  );
}

interface TokenSelectorProps {
  chainId: number | null;
  selectedToken: Token | null;
  onSelect: (token: Token) => void;
  label?: string;
  disabled?: boolean;
}

export function TokenSelector({ chainId, selectedToken, onSelect, label, disabled }: TokenSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const tokens = chainId ? getTokensForChain(chainId) : [];
  
  const filteredTokens = tokens.filter((token) =>
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="space-y-2">
        {label && (
          <label className="text-sm text-white/50 font-medium">{label}</label>
        )}
        <button
          onClick={() => !disabled && chainId && setIsOpen(true)}
          disabled={disabled || !chainId}
          className={cn(
            'w-full flex items-center justify-between gap-2 px-4 py-3.5',
            'bg-dark-700 border border-dark-400/30 rounded-xl',
            'hover:border-accent/30 active:scale-[0.99] transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          <div className="flex items-center gap-3 min-w-0">
            {selectedToken ? (
              <>
                <img
                  src={selectedToken.logo}
                  alt={selectedToken.symbol}
                  className="w-7 h-7 rounded-full flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/28';
                  }}
                />
                <div className="text-left min-w-0">
                  <div className="font-medium text-white truncate">{selectedToken.symbol}</div>
                </div>
              </>
            ) : (
              <span className="text-white/40">
                {chainId ? 'Select token' : 'Select chain first'}
              </span>
            )}
          </div>
          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0" />
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSearchQuery('');
        }}
        title="Select Token"
      >
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search tokens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
            autoFocus={false}
          />
        </div>

        {/* Token List */}
        <div className="space-y-1">
          {filteredTokens.map((token) => {
            const isSelected = selectedToken?.address === token.address;
            
            return (
              <motion.button
                key={token.address}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onSelect(token);
                  setIsOpen(false);
                  setSearchQuery('');
                }}
                className={cn(
                  'w-full touch-item',
                  isSelected 
                    ? 'bg-accent/10 border border-accent/30' 
                    : 'hover:bg-dark-600/50'
                )}
              >
                <img
                  src={token.logo}
                  alt={token.symbol}
                  className="w-8 h-8 rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32';
                  }}
                />
                <div className="flex-1 text-left">
                  <div className="font-medium text-white">{token.symbol}</div>
                  <div className="text-xs text-white/40">{token.name}</div>
                </div>
                {isSelected && <Check className="w-5 h-5 text-accent" />}
              </motion.button>
            );
          })}
          
          {filteredTokens.length === 0 && (
            <div className="text-center py-8 text-white/40">
              No tokens found
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
