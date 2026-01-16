import { motion, AnimatePresence } from 'motion/react';
import { Loader2, CheckCircle2, XCircle, ExternalLink, Clock, Wallet, ArrowRight, RefreshCw } from 'lucide-react';
import { cn, formatDuration } from '../../lib/utils';
import type { ExecutionStatus, RouteStep } from '../../types';
import { chainMetadata } from '../../config/chains';

interface StepStatus {
  status: 'pending' | 'active' | 'complete' | 'failed';
  txHash?: string;
  startTime?: number;
  endTime?: number;
}

interface ExecutionProgressProps {
  status: ExecutionStatus;
  steps?: RouteStep[];
  stepStatuses?: StepStatus[];
  onClose?: () => void;
  onRetry?: () => void;
}

const statusConfig: Record<ExecutionStatus['status'], {
  icon: typeof Loader2;
  color: string;
  bgColor: string;
  message: string;
  animate?: boolean;
}> = {
  idle: {
    icon: Clock,
    color: 'text-white/50',
    bgColor: 'bg-dark-600',
    message: 'Ready to execute',
  },
  pending: {
    icon: Loader2,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    message: 'Preparing transaction...',
    animate: true,
  },
  signing: {
    icon: Wallet,
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    message: 'Confirm in your wallet',
  },
  processing: {
    icon: Loader2,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    message: 'Processing on-chain...',
    animate: true,
  },
  completed: {
    icon: CheckCircle2,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    message: 'Bridge complete!',
  },
  failed: {
    icon: XCircle,
    color: 'text-error',
    bgColor: 'bg-error/10',
    message: 'Transaction failed',
  },
};

function StepIndicator({ 
  step, 
  index, 
  stepStatus,
  totalSteps 
}: { 
  step: RouteStep; 
  index: number; 
  stepStatus: StepStatus;
  totalSteps: number;
}) {
  const fromChain = chainMetadata[step.fromChain];
  const toChain = chainMetadata[step.toChain];

  const getElapsedTime = () => {
    if (stepStatus.startTime && stepStatus.endTime) {
      return formatDuration(Math.round((stepStatus.endTime - stepStatus.startTime) / 1000));
    }
    if (stepStatus.startTime && stepStatus.status === 'active') {
      const elapsed = Math.round((Date.now() - stepStatus.startTime) / 1000);
      return `${formatDuration(elapsed)}...`;
    }
    return `~${formatDuration(step.estimatedTime)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'relative flex items-start gap-3 p-3 rounded-xl transition-all duration-300',
        stepStatus.status === 'active' && 'bg-accent/5 border border-accent/20',
        stepStatus.status === 'complete' && 'bg-accent/5',
        stepStatus.status === 'failed' && 'bg-error/5 border border-error/20',
        stepStatus.status === 'pending' && 'opacity-50'
      )}
    >
      {/* Step Number & Status */}
      <div className="flex flex-col items-center">
        <div className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium',
          stepStatus.status === 'complete' && 'bg-accent/20 text-accent',
          stepStatus.status === 'active' && 'bg-accent/20 text-accent',
          stepStatus.status === 'failed' && 'bg-error/20 text-error',
          stepStatus.status === 'pending' && 'bg-dark-600 text-white/50'
        )}>
          {stepStatus.status === 'complete' ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : stepStatus.status === 'active' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : stepStatus.status === 'failed' ? (
            <XCircle className="w-4 h-4" />
          ) : (
            index + 1
          )}
        </div>
        {/* Connector Line */}
        {index < totalSteps - 1 && (
          <div className={cn(
            'w-0.5 h-8 mt-1',
            stepStatus.status === 'complete' ? 'bg-accent/40' : 'bg-dark-500'
          )} />
        )}
      </div>

      {/* Step Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-white/50 uppercase tracking-wide">
            {step.type === 'swap' ? 'Swap' : step.type === 'bridge' ? 'Bridge' : 'Cross-chain'}
          </span>
          <span className="text-xs text-white/30">via {step.tool}</span>
        </div>

        {/* Chain Flow */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1.5">
            {fromChain && (
              <img 
                src={fromChain.logo} 
                alt={fromChain.name} 
                className="w-4 h-4 rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
            <span className="text-white/70">{step.fromToken.symbol}</span>
          </div>
          <ArrowRight className="w-3 h-3 text-white/30" />
          <div className="flex items-center gap-1.5">
            {toChain && (
              <img 
                src={toChain.logo} 
                alt={toChain.name} 
                className="w-4 h-4 rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
            <span className="text-white/70">{step.toToken.symbol}</span>
          </div>
        </div>

        {/* Time & TX Hash */}
        <div className="flex items-center gap-3 mt-1.5 text-xs text-white/40">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{getElapsedTime()}</span>
          </div>
          {stepStatus.txHash && (
            <a
              href={`https://explorer.hyperliquid.xyz/tx/${stepStatus.txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors"
            >
              <span className="font-mono">{stepStatus.txHash.slice(0, 6)}...{stepStatus.txHash.slice(-4)}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ExecutionProgress({ status, steps, stepStatuses, onClose, onRetry }: ExecutionProgressProps) {
  const config = statusConfig[status.status];
  const Icon = config.icon;

  // Generate default step statuses if not provided
  const effectiveStepStatuses: StepStatus[] = stepStatuses || (steps || []).map((_, index) => {
    if (index < status.currentStep) return { status: 'complete' as const };
    if (index === status.currentStep && (status.status === 'processing' || status.status === 'signing')) {
      return { status: 'active' as const, startTime: Date.now() };
    }
    return { status: 'pending' as const };
  });

  return (
    <AnimatePresence>
      {status.status !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="bg-dark-800/80 border border-dark-400/30 rounded-2xl p-5"
        >
          {/* Overall Status Header */}
          <div className="flex items-center gap-4 mb-5 pb-4 border-b border-dark-400/20">
            <div className={cn('w-12 h-12 rounded-full flex items-center justify-center', config.bgColor)}>
              <Icon className={cn('w-6 h-6', config.color, config.animate && 'animate-spin')} />
            </div>
            <div className="flex-1">
              <p className={cn('font-semibold text-lg', config.color)}>{config.message}</p>
              {status.totalSteps > 0 && (
                <p className="text-sm text-white/40">
                  Step {Math.min(status.currentStep + 1, status.totalSteps)} of {status.totalSteps}
                </p>
              )}
            </div>
          </div>

          {/* Detailed Steps */}
          {steps && steps.length > 0 && (
            <div className="space-y-1 mb-5">
              {steps.map((step, index) => (
                <StepIndicator
                  key={index}
                  step={step}
                  index={index}
                  stepStatus={effectiveStepStatuses[index] || { status: 'pending' }}
                  totalSteps={steps.length}
                />
              ))}
            </div>
          )}

          {/* Simple Progress Bar (fallback) */}
          {(!steps || steps.length === 0) && status.totalSteps > 0 && (
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                <span>Progress</span>
                <span>{status.currentStep} / {status.totalSteps}</span>
              </div>
              <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(status.currentStep / status.totalSteps) * 100}%` }}
                  className={cn('h-full rounded-full', status.status === 'completed' ? 'bg-accent' : 'bg-accent/70')}
                />
              </div>
            </div>
          )}

          {/* Error Message */}
          {status.error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-error/10 border border-error/30 rounded-xl mb-4"
            >
              <p className="text-sm text-error">{status.error}</p>
            </motion.div>
          )}

          {/* Transaction Hash */}
          {status.txHash && (
            <div className="flex items-center justify-between p-3 bg-dark-700 rounded-xl text-sm mb-4">
              <div className="flex items-center gap-2">
                <span className="text-white/40">Transaction:</span>
                <code className="text-accent font-mono text-xs">
                  {status.txHash.slice(0, 10)}...{status.txHash.slice(-8)}
                </code>
              </div>
              <a
                href={`https://explorer.hyperliquid.xyz/tx/${status.txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors"
              >
                <span className="text-xs">View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            {status.status === 'failed' && onRetry && (
              <button
                onClick={onRetry}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent/10 hover:bg-accent/20 text-accent font-medium rounded-xl transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Retry
              </button>
            )}
            {(status.status === 'completed' || status.status === 'failed') && onClose && (
              <button
                onClick={onClose}
                className={cn(
                  "py-3 font-medium rounded-xl transition-colors",
                  status.status === 'failed' && onRetry ? 'flex-1 bg-dark-600 hover:bg-dark-500 text-white' : 'w-full bg-accent hover:bg-accent/90 text-dark-900'
                )}
              >
                {status.status === 'completed' ? 'Done' : 'Close'}
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
