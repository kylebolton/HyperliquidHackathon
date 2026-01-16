import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, AlertTriangle, X, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SlippageSettingsProps {
  slippage: number;
  onSlippageChange: (slippage: number) => void;
}

const PRESET_SLIPPAGES = [0.5, 1.0, 3.0];
const MIN_SLIPPAGE = 0.1;
const MAX_SLIPPAGE = 50;
const HIGH_SLIPPAGE_THRESHOLD = 5;
const LOW_SLIPPAGE_THRESHOLD = 0.5;

export function SlippageSettings({ slippage, onSlippageChange }: SlippageSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customValue, setCustomValue] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Check if current slippage matches a preset
  const isPresetSelected = PRESET_SLIPPAGES.includes(slippage);

  // Initialize custom value if not a preset
  useEffect(() => {
    if (!isPresetSelected) {
      setCustomValue(slippage.toString());
      setIsCustom(true);
    }
  }, [slippage, isPresetSelected]);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        buttonRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePresetSelect = (value: number) => {
    setIsCustom(false);
    setCustomValue('');
    onSlippageChange(value);
  };

  const handleCustomChange = (value: string) => {
    // Allow only valid decimal numbers
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCustomValue(value);
      setIsCustom(true);

      const numValue = parseFloat(value);
      if (!isNaN(numValue) && numValue >= MIN_SLIPPAGE && numValue <= MAX_SLIPPAGE) {
        onSlippageChange(numValue);
      }
    }
  };

  const handleCustomBlur = () => {
    const numValue = parseFloat(customValue);
    if (isNaN(numValue) || numValue < MIN_SLIPPAGE) {
      // Reset to default if invalid
      setCustomValue('');
      setIsCustom(false);
      onSlippageChange(0.5);
    } else if (numValue > MAX_SLIPPAGE) {
      // Cap at max
      setCustomValue(MAX_SLIPPAGE.toString());
      onSlippageChange(MAX_SLIPPAGE);
    }
  };

  // Warning states
  const isHighSlippage = slippage > HIGH_SLIPPAGE_THRESHOLD;
  const isLowSlippage = slippage < LOW_SLIPPAGE_THRESHOLD;

  return (
    <div className="relative">
      {/* Settings Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200',
          'hover:bg-dark-600 active:scale-95',
          isOpen && 'bg-dark-600',
          isHighSlippage && 'text-warning',
        )}
      >
        <Settings className={cn('w-4 h-4', isOpen && 'rotate-90 transition-transform')} />
        <span className="text-sm font-medium">{slippage}%</span>
        {isHighSlippage && <AlertTriangle className="w-3.5 h-3.5" />}
      </button>

      {/* Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute right-0 top-full mt-2 z-50',
              'w-72 p-4',
              'bg-dark-800 border border-dark-400/30 rounded-xl',
              'shadow-xl shadow-black/20'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">Slippage Tolerance</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-dark-600 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-white/50" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-white/50 mb-4">
              Your transaction will revert if the price changes unfavorably by more than this percentage.
            </p>

            {/* Preset Buttons */}
            <div className="flex gap-2 mb-4">
              {PRESET_SLIPPAGES.map((preset) => (
                <button
                  key={preset}
                  onClick={() => handlePresetSelect(preset)}
                  className={cn(
                    'flex-1 py-2.5 rounded-lg text-sm font-medium transition-all',
                    'active:scale-95',
                    slippage === preset && !isCustom
                      ? 'bg-accent text-dark-900'
                      : 'bg-dark-600 text-white/70 hover:bg-dark-500'
                  )}
                >
                  {preset}%
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="space-y-2">
              <label className="text-xs text-white/50">Custom</label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="0.5"
                  value={customValue}
                  onChange={(e) => handleCustomChange(e.target.value)}
                  onBlur={handleCustomBlur}
                  onFocus={() => setIsCustom(true)}
                  className={cn(
                    'w-full px-4 py-3 pr-12',
                    'bg-dark-700 border rounded-xl',
                    'text-white placeholder-white/30',
                    'focus:outline-none transition-colors',
                    isCustom && customValue
                      ? 'border-accent/40 focus:border-accent'
                      : 'border-dark-400/30 focus:border-dark-300/50'
                  )}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50">%</span>
                {isCustom && customValue && (
                  <Check className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                )}
              </div>
            </div>

            {/* Warnings */}
            <AnimatePresence>
              {isHighSlippage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4"
                >
                  <div className="flex items-start gap-2 p-3 bg-warning/10 border border-warning/30 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-medium text-warning">High slippage warning</span>
                      <p className="text-warning/70 mt-0.5">
                        Your transaction may be frontrun and result in an unfavorable swap.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {isLowSlippage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4"
                >
                  <div className="flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-medium text-blue-400">Low slippage</span>
                      <p className="text-blue-400/70 mt-0.5">
                        Your transaction may fail due to small price fluctuations.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Current Setting Display */}
            <div className="mt-4 pt-4 border-t border-dark-400/20">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/40">Current setting</span>
                <span className={cn(
                  'font-medium',
                  isHighSlippage ? 'text-warning' : 'text-accent'
                )}>
                  {slippage}% slippage
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
