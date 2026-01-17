import { motion, AnimatePresence } from 'motion/react';
import { Loader2, CheckCircle2, XCircle, ExternalLink, Clock, Wallet } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { ExecutionStatus } from '../../types';

interface ExecutionProgressProps {
  status: ExecutionStatus;
  onClose?: () => void;
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
    message: 'Preparing...',
    animate: true,
  },
  signing: {
    icon: Wallet,
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    message: 'Sign in wallet',
  },
  processing: {
    icon: Loader2,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    message: 'Processing...',
    animate: true,
  },
  completed: {
    icon: CheckCircle2,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    message: 'Success!',
  },
  failed: {
    icon: XCircle,
    color: 'text-error',
    bgColor: 'bg-error/10',
    message: 'Failed',
  },
};

export function ExecutionProgress({ status, onClose }: ExecutionProgressProps) {
  const config = statusConfig[status.status];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {status.status !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="bg-dark-800/50 border border-dark-400/30 rounded-2xl p-5"
        >
          {/* Status */}
          <div className="flex flex-col items-center text-center mb-5">
            <div className={cn('w-14 h-14 rounded-full flex items-center justify-center mb-3', config.bgColor)}>
              <Icon className={cn('w-7 h-7', config.color, config.animate && 'animate-spin')} />
            </div>
            
            <p className={cn('font-medium', config.color)}>{config.message}</p>
            
            {status.error && (
              <p className="text-sm text-error/80 mt-1 max-w-xs">{status.error}</p>
            )}
          </div>

          {/* Progress */}
          {status.totalSteps > 0 && (
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                <span>Progress</span>
                <span>{status.currentStep} / {status.totalSteps}</span>
              </div>
              
              <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(status.currentStep / status.totalSteps) * 100}%` }}
                  className={cn('h-full rounded-full', status.status === 'completed' ? 'bg-accent' : 'bg-accent/70')}
                />
              </div>
            </div>
          )}

          {/* Transaction Hash */}
          {status.txHash && (
            <div className="flex items-center justify-center gap-2 p-3 bg-dark-700 rounded-xl text-sm">
              <span className="text-white/40">Tx:</span>
              <code className="text-accent font-mono text-xs">
                {status.txHash.slice(0, 8)}...{status.txHash.slice(-6)}
              </code>
              <a
                href={`https://explorer.hyperliquid.xyz/tx/${status.txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-dark-600 rounded transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-white/40" />
              </a>
            </div>
          )}

          {/* Actions */}
          {(status.status === 'completed' || status.status === 'failed') && onClose && (
            <button
              onClick={onClose}
              className="w-full mt-4 py-2.5 bg-dark-600 hover:bg-dark-500 text-white font-medium rounded-xl transition-colors"
            >
              {status.status === 'completed' ? 'Done' : 'Try Again'}
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
