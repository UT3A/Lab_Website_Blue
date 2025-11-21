import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Award, Lightbulb, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  {
    icon: Users,
    number: '30+',
    label: '研究成員',
    description: '專業團隊',
    gradient: 'from-cyan-500/10 to-blue-600/10',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Award,
    number: '50+',
    label: '研究論文',
    description: '學術成果',
    gradient: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Lightbulb,
    number: '15+',
    label: '產學計畫',
    description: '實務應用',
    gradient: 'from-orange-500/10 to-amber-500/10',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-400',
  },
];

const teamMembers = [
  {
    name: '王教授',
    role: '實驗室主持人',
    expertise: 'AI 與金融科技',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    social: {
      github: '#',
      linkedin: '#',
      email: 'professor@faim.edu.tw',
    },
  },
  {
    name: '李博士',
    role: '資深研究員',
    expertise: '機器學習',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    social: {
      github: '#',
      linkedin: '#',
      email: 'dr.li@faim.edu.tw',
    },
  },
  {
    name: '陳博士',
    role: '資深研究員',
    expertise: '數據科學',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
    social: {
      github: '#',
      linkedin: '#',
      email: 'dr.chen@faim.edu.tw',
    },
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_70%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <div className="px-5 py-2.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/20 rounded-full backdrop-blur-sm">
              <span className="text-sm text-indigo-300/90 tracking-wide">Our Team</span>
            </div>
          </motion.div>

          <h2
            className="text-4xl lg:text-6xl xl:text-7xl tracking-tight"
            style={{ 
              background: 'linear-gradient(180deg, #ffffff 0%, #e2e8f0 50%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            團隊成員
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            匯聚頂尖人才，共創卓越成果
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${stat.gradient} border ${stat.border} backdrop-blur-sm text-center overflow-hidden`}
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.gradient} border ${stat.border}`}>
                      <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl text-white tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.description}</div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-tl-full blur-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl text-white">{member.name}</h3>
                    <p className="text-sm text-cyan-400">{member.role}</p>
                    <p className="text-sm text-slate-400">{member.expertise}</p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href={member.social.github}
                      className="w-9 h-9 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-9 h-9 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-700 rounded-3xl pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Team Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="relative h-96 rounded-3xl overflow-hidden border border-white/5">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjA2MTQ3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-3xl">
                <h3 className="text-3xl lg:text-4xl text-white mb-4 tracking-tight">
                  多元背景，共同目標
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  我們的團隊成員來自不同領域，包括資訊工程、商業管理、數據科學等，共同致力於金融科技與 AI 的創新研究。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
