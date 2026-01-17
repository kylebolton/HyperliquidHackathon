import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

// Spring configurations for different interactions
const springConfig = {
  hover: { type: 'spring' as const, stiffness: 400, damping: 25 },
  tap: { type: 'spring' as const, stiffness: 600, damping: 30 },
};

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-accent text-dark-900 font-semibold',
    secondary: 'bg-transparent border border-accent/30 text-accent font-medium',
    ghost: 'bg-dark-600/50 border border-dark-400/30 text-white/80 font-medium',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm rounded-lg',
    md: 'px-5 py-2.5 text-base rounded-xl',
    lg: 'px-6 py-3.5 text-base rounded-xl',
  };

  // Glow colors for different variants
  const glowColors = {
    primary: 'rgba(74, 222, 128, 0.4)',
    secondary: 'rgba(74, 222, 128, 0.2)',
    ghost: 'rgba(255, 255, 255, 0.1)',
  };

  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      whileHover={!isDisabled ? { 
        scale: 1.02,
        boxShadow: `0 0 30px ${glowColors[variant]}`,
      } : undefined}
      whileTap={!isDisabled ? { 
        scale: 0.97,
      } : undefined}
      transition={springConfig.hover}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'relative inline-flex items-center justify-center gap-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'overflow-hidden',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {/* Animated gradient background for primary variant */}
      {variant === 'primary' && !isDisabled && (
        <motion.div
          className="absolute inset-0 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 200%'],
          }}
        />
      )}
      
      {/* Content */}
      <motion.span 
        className="relative z-10 flex items-center gap-2"
        animate={isLoading ? { opacity: 0.7 } : { opacity: 1 }}
      >
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ 
              opacity: { duration: 0.2 },
              scale: { type: 'spring', stiffness: 500, damping: 25 },
              rotate: { duration: 1, repeat: Infinity, ease: 'linear' },
            }}
          >
            <Loader2 className="w-4 h-4" />
          </motion.div>
        )}
        {children}
      </motion.span>

      {/* Ripple effect on tap */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileTap={{ 
          opacity: [0, 0.3, 0],
          scale: [0.8, 1.2],
        }}
        transition={{ duration: 0.4 }}
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
        }}
      />
    </motion.button>
  );
}
