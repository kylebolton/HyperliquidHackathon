/**
 * DepositToHyperliquid Component
 * 
 * A reusable component for depositing USDC from HyperEVM to Hyperliquid L1 trading account.
 * 
 * IMPORTANT DISTINCTION:
 * - HyperEVM (Chain 999): The EVM-compatible layer where tokens arrive from bridges
 * - Hyperliquid L1: The actual perps/spot trading platform (NOT directly EVM accessible)
 * 
 * This component handles the SECOND step: HyperEVM -> L1 Trading
 * The first step (External Chain -> HyperEVM) is handled by BridgeWidget via LI.FI
 * 
 * @example
 * ```tsx
 * import { DepositToHyperliquid } from '@/components/deposit/DepositToHyperliquid';
 * 
 * // As a modal
 * <DepositToHyperliquid
 *   amount="100"
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 *   onSuccess={(txHash) => console.log('Success!', txHash)}
 * />
 * 
 * // As an inline component
 * <DepositToHyperliquid amount="100" inline onSuccess={(txHash) => console.log('Success!')} />
 * ```
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAccount } from 'wagmi';
import { 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  Wallet, 
  ArrowRight,
  ExternalLink,
  AlertCircle 
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useHyperliquidDeposit, type DepositStatus } from '../../hooks/useHyperliquidDeposit';

export interface DepositToHyperliquidProps {
  amount: string;
  isOpen?: boolean;
  onClose?: () => void;
  onSuccess?: (txHash: string) => void;
  onError?: (error: string) => void;
  inline?: boolean;
  className?: string;
  autoStart?: boolean;
}

const statusIcons: Record<DepositStatus, typeof Loader2> = {
  idle: Wallet,
  checking: Loader2,
  approving: Loader2,
  depositing: Loader2,
  completed: CheckCircle2,
  failed: XCircle,
};

const statusColors: Record<DepositStatus, string> = {
  idle: 'text-white/50',
  checking: 'text-accent',
  approving: 'text-warning',
  depositing: 'text-accent',
  completed: 'text-accent',
  failed: 'text-error',
};

const statusBgColors: Record<DepositStatus, string> = {
  idle: 'bg-dark-600',
  checking: 'bg-accent/10',
  approving: 'bg-warning/10',
  depositing: 'bg-accent/10',
  completed: 'bg-accent/10',
  failed: 'bg-error/10',
};

export function DepositToHyperliquid({
  amount,
  isOpen = false,
  onClose,
  onSuccess,
  onError,
  inline = false,
  className,
  autoStart = false,
}: DepositToHyperliquidProps) {
  const { isConnected } = useAccount();
  const { status, statusMessage, txHash, error, deposit, reset, isDepositing } = useHyperliquidDeposit();
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (autoStart && isConnected && !hasStarted && status === 'idle') {
      handleDeposit();
    }
  }, [autoStart, isConnected, hasStarted, status]);

  useEffect(() => {
    if (status === 'completed' && txHash) {
      onSuccess?.(txHash);
    } else if (status === 'failed' && error) {
      onError?.(error);
    }
  }, [status, txHash, error, onSuccess, onError]);

  const handleDeposit = async () => {
    if (!isConnected) return;
    setHasStarted(true);
    await deposit(amount);
  };

  const handleClose = () => {
    reset();
    setHasStarted(false);
    onClose?.();
  };

  const Icon = statusIcons[status];
  const shouldAnimate = status === 'checking' || status === 'approving' || status === 'depositing';

  const content = (
    <div className={cn('space-y-5', className)}>
      {/* Header */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-1">Deposit to Hyperliquid</h3>
        <p className="text-sm text-white/50">Deposit {amount} USDC to your trading account</p>
      </div>

      {/* Status */}
      <div className="flex flex-col items-center py-5">
        <div className={cn('w-16 h-16 rounded-full flex items-center justify-center mb-3', statusBgColors[status])}>
          <Icon className={cn('w-8 h-8', statusColors[status], shouldAnimate && 'animate-spin')} />
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={statusMessage}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className={cn('text-sm font-medium', statusColors[status])}
          >
            {statusMessage || 'Ready to deposit'}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Flow Visualization - Shows wallet to trading transition */}
      <div className="flex items-center justify-center gap-3 p-3 bg-dark-700/50 rounded-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-dark-600 flex items-center justify-center">
            <Wallet className="w-4 h-4 text-white/50" />
          </div>
          <span className="text-sm text-white/70">Wallet</span>
        </div>

        <ArrowRight className={cn('w-4 h-4', status === 'depositing' ? 'text-accent animate-pulse' : 'text-white/20')} />

        <div className="flex items-center gap-2">
          <img src="/assets/green.png" alt="Hyperliquid" className="w-8 h-8" />
          <span className="text-sm text-white/70">Trading</span>
        </div>
      </div>

      {/* Tx Hash */}
      {txHash && (
        <div className="flex items-center justify-center gap-2 p-3 bg-accent/5 border border-accent/20 rounded-xl">
          <span className="text-sm text-white/50">Tx:</span>
          <code className="text-sm text-accent font-mono">{txHash.slice(0, 8)}...{txHash.slice(-6)}</code>
          <a
            href={`https://explorer.hyperliquid.xyz/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:bg-accent/10 rounded transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-accent" />
          </a>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-error/5 border border-error/20 rounded-xl">
          <AlertCircle className="w-4 h-4 text-error flex-shrink-0" />
          <span className="text-sm text-error">{error}</span>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-2">
        {status === 'idle' && (
          <Button onClick={handleDeposit} disabled={!isConnected || isDepositing} className="w-full" size="lg">
            {isConnected ? 'Deposit to Hyperliquid' : 'Connect Wallet First'}
          </Button>
        )}

        {(status === 'completed' || status === 'failed') && (
          <div className="flex gap-2">
            {status === 'failed' && (
              <Button onClick={() => { reset(); handleDeposit(); }} variant="primary" className="flex-1">
                Try Again
              </Button>
            )}
            <Button onClick={handleClose} variant="ghost" className="flex-1">
              {status === 'completed' ? 'Done' : 'Close'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  if (inline) return content;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {content}
    </Modal>
  );
}

export type { DepositStatus };
