import { useState } from 'react';
import { Shield, ShieldOff, Info, Clock, DollarSign, Eye, EyeOff, ChevronRight, AlertTriangle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Modal } from '../ui/Modal';

interface PrivacyToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  disabled?: boolean;
}

interface TradeoffItem {
  icon: React.ReactNode;
  label: string;
  standard: string;
  private: string;
  highlight?: 'positive' | 'negative' | 'neutral';
}

const TRADEOFFS: TradeoffItem[] = [
  {
    icon: <Clock className="w-4 h-4" />,
    label: 'Time',
    standard: '2-10 min',
    private: '15-60+ min',
    highlight: 'negative',
  },
  {
    icon: <DollarSign className="w-4 h-4" />,
    label: 'Fees',
    standard: 'Lower',
    private: 'Higher (~2x)',
    highlight: 'negative',
  },
  {
    icon: <Eye className="w-4 h-4" />,
    label: 'Traceability',
    standard: 'Full on-chain',
    private: 'Broken',
    highlight: 'positive',
  },
  {
    icon: <ChevronRight className="w-4 h-4" />,
    label: 'Steps',
    standard: '1-2',
    private: '4-5',
    highlight: 'neutral',
  },
];

export function PrivacyToggle({ enabled, onToggle, disabled }: PrivacyToggleProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleToggleClick = () => {
    if (disabled) return;
    
    if (!enabled) {
      // Show confirmation when enabling
      setShowConfirm(true);
    } else {
      // Disable directly
      onToggle(false);
    }
  };

  const handleConfirmEnable = () => {
    onToggle(true);
    setShowConfirm(false);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        {/* Info Button */}
        <button
          onClick={() => setShowInfo(true)}
          className="p-1.5 hover:bg-dark-600 rounded-lg transition-colors"
          title="Learn about Privacy Mode"
        >
          <Info className="w-4 h-4 text-white/40 hover:text-white/60" />
        </button>

        {/* Toggle Button */}
        <button
          onClick={handleToggleClick}
          disabled={disabled}
          className={cn(
            'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200',
            'active:scale-95',
            disabled && 'opacity-50 cursor-not-allowed',
            enabled
              ? 'bg-purple-500/20 border border-purple-500/40 text-purple-400'
              : 'bg-dark-600 hover:bg-dark-500 text-white/70'
          )}
        >
          {enabled ? (
            <Shield className="w-4 h-4" />
          ) : (
            <ShieldOff className="w-4 h-4" />
          )}
          <span className="text-sm font-medium">
            {enabled ? 'Private' : 'Standard'}
          </span>
        </button>
      </div>

      {/* Info Modal */}
      <Modal
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        title="Privacy Mode"
      >
        <div className="space-y-5">
          {/* Header Description */}
          <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
            <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-purple-400 mb-1">What is Privacy Mode?</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Privacy Mode routes your funds through <span className="text-purple-400 font-medium">Railgun</span>, 
                an EVM-based privacy protocol that uses zero-knowledge proofs to break the on-chain 
                transaction link between your source and destination addresses.
              </p>
            </div>
          </div>

          {/* How it Works */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">How it Works</h4>
            <div className="space-y-2">
              <FlowStep number={1} text="Bridge from source chain to Railgun-supported chain" />
              <FlowStep number={2} text="Shield funds into Railgun private balance" />
              <FlowStep number={3} text="Wait for anonymity (recommended)" />
              <FlowStep number={4} text="Unshield to new address" />
              <FlowStep number={5} text="Bridge to Hyperliquid" />
            </div>
          </div>

          {/* Trade-offs Table */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Trade-offs</h4>
            <div className="bg-dark-700/50 rounded-xl overflow-hidden border border-dark-400/20">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 px-4 py-2.5 bg-dark-600/50 border-b border-dark-400/20">
                <span className="text-xs font-medium text-white/40">Aspect</span>
                <span className="text-xs font-medium text-white/40 text-center">Standard</span>
                <span className="text-xs font-medium text-purple-400 text-center">Private</span>
              </div>
              {/* Rows */}
              {TRADEOFFS.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    'grid grid-cols-3 gap-4 px-4 py-3',
                    index !== TRADEOFFS.length - 1 && 'border-b border-dark-400/10'
                  )}
                >
                  <div className="flex items-center gap-2 text-white/60">
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <span className="text-sm text-white/50 text-center">{item.standard}</span>
                  <span className={cn(
                    'text-sm text-center font-medium',
                    item.highlight === 'positive' && 'text-green-400',
                    item.highlight === 'negative' && 'text-yellow-400',
                    item.highlight === 'neutral' && 'text-white/70'
                  )}>
                    {item.private}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Chains */}
          <div className="p-3 bg-dark-700/50 rounded-xl border border-dark-400/20">
            <div className="flex items-center gap-2 mb-2">
              <EyeOff className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white">Supported Privacy Chains</span>
            </div>
            <p className="text-xs text-white/50">
              Railgun is available on <span className="text-white/70">Arbitrum</span>, <span className="text-white/70">Polygon</span>, 
              <span className="text-white/70"> BSC</span>, and <span className="text-white/70">Ethereum</span>. 
              Your funds will automatically route through one of these chains.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setShowInfo(false)}
            className="w-full py-3 bg-dark-600 hover:bg-dark-500 text-white font-medium rounded-xl transition-colors"
          >
            Got it
          </button>
        </div>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Enable Privacy Mode?"
      >
        <div className="space-y-5">
          {/* Warning */}
          <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-400 mb-1">Please Note</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Privacy Mode will increase transaction time and fees. Your funds will be routed 
                through the Railgun protocol to break the on-chain link.
              </p>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-dark-700/50 rounded-xl border border-dark-400/20 text-center">
              <Clock className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
              <span className="text-xs text-white/40 block">Est. Time</span>
              <span className="text-sm font-medium text-white">15-60+ min</span>
            </div>
            <div className="p-3 bg-dark-700/50 rounded-xl border border-dark-400/20 text-center">
              <DollarSign className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
              <span className="text-xs text-white/40 block">Extra Fees</span>
              <span className="text-sm font-medium text-white">~2x gas</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setShowConfirm(false)}
              className="flex-1 py-3 bg-dark-600 hover:bg-dark-500 text-white font-medium rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmEnable}
              className="flex-1 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Enable Privacy
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

function FlowStep({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-medium text-purple-400">{number}</span>
      </div>
      <span className="text-sm text-white/60">{text}</span>
    </div>
  );
}
