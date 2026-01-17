import { ArrowRightLeft, AlertTriangle, Zap, CheckCircle2 } from 'lucide-react';
import { Modal } from '../ui/Modal';

interface NetworkSwitchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitch: () => void;
  fromChainName: string;
  fromChainLogo?: string;
  currentChainName?: string;
  isLoading?: boolean;
}

export function NetworkSwitchModal({
  isOpen,
  onClose,
  onSwitch,
  fromChainName,
  fromChainLogo,
  currentChainName,
  isLoading,
}: NetworkSwitchModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Switch Network"
    >
      <div className="space-y-5">
        {/* Header Description */}
        <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
          <ArrowRightLeft className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-400 mb-1">Network Change Required</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              To bridge from <span className="text-yellow-400 font-medium">{fromChainName}</span>, 
              you need to switch your wallet to that network.
            </p>
          </div>
        </div>

        {/* Current vs Target Network */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Network Switch</h4>
          <div className="flex items-center gap-3">
            {/* Current Network */}
            <div className="flex-1 p-3 bg-dark-700/50 rounded-xl border border-dark-400/20 text-center">
              <span className="text-xs text-white/40 block mb-1">Current</span>
              <span className="text-sm font-medium text-white/70">
                {currentChainName || 'Unknown'}
              </span>
            </div>
            
            {/* Arrow */}
            <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <ArrowRightLeft className="w-4 h-4 text-yellow-400" />
            </div>
            
            {/* Target Network */}
            <div className="flex-1 p-3 bg-dark-700/50 rounded-xl border border-yellow-500/30 text-center">
              <span className="text-xs text-white/40 block mb-1">Target</span>
              <div className="flex items-center justify-center gap-2">
                {fromChainLogo && (
                  <img 
                    src={fromChainLogo} 
                    alt={fromChainName}
                    className="w-4 h-4 rounded-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
                <span className="text-sm font-medium text-yellow-400">
                  {fromChainName}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What happens */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">What Happens</h4>
          <div className="space-y-2">
            <FlowStep icon={<Zap className="w-4 h-4" />} text="Your wallet will prompt you to switch networks" />
            <FlowStep icon={<CheckCircle2 className="w-4 h-4" />} text="Approve the network switch in your wallet" />
            <FlowStep icon={<ArrowRightLeft className="w-4 h-4" />} text="You'll be ready to bridge from the selected chain" />
          </div>
        </div>

        {/* Note */}
        <div className="p-3 bg-dark-700/50 rounded-xl border border-dark-400/20">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Note</span>
          </div>
          <p className="text-xs text-white/50">
            Make sure you have tokens on <span className="text-white/70">{fromChainName}</span> to proceed with 
            the bridge. You can always change your source chain if needed.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-dark-600 hover:bg-dark-500 text-white font-medium rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSwitch}
            disabled={isLoading}
            className="flex-1 py-3 bg-yellow-500 hover:bg-yellow-600 text-dark-900 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                Switching...
              </>
            ) : (
              <>
                <ArrowRightLeft className="w-4 h-4" />
                Switch Network
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}

function FlowStep({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center flex-shrink-0 text-yellow-400">
        {icon}
      </div>
      <span className="text-sm text-white/60">{text}</span>
    </div>
  );
}
