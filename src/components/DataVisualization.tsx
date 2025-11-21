import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

interface BarChartProps {
  data: { label: string; value: number; color?: string }[];
  maxValue?: number;
  animated?: boolean;
}

export function AnimatedBarChart({ data, maxValue, animated = true }: BarChartProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const max = maxValue || Math.max(...data.map((d) => d.value));

  return (
    <div ref={ref} className="space-y-4">
      {data.map((item, index) => {
        const percentage = (item.value / max) * 100;

        return (
          <div key={item.label} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-300">{item.label}</span>
              <span className="text-cyan-400">{item.value}</span>
            </div>

            <div className="h-10 bg-slate-800 rounded-xl overflow-hidden">
              <motion.div
                className={`h-full ${
                  item.color || 'bg-gradient-to-r from-cyan-400 to-blue-600'
                } flex items-center justify-end px-4`}
                initial={{ width: 0 }}
                animate={isInView && animated ? { width: `${percentage}%` } : { width: `${percentage}%` }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.span
                  className="text-white text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.5 }}
                >
                  {percentage.toFixed(0)}%
                </motion.span>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function AnimatedCounter({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="inline-block">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function AnimatedProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  color = '#22d3ee',
}: {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1e293b"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : {}}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </svg>

      {/* Percentage Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-2xl text-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <AnimatedCounter value={progress} suffix="%" duration={1.5} />
        </motion.span>
      </div>
    </div>
  );
}

export function AnimatedLineChart({
  data,
  height = 200,
}: {
  data: number[];
  height?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = ((max - value) / range) * (height - 40) + 20;
      return `${x},${y}`;
    })
    .join(' ');

  const pathData = `M ${points.split(' ').join(' L ')}`;

  return (
    <div ref={ref} className="relative">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {/* Grid Lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line
            key={y}
            x1="0"
            y1={(y / 100) * height}
            x2="100"
            y2={(y / 100) * height}
            stroke="#1e293b"
            strokeWidth="0.5"
          />
        ))}

        {/* Area Fill */}
        <motion.path
          d={`${pathData} L 100,${height} L 0,${height} Z`}
          fill="url(#gradient)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : {}}
          transition={{ duration: 1 }}
        />

        {/* Line */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        />

        {/* Data Points */}
        {points.split(' ').map((point, index) => {
          const [x, y] = point.split(',').map(Number);
          return (
            <motion.circle
              key={index}
              cx={x}
              cy={y}
              r="2"
              fill="#22d3ee"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
            />
          );
        })}

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function StatCard({
  value,
  label,
  change,
  icon,
  delay = 0,
}: {
  value: number;
  label: string;
  change?: number;
  icon?: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-6 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-colors"
    >
      <div className="flex items-center justify-between mb-4">
        {icon && (
          <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl">
            {icon}
          </div>
        )}
        {change !== undefined && (
          <span
            className={`text-sm ${
              change >= 0 ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {change >= 0 ? '+' : ''}
            {change}%
          </span>
        )}
      </div>
      <div className="space-y-1">
        <div className="text-3xl text-white">
          <AnimatedCounter value={value} duration={2} />
        </div>
        <div className="text-sm text-slate-400">{label}</div>
      </div>
    </motion.div>
  );
}
