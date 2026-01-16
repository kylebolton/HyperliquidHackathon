import { motion, AnimatePresence } from 'motion/react';
import { 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  Clock, 
  Shield, 
  ShieldOff,
  Timer,
  ArrowRight,
  Eye,
  EyeOff,
  RefreshCw
} from 'lucide-react';
import { cn } from '../../lib/utils';
import type { PrivacyExecutionState, PrivacyStep } from '../../types';

interface PrivacyProgressProps {
  executionState: PrivacyExecutionState;
  onClose?: () => void;
  onRetry?: () => void;
}

const stepIcons: Record<PrivacyStep['id'], typeof Shield> = {
  bridge_to_railgun: ArrowRight,
  shield: Shield,
  wait: Timer,
  unshield: ShieldOff,
  bridge_to_hyperliquid: ArrowRight,
};

const stepDescriptions: Record<PrivacyStep['id'], { active: string; complete: string }> = {
  bridge_to_railgun: {
    active: 'Transferring to privacy chain...',
    complete: 'Arrived on privacy chain',
  },
  shield: {
    active: 'Shielding funds into private balance...',
    complete: 'Funds shielded successfully',
  },
  wait: {
    active: 'Building anonymity set...',
    complete: 'Anonymity period complete',
  },
  unshield: {
    active: 'Unshielding to new address...',
    complete: 'Funds unshielded',
  },
  bridge_to_hyperliquid: {
    active: 'Bridging to Hyperliquid...',
    complete: 'Arrived on Hyperliquid',
  },
};

function PrivacyStepIndicator({ 
  step, 
  index, 
  totalSteps,
  isActive,
}: { 
  step: PrivacyStep; 
  index: number; 
  totalSteps: number;
  isActive: boolean;
}) {
  const Icon = stepIcons[step.id];
  const description = stepDescriptions[step.id];

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'relative flex items-start gap-3 p-3 rounded-xl transition-all duration-300',
        step.status === 'in_progress' && 'bg-purple-500/10 border border-purple-500/30',
        step.status === 'completed' && 'bg-purple-500/5',
        step.status === 'failed' && 'bg-error/5 border border-error/20',
        step.status === 'pending' && 'opacity-50'
      )}
    >
      {/* Step Number & Status */}
      <div className="flex flex-col items-center">
        <div className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center',
          step.status === 'completed' && 'bg-purple-500/20',
          step.status === 'in_progress' && 'bg-purple-500/20',
          step.status === 'failed' && 'bg-error/20',
          step.status === 'pending' && 'bg-dark-600'
        )}>
          {step.status === 'completed' ? (
            <CheckCircle2 className="w-5 h-5 text-purple-400" />
          ) : step.status === 'in_progress' ? (
            <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
          ) : step.status === 'failed' ? (
            <XCircle className="w-5 h-5 text-error" />
          ) : (
            <Icon className="w-5 h-5 text-white/40" />
          )}
        </div>
        {/* Connector Line */}
        {index < totalSteps - 1 && (
          <div className={cn(
            'w-0.5 h-6 mt-1',
            step.status === 'completed' ? 'bg-purple-500/40' : 'bg-dark-500'
          )} />
        )}
      </div>

      {/* Step Details */}
      <div className="flex-1 min-w-0 pt-1">
        <div className="flex items-center gap-2 mb-1">
          <span className={cn(
            'text-sm font-medium',
            step.status === 'completed' && 'text-purple-400',
            step.status === 'in_progress' && 'text-purple-400',
            step.status === 'failed' && 'text-error',
            step.status === 'pending' && 'text-white/50'
          )}>
            {step.label}
          </span>
          {step.id === 'shield' && step.status === 'completed' && (
            <EyeOff className="w-3.5 h-3.5 text-purple-400" />
          )}
          {step.id === 'unshield' && step.status === 'completed' && (
            <Eye className="w-3.5 h-3.5 text-purple-400" />
          )}
        </div>

        <p className="text-xs text-white/40">
          {step.status === 'in_progress' 
            ? description.active 
            : step.status === 'completed'
              ? description.complete
              : step.description}
        </p>

        {/* Wait Time Display */}
        {step.id === 'wait' && step.status === 'in_progress' && step.estimatedTime !== undefined && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex items-center gap-2"
          >
            <Clock className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-sm font-mono text-purple-400">
              {step.estimatedTime > 0 ? `${step.estimatedTime}s remaining` : 'Almost done...'}
            </span>
          </motion.div>
        )}

        {/* TX Hash */}
        {step.txHash && (
          <div className="flex items-center gap-2 mt-2">
            <a
              href={`https://arbiscan.io/tx/${step.txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span className="font-mono">{step.txHash.slice(0, 8)}...{step.txHash.slice(-6)}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* Error */}
        {step.error && (
          <p className="text-xs text-error mt-1">{step.error}</p>
        )}
      </div>
    </motion.div>
  );
}

export function PrivacyProgress({ executionState, onClose, onRetry }: PrivacyProgressProps) {
  const { status, steps, overallProgress, error, shieldTxHash, unshieldTxHash } = executionState;

  if (status === 'idle' || steps.length === 0) {
    return null;
  }

  const statusConfig = {
    executing: {
      icon: Loader2,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      message: 'Privacy transaction in progress',
      animate: true,
    },
    completed: {
      icon: Shield,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      message: 'Privacy bridge complete!',
      animate: false,
    },
    failed: {
      icon: XCircle,
      color: 'text-error',
      bgColor: 'bg-error/10',
      message: 'Privacy transaction failed',
      animate: false,
    },
  }[status] || statusConfig.executing;

  const Icon = statusConfig.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="bg-dark-800/80 border border-purple-500/20 rounded-2xl p-5"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-5 pb-4 border-b border-purple-500/20">
          <div className={cn('w-12 h-12 rounded-full flex items-center justify-center', statusConfig.bgColor)}>
            <Icon className={cn('w-6 h-6', statusConfig.color, statusConfig.animate && 'animate-spin')} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className={cn('font-semibold text-lg', statusConfig.color)}>
                {statusConfig.message}
              </p>
              <Shield className="w-4 h-4 text-purple-400" />
            </div>
            {status === 'executing' && (
              <p className="text-sm text-white/40">
                {overallProgress}% complete
              </p>
            )}
          </div>
        </div>

        {/* Privacy Badge */}
        <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <EyeOff className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-400">
            Privacy Mode via Railgun
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mb-5">
          <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 0.5 }}
              className={cn(
                'h-full rounded-full',
                status === 'completed' ? 'bg-purple-500' : 'bg-purple-500/70'
              )}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-1 mb-5">
          {steps.map((step, index) => (
            <PrivacyStepIndicator
              key={step.id}
              step={step}
              index={index}
              totalSteps={steps.length}
              isActive={executionState.currentStepId === step.id}
            />
          ))}
        </div>

        {/* Transaction Hashes */}
        {(shieldTxHash || unshieldTxHash) && (
          <div className="p-3 bg-dark-700 rounded-xl mb-4 space-y-2">
            {shieldTxHash && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span className="text-white/40">Shield TX:</span>
                </div>
                <a
                  href={`https://arbiscan.io/tx/${shieldTxHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <code className="font-mono text-xs">{shieldTxHash.slice(0, 8)}...{shieldTxHash.slice(-6)}</code>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
            {unshieldTxHash && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <ShieldOff className="w-4 h-4 text-purple-400" />
                  <span className="text-white/40">Unshield TX:</span>
                </div>
                <a
                  href={`https://arbiscan.io/tx/${unshieldTxHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <code className="font-mono text-xs">{unshieldTxHash.slice(0, 8)}...{unshieldTxHash.slice(-6)}</code>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-error/10 border border-error/30 rounded-xl mb-4"
          >
            <p className="text-sm text-error">{error}</p>
          </motion.div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {status === 'failed' && onRetry && (
            <button
              onClick={onRetry}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 font-medium rounded-xl transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Retry
            </button>
          )}
          {(status === 'completed' || status === 'failed') && onClose && (
            <button
              onClick={onClose}
              className={cn(
                "py-3 font-medium rounded-xl transition-colors",
                status === 'failed' && onRetry 
                  ? 'flex-1 bg-dark-600 hover:bg-dark-500 text-white' 
                  : 'w-full bg-purple-500 hover:bg-purple-600 text-white'
              )}
            >
              {status === 'completed' ? 'Done' : 'Close'}
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
