import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// 使用 Unsplash 圖片（暫時替代 Figma 資源）
const philosophyImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80';

const philosophyCards = [
  {
    id: 1,
    tag: '溫度',
    tagColor: 'bg-orange-500/15 text-orange-600 border-orange-500/30',
    title: '不只是冰冷的方法',
    subtitle: 'Warmth in Technology',
    description: '我們更專注在人的問題或需求本身的性質，利用資訊技術設計出不只是冰冷的方法，而是更易於解釋、具有溫度、有效的解決方案',
  },
  {
    id: 2,
    tag: '表達',
    tagColor: 'bg-teal-500/15 text-teal-700 border-teal-500/30',
    title: '清楚表達邏輯概念',
    subtitle: 'Clear Communication',
    description: '我們訓練的不只是資訊技術，也注重表達和呈現的能力。每個人都能清楚的表達方法的完整邏輯跟概念',
  },
  {
    id: 3,
    tag: '團隊',
    tagColor: 'bg-cyan-500/15 text-cyan-700 border-cyan-500/30',
    title: '團體作戰而非單打獨鬥',
    subtitle: 'Team Collaboration',
    description: '不需要單打獨鬥，我們是團體作戰，不是各自埋頭苦幹。藉由彼此間大量討論、相互學習進步',
  },
];

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* French Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'rgba(15, 118, 109, 1)',
                  letterSpacing: '0.05em',
                }}
              >
                
              </motion.p>

              {/* Chinese Title */}
              <div className="space-y-2">
                <h2
                  className="text-slate-950"
                  style={{
                    fontSize: 'clamp(24px, 3.5vw, 36px)',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    lineHeight: 1.4,
                  }}
                >
                  在這飛速成長的時代<br />
                  必須持續保有對知識的渴望
                </h2>
                
                {/* English Title with Gradient */}
                <div className="relative inline-block pt-4">
                  <h3
                    className="relative z-10"
                    style={{
                      fontSize: 'clamp(42px, 5.5vw, 64px)',
                      fontWeight: 600,
                      /*background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #0ea5e9 100%)',*/
                      background: 'linear-gradient(135deg, #000000ff 0%, #000000ff 50%, #000000ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1.1,
                    }}
                  >
                    核心理念
                  </h3>
                  
                  
                </div>
              </div>

              {/* Main Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontSize: '22px',
                  fontWeight: 500,
                  color: 'rgba(0, 0, 0, 1)',
                  lineHeight: 1.6,
                }}
              >
                在這裡 你將學到的...
              </motion.p>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4"
              >
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'rgba(0, 0, 0, 1)',
                    lineHeight: 1.8,
                  }}
                >
                  不只是<strong style={{ fontWeight: 500 }}>找出方法</strong>
                </p>
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'rgba(0, 0, 0, 1)',
                    lineHeight: 1.8,
                  }}
                >
                  不只有<strong style={{ fontWeight: 500 }}>資訊技術</strong>
                </p>
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'rgba(0, 0, 0, 1)',
                    lineHeight: 1.8,
                  }}
                >
                  不需要<strong style={{ fontWeight: 500 }}>單打獨鬥</strong>
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Center: Image with 3D Effect */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5,
                  scale: 1.05,
                }}
                transition={{ duration: 0.4 }}
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Main Image Card */}
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    width: 'clamp(280px, 35vw, 380px)',
                    height: 'clamp(380px, 50vw, 520px)',
                    transform: 'rotateZ(-8deg)',
                  }}
                >
                  <ImageWithFallback
                    src={philosophyImage}
                    alt="Philosophy"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(20, 184, 166, 0.1) 100%)',
                    }}
                  />
                  
                  {/* Border Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      border: '2px solid rgba(20, 184, 166, 0.2)',
                    }}
                  />
                </div>

                {/* Shadow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.25), rgba(6, 182, 212, 0.15))',
                    filter: 'blur(40px)',
                    transform: 'translateZ(-50px) scale(0.95)',
                    zIndex: -1,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Philosophy Cards */}
          <div className="lg:col-span-4 space-y-4">
            {philosophyCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50, rotateZ: 5 }}
                animate={isInView ? { opacity: 1, x: 0, rotateZ: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.03, 
                  x: -8,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div
                  className="relative p-6 rounded-2xl backdrop-blur-sm"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(20, 184, 166, 0.2)',
                    boxShadow: '0 8px 32px rgba(20, 184, 166, 0.15)',
                  }}
                >
                  {/* Tag */}
                  <motion.div
                    className="inline-flex items-center gap-2 mb-3"
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className={`px-3 py-1 rounded-full border ${card.tagColor}`}>
                      {card.tag}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h4
                    className="text-slate-800 mb-1"
                    style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h4>

                  {/* Subtitle */}
                  <p
                    className="mb-3"
                    style={{
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'rgba(15, 118, 110, 0.7)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'rgba(51, 65, 85, 0.8)',
                      lineHeight: 1.7,
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at top right, rgba(20, 184, 166, 0.15), transparent)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
