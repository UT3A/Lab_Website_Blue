import { motion, useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: number;
  animateOnScroll?: boolean;
}

export function AnimatedCard({
  children,
  delay = 0,
  className = '',
  hoverScale = 1.02,
  animateOnScroll = true,
}: AnimatedCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={animateOnScroll ? { opacity: 0, y: 50 } : {}}
      animate={animateOnScroll ? (isInView ? { opacity: 1, y: 0 } : {}) : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: hoverScale,
        y: -8,
      }}
      className={`relative group ${className}`}
    >
      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-blue-600/0 to-purple-500/0 rounded-3xl blur-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      />

      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner Glow */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function FlipCard({
  frontContent,
  backContent,
  className = '',
}: {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
}) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>

        {/* Back Face */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}

export function RevealCard({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionVariants = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredCards({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

// Add missing React import
import React from 'react';
