import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Server, Monitor, Cpu, Wifi, Printer, Wind } from 'lucide-react';

const equipmentList = [
  { icon: Server, name: '不斷電雙GPU伺服器' },
  { icon: Cpu, name: '多台高階顯卡主機' },
  { icon: Monitor, name: '多台工作站' },
  { icon: Monitor, name: '多台電競筆電' },
  { icon: Wifi, name: '防火牆' },
  { icon: Monitor, name: '43吋Android TV' },
  { icon: Monitor, name: 'Soundbar' },
  { icon: Printer, name: '印表機' },
  { icon: Server, name: '零食櫃' },
  { icon: Monitor, name: '白板' },
  { icon: Wind, name: '空氣清淨機' },
  { icon: Wind, name: '吸塵器' },
];

export function JoinSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="join"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/30 to-white" />
      
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

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08),transparent_50%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: '14px',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(0, 0, 0, 1)',
              letterSpacing: '0.05em',
            }}
          >
            在這飛速成長的時代
            <br />
            必須持續保有對知識的渴望
          </motion.p>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #000000ff 0%, #000000ff 50%, #000000ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
            }}
          >
            加入我們
          </motion.h2>

          {/* Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-32 mx-auto origin-center"
            style={{
              background: 'linear-gradient(90deg, #000000ff 0%, #000000ff 100%)',
              borderRadius: '2px',
            }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Location & Contact */}
          <div className="space-y-8">
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div
                className="relative p-8 rounded-2xl backdrop-blur-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(20, 184, 166, 0.2)',
                  boxShadow: '0 8px 32px rgba(20, 184, 166, 0.15)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex p-4 mb-6 rounded-xl"
                  style={{
                    background: 'rgba(20, 184, 166, 0.1)',
                    border: '1px solid rgba(20, 184, 166, 0.3)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin className="w-6 h-6 text-teal-600" />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-slate-800 mb-4"
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                  }}
                >
                  實驗室地點
                </h3>

                {/* Address */}
                <div className="space-y-2">
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'rgba(0, 3, 7, 1)',
                      lineHeight: 1.8,
                    }}
                  >
                    📍 臺北市大安區忠孝東路三段1號
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'rgba(0, 0, 0, 1)',
                      lineHeight: 1.8,
                      paddingLeft: '1.5rem',
                    }}
                  >
                    宏裕科技大樓B3F B325-1
                    <br />
                    金融科技與智慧行銷實驗室
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at top left, rgba(20, 184, 166, 0.1), transparent)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div
                className="relative p-8 rounded-2xl backdrop-blur-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(20, 184, 166, 0.2)',
                  boxShadow: '0 8px 32px rgba(20, 184, 166, 0.15)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex p-4 mb-6 rounded-xl"
                  style={{
                    background: 'rgba(20, 184, 166, 0.1)',
                    border: '1px solid rgba(20, 184, 166, 0.3)',
                  }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Phone className="w-6 h-6 text-teal-600" />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-slate-800 mb-4"
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                  }}
                >
                  實驗室分機
                </h3>

                {/* Phone Number */}
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    color: 'rgba(0, 0, 0, 1)',
                    lineHeight: 1.8,
                  }}
                >
                  📞 02-27712171 # 5915
                </p>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at top left, rgba(20, 184, 166, 0.1), transparent)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Equipment & Resources */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group"
          >
            <div
              className="relative p-8 lg:p-10 rounded-2xl backdrop-blur-sm h-full"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                boxShadow: '0 8px 32px rgba(20, 184, 166, 0.15)',
              }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex p-4 mb-6 rounded-xl"
                style={{
                  background: 'rgba(20, 184, 166, 0.1)',
                  border: '1px solid rgba(20, 184, 166, 0.3)',
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Server className="w-6 h-6 text-teal-600" />
              </motion.div>

              {/* Title */}
              <h3
                className="text-slate-800 mb-6"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                }}
              >
                LAB設備與資源
              </h3>

              {/* Equipment Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {equipmentList.map((equipment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{
                      background: 'rgba(20, 184, 166, 0.05)',
                      border: '1px solid rgba(20, 184, 166, 0.15)',
                    }}
                  >
                    <equipment.icon className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        color: 'rgba(0, 0, 0, 1)',
                      }}
                    >
                      {equipment.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Footer Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="pt-6 border-t border-white/10"
              >
                <p
                  className="text-center"
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgba(0, 0, 0, 0.8)',
                    lineHeight: 1.8,
                  }}
                >
                  期待在未來能看到更多的學弟妹一起加入FAIM
                  <span className="inline-block ml-1" style={{ fontSize: '16px' }}>
                    (｡･ω･｡)
                  </span>
                </p>
              </motion.div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(20, 184, 166, 0.1), transparent)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-4">
            {/* Decorative Dots */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-2 h-2 rounded-full bg-teal-500"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
    </section>
  );
}
