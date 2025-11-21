import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeamMember {
  id: number;
  name: string;
  nameEn: string;
  title: string;
  role: string;
  image: string;
  email?: string;
  expertise: string[];
  description: string;
}

// 教授資料
const professor: TeamMember = {
  id: 0,
  name: '王教授',
  nameEn: 'Prof. Wang',
  title: '實驗室主持人',
  role: 'Principal Investigator',
  image: 'https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3ODI3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  email: 'professor@faim.edu.tw',
  expertise: ['奈米材料', '量子計算', '永續能源'],
  description: '致力於前沿材料科學研究，專注於奈米技術與能源材料的創新應用，帶領團隊探索未來科技的無限可能。',
};

// 團隊成員資料
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '陳博士',
    nameEn: 'Dr. Chen',
    title: '博士後研究員',
    role: 'Postdoctoral Researcher',
    image: 'https://images.unsplash.com/photo-1644335364661-e83f9eca34f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVyJTIwbGFib3JhdG9yeSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc4MjcxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'chen@faim.edu.tw',
    expertise: ['材料合成', '表面科學'],
    description: '專注於新型奈米材料的合成與表徵',
  },
  {
    id: 2,
    name: '李研究員',
    nameEn: 'Lee',
    title: '博士生',
    role: 'PhD Student',
    image: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHNjaWVudGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc4MjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'lee@faim.edu.tw',
    expertise: ['光電材料', '量子點'],
    description: '研究半導體量子點的光學性質',
  },
  {
    id: 3,
    name: '張同學',
    nameEn: 'Chang',
    title: '碩士生',
    role: 'Master Student',
    image: 'https://images.unsplash.com/photo-1758685848368-7ff986985e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcmVzZWFyY2hlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc4MjcxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    expertise: ['能源材料', '電池技術'],
    description: '專注於鋰電池材料研究',
  },
  {
    id: 4,
    name: '林同學',
    nameEn: 'Lin',
    title: '碩士生',
    role: 'Master Student',
    image: 'https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNjaWVudGlzdCUyMHRlYW18ZW58MXx8fHwxNzYwNzgyNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    expertise: ['催化材料', '綠色化學'],
    description: '開發環保型催化劑材料',
  },
  {
    id: 5,
    name: '黃同學',
    nameEn: 'Huang',
    title: '碩士生',
    role: 'Master Student',
    image: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0ZSUyMHN0dWRlbnQlMjBzY2llbmNlfGVufDF8fHx8MTc2MDc4MjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    expertise: ['生醫材料', '奈米醫學'],
    description: '研究藥物傳輸奈米載體',
  },
  {
    id: 6,
    name: '吳同學',
    nameEn: 'Wu',
    title: '碩士生',
    role: 'Master Student',
    image: 'https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3ODI3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    expertise: ['感測材料', 'IoT 應用'],
    description: '開發智慧感測器材料',
  },
];

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // 同時顯示的卡片數量

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  }, []);

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // 響應式調整可見卡片數量
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 獲取可見的成員卡片
  const getVisibleMembers = () => {
    const members = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      members.push(teamMembers[index]);
    }
    return members;
  };

  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-white via-teal-50/20 to-white overflow-hidden">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text Content */}
          <div className="space-y-8 lg:sticky lg:top-32">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                <span
                  className="text-cyan-400 tracking-widest"
                  style={{ fontSize: '11px', letterSpacing: '0.2em' }}
                >
                  OUR TEAM
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2
                className="text-white"
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 200,
                  lineHeight: 1.2,
                  letterSpacing: '-1px',
                }}
              >
                團隊成員
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: 1.8,
                }}
              >
                我們是一群充滿熱情的研究者，致力於推動材料科學的前沿發展。
                在這裡，跨域合作與創新思維是我們的核心價值。
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: '1', label: '教授' },
                { number: '2', label: '博士生' },
                { number: '6+', label: '碩士生' },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div
                    style={{
                      fontSize: '42px',
                      fontWeight: 200,
                      color: '#ffffff',
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255, 255, 255, 0.4)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 pt-8"
            >
              <motion.button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  borderColor: 'rgba(14, 165, 233, 0.5)',
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  borderColor: 'rgba(14, 165, 233, 0.5)',
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>

              <div className="ml-4 flex items-center gap-2">
                {teamMembers.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: index === currentIndex ? '24px' : '6px',
                        height: '6px',
                        background:
                          index === currentIndex
                            ? 'rgba(14, 165, 233, 1)'
                            : 'rgba(255, 255, 255, 0.2)',
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Team Cards */}
          <div className="relative">
            {/* Professor Card - Top */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.05))',
                  border: '1px solid rgba(14, 165, 233, 0.2)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="p-8 flex flex-col md:flex-row gap-6 items-center">
                  {/* Professor Image */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="w-32 h-32 rounded-2xl overflow-hidden"
                      style={{
                        border: '3px solid rgba(14, 165, 233, 0.5)',
                        boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)',
                      }}
                    >
                      <ImageWithFallback
                        src={professor.image}
                        alt={professor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2), transparent)',
                        filter: 'blur(20px)',
                        zIndex: -1,
                      }}
                    />
                  </motion.div>

                  {/* Professor Info */}
                  <div className="flex-1 space-y-3 text-center md:text-left">
                    <div>
                      <h3
                        style={{
                          fontSize: '28px',
                          fontWeight: 300,
                          color: '#ffffff',
                          marginBottom: '4px',
                        }}
                      >
                        {professor.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'rgba(14, 165, 233, 0.8)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {professor.role}
                      </p>
                    </div>

                    <p
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        lineHeight: 1.7,
                      }}
                    >
                      {professor.description}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {professor.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            background: 'rgba(14, 165, 233, 0.15)',
                            color: 'rgba(125, 211, 252, 1)',
                            border: '1px solid rgba(14, 165, 233, 0.3)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Contact */}
                    {professor.email && (
                      <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
                        <a
                          href={`mailto:${professor.email}`}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          style={{ fontSize: '12px' }}
                        >
                          <Mail className="w-4 h-4" />
                          聯絡信箱
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Members Cards - Sliding */}
            <div className="relative h-[400px] md:h-[450px]">
              <AnimatePresence mode="popLayout">
                {getVisibleMembers().map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="absolute"
                    style={{
                      left: `${index * (100 / visibleCards)}%`,
                      width: `${95 / visibleCards}%`,
                      zIndex: visibleCards - index,
                    }}
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                      },
                    }}
                    exit={{ opacity: 0, x: -100, scale: 0.9 }}
                    whileHover={{
                      scale: 1.05,
                      zIndex: 999,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div
                      className="rounded-xl overflow-hidden h-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {/* Member Image */}
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(180deg, transparent 0%, rgba(2, 6, 23, 0.9) 100%)',
                          }}
                        />
                      </div>

                      {/* Member Info */}
                      <div className="p-6 space-y-3">
                        <div>
                          <h4
                            style={{
                              fontSize: '20px',
                              fontWeight: 400,
                              color: '#ffffff',
                            }}
                          >
                            {member.name}
                          </h4>
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'rgba(255, 255, 255, 0.5)',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {member.role}
                          </p>
                        </div>

                        <p
                          style={{
                            fontSize: '12px',
                            color: 'rgba(255, 255, 255, 0.6)',
                            lineHeight: 1.6,
                          }}
                        >
                          {member.description}
                        </p>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 rounded text-xs"
                              style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontSize: '10px',
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Contact Icon */}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors pt-2"
                            style={{ fontSize: '11px' }}
                          >
                            <Mail className="w-3 h-3" />
                            聯絡
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
}
