import { motion } from 'motion/react';

export function FloatingElements() {
  const elements = [
    { size: 300, duration: 20, delay: 0, x: '10%', y: '20%' },
    { size: 200, duration: 15, delay: 2, x: '80%', y: '60%' },
    { size: 250, duration: 18, delay: 4, x: '60%', y: '10%' },
    { size: 180, duration: 22, delay: 1, x: '30%', y: '70%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
            background: `radial-gradient(circle, rgba(20, 184, 166, 0.12), transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
