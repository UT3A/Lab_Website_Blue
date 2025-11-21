import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  icon,
  className = '',
}: AnimatedButtonProps) {
  const baseClasses = 'relative overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50',
    secondary: 'bg-transparent border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500',
    ghost: 'bg-transparent text-cyan-400 hover:bg-cyan-500/10',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  const disabledClasses = disabled || loading ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer';

  return (
    <motion.button
      onClick={disabled || loading ? undefined : onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Ripple Effect Background */}
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Shimmer Effect */}
      {variant === 'primary' && !disabled && !loading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-200%', '200%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'linear',
          }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          icon
        )}
        {children}
        {variant === 'primary' && !loading && (
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        )}
      </span>

      {/* Glow Effect on Hover */}
      {variant === 'primary' && !disabled && !loading && (
        <motion.div
          className="absolute inset-0 rounded-inherit blur-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(45deg, #22d3ee, #2563eb)',
          }}
        />
      )}
    </motion.button>
  );
}

// Icon Button Component
export function AnimatedIconButton({
  icon,
  onClick,
  className = '',
  variant = 'default',
}: {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'primary';
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
          : 'bg-slate-800 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500'
      } ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9, rotate: -5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
    </motion.button>
  );
}

// Text Button with Underline Animation
export function AnimatedTextButton({
  children,
  onClick,
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative text-cyan-400 group ${className}`}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <span>{children}</span>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
