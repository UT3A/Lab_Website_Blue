import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Star, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Activity {
  id: number;
  title: string;
  participants: number;
  rating: number;
  duration: string;
  image: string;
  description: string;
}

const activities: Activity[] = [
  {
    id: 1,
    title: '期末聚餐',
    participants: 8,
    rating: 4.8,
    duration: '2023/1/17',
    image: '/img/活動照片/act1.png',
    description: ' ',
  },
  {
    id: 2,
    title: '象山遊',
    participants: 5,
    rating: 5.0,
    duration: '2022/12/22',
    image: '/img/活動照片/act2.png',
    description: ' ',
  },
  {
    id: 3,
    title: '慶生趴',
    participants: 10,
    duration: '2022/10/14',
    image: '/img/活動照片/act3.png',
    description: ' ',
  },
  {
    id: 4,
    title: '照片放這邊', /*學長姐!照片放這邊再麻煩了!! */
    participants: 58,/*參加人數 */
    duration: '2025/12/25',/*日期 */
    image: 'https://images.unsplash.com/photo-1758270705290-62b6294dd044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHN0dWR5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYwODc4MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: ' ',
  },
];

export function ActivityGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="activity"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background - Simple Light Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 via-white to-cyan-50/30" />
      
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.05),transparent_50%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Top Line + Chinese Title */}
          <div className="flex items-center gap-6 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px w-16 origin-left bg-white/20"
            />
            <h2
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: 300,
                color: 'rgba(0, 0, 0, 1)',
                letterSpacing: '0.15em',
              }}
            >
              
            </h2>
          </div>

          {/* Large Title: Activity 活動 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-baseline gap-6 flex-wrap"
          >
            <h3
              style={{
                fontSize: 'clamp(48px, 8vw, 96px)',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #000000ff 0%, #000000ff 50%, #000000ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              Activity
            </h3>
            <span
              style={{
                fontSize: 'clamp(36px, 6vw, 72px)',
                fontWeight: 800,
                color: 'rgba(0, 0, 0, 1)',
                lineHeight: 1,
              }}
            >
              活動
            </span>
          </motion.div>
        </motion.div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  {/* Stats Row */}
                  <div className="flex items-center gap-3 text-xs">
                    {/* Participants */}
                    <div className="flex items-center gap-1.5">
                      <div
                        className="p-1.5 rounded-md"
                        style={{
                          background: 'rgba(0, 120, 111, 0.15)',
                          border: '1px solid rgba(0, 120, 111, 0.25)',
                        }}
                      >
                        <Users className="w-3 h-3 " />
                      </div>
                      <span style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px' }}>
                        {activity.participants}已參加
                      </span>
                    </div>

                    

                    {/* Duration */}
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      <span style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px' }}>
                        {activity.duration}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4
                    style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      lineHeight: 1.4,
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    {activity.title}
                  </h4>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: 300,
                      color: 'rgba(0, 0, 0, 0.46)',
                      lineHeight: 1.6,
                    }}
                  >
                    {activity.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.15), transparent 70%)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 h-px origin-center"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.2), transparent)',
          }}
        />
      </div>
    </section>
  );
}
