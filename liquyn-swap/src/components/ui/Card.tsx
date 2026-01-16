import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'bordered';
  children: React.ReactNode;
}

export function Card({
  variant = 'default',
  className,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-dark-800/80 border border-dark-400/30',
    bordered: 'bg-dark-800/50 border border-accent/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-2xl p-5 sm:p-6',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
