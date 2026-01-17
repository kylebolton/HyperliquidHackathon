import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { chainMetadata } from '../../config/chains';
import type { RouteStep } from '../../types';

interface RouteStepsProps {
  steps: RouteStep[];
  currentStep?: number;
  className?: string;
}

export function RouteSteps({ steps, currentStep, className }: RouteStepsProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {steps.map((step, index) => {
        const isActive = currentStep !== undefined && index === currentStep;
        const isCompleted = currentStep !== undefined && index < currentStep;
        const fromChain = chainMetadata[step.fromChain];
        const toChain = chainMetadata[step.toChain];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              'flex items-center gap-3 p-3 rounded-xl transition-all',
              isActive && 'bg-accent/10 border border-accent/30',
              isCompleted && 'bg-accent/5 border border-accent/20',
              !isActive && !isCompleted && 'bg-dark-700/50'
            )}
          >
            {/* Step Number */}
            <div
              className={cn(
                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold flex-shrink-0',
                isActive && 'bg-accent text-dark-900',
                isCompleted && 'bg-accent/50 text-white',
                !isActive && !isCompleted && 'bg-dark-500 text-white/50'
              )}
            >
              {isCompleted ? '✓' : index + 1}
            </div>

            {/* Step Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={cn(
                    'px-2 py-0.5 text-[10px] font-medium uppercase rounded-full',
                    step.type === 'swap' && 'bg-white/10 text-white/60',
                    step.type === 'bridge' && 'bg-accent/20 text-accent',
                    step.type === 'cross' && 'bg-warning/20 text-warning'
                  )}
                >
                  {step.type}
                </span>
                {step.tool && (
                  <span className="text-[10px] text-white/30">via {step.tool}</span>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                {/* From */}
                <div className="flex items-center gap-1.5 min-w-0">
                  <img
                    src={step.fromToken.logo}
                    alt={step.fromToken.symbol}
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/16';
                    }}
                  />
                  <span className="text-white font-medium truncate">{step.fromToken.symbol}</span>
                  {step.fromChain !== step.toChain && (
                    <span className="text-white/30 text-xs hidden sm:inline">({fromChain?.shortName})</span>
                  )}
                </div>

                <ArrowRight className="w-3 h-3 text-white/30 flex-shrink-0" />

                {/* To */}
                <div className="flex items-center gap-1.5 min-w-0">
                  <img
                    src={step.toToken.logo}
                    alt={step.toToken.symbol}
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/16';
                    }}
                  />
                  <span className="text-white font-medium truncate">{step.toToken.symbol}</span>
                  {step.fromChain !== step.toChain && (
                    <span className="text-white/30 text-xs hidden sm:inline">({toChain?.shortName})</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
