import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-full backdrop-blur-sm group hover:border-cyan-400/40 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300/90 tracking-wide font-medium">
              Financial Technology & AI Marketing Laboratory
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1
              className="text-6xl lg:text-8xl xl:text-9xl tracking-tight leading-tight"
              style={{ 
                background: 'linear-gradient(180deg, #ffffff 0%, #e2e8f0 50%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              在這裡
            </h1>
            <h2
              className="text-5xl lg:text-7xl xl:text-8xl tracking-tight"
              style={{ 
                background: 'linear-gradient(180deg, #f8fafc 0%, #cbd5e1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              你將學到的...
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl text-xl lg:text-2xl text-slate-400 leading-relaxed tracking-wide"
          >
            不只是找出方法
            <br />
            <span className="text-slate-500">
              我們更專注在人的問題或需求本身的性質
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#philosophy"
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full text-white transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                探索更多
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a
              href="#join"
              className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-slate-100 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              加入我們
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 group cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-slate-500 tracking-wider uppercase">Scroll</span>
              <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1 h-2 bg-slate-600 rounded-full"
                />
              </div>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
