import { motion } from 'motion/react';

export function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function SpinnerAnimation() {
  return (
    <motion.div
      className="w-12 h-12 border-4 border-slate-700 border-t-cyan-400 rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

export function PulseAnimation() {
  return (
    <motion.div
      className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function ProgressAnimation({ progress = 0 }: { progress?: number }) {
  return (
    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      />
    </div>
  );
}

export function SkeletonLoader() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          className="h-20 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-xl"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      ))}
    </div>
  );
}
