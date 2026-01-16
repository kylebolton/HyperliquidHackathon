import { motion } from 'motion/react';
import { Clock, Fuel, TrendingDown, AlertCircle, Loader2 } from 'lucide-react';
import { formatAmount, formatDuration, formatUSD } from '../../lib/utils';
import type { Quote } from '../../types';
import { RouteSteps } from './RouteSteps';

interface QuoteCardProps {
  quote: Quote | null;
  isLoading: boolean;
  error?: string | null;
}

export function QuoteCard({ quote, isLoading, error }: QuoteCardProps) {
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800/50 border border-dark-400/30 rounded-2xl p-5"
      >
        <div className="flex items-center justify-center gap-3 py-6">
          <Loader2 className="w-5 h-5 text-accent animate-spin" />
          <span className="text-white/50">Finding best route...</span>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800/50 border border-error/20 rounded-2xl p-5"
      >
        <div className="flex items-center gap-3 text-error">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      </motion.div>
    );
  }

  if (!quote) {
    return null;
  }

  const outputAmount = formatAmount(
    Number(quote.toAmount) / Math.pow(10, quote.toToken.decimals),
    4
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-800/50 border border-dark-400/30 rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="p-5 border-b border-dark-400/20">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-white/50">You will receive</span>
          <div className="flex items-center gap-1 text-xs text-white/40">
            <Clock className="w-3.5 h-3.5" />
            <span>~{formatDuration(quote.estimatedTime)}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <img
            src={quote.toToken.logo}
            alt={quote.toToken.symbol}
            className="w-9 h-9 rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/36';
            }}
          />
          <div>
            <div className="text-xl sm:text-2xl font-semibold text-white">
              {outputAmount} <span className="text-accent">{quote.toToken.symbol}</span>
            </div>
            <div className="text-sm text-white/40">on HyperEVM</div>
          </div>
        </div>
      </div>

      {/* Route Steps */}
      <div className="p-5 border-b border-dark-400/20">
        <h4 className="text-sm text-white/50 mb-3">Route</h4>
        <RouteSteps steps={quote.steps} />
      </div>

      {/* Details */}
      <div className="p-5 space-y-2.5">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-white/50">
            <Fuel className="w-4 h-4" />
            <span>Gas</span>
          </div>
          <span className="text-white">{formatUSD(parseFloat(quote.gasCostUSD))}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-white/50">
            <TrendingDown className="w-4 h-4" />
            <span>Slippage</span>
          </div>
          <span className="text-white">{quote.slippage}%</span>
        </div>
      </div>
    </motion.div>
  );
}
