import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ResearchTopic {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  content: string[];
  image: string;
}

const researchTopics: ResearchTopic[] = [
  {
    id: 'deep-learning',
    label: '深度學習在產業的應用',
    title: '深度學習在產業的應用',
    subtitle: 'Deep Learning Applications in Industry',
    content: [
      '參與科技部數位經濟多年期計畫以「整合深度學習、大數據分析、聊天機器人與客戶關係管理系統進行以客戶為中心之精準行銷」主題',
      '已經協助多種產業導入人工智慧技術，提供行銷策略方案設計與優化客戶服務。',
    ],
    image: 'https://images.unsplash.com/photo-1675557009483-e6cf3867976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGVlcCUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MDg3NDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'finance',
    label: '金融數據研究',
    title: '金融數據研究',
    subtitle: 'Financial Data Research',
    content: [
      '金融數據可以區分為量化的股價資料，以及質化的新聞與各類產業報告',
      '本研究室致力於不同領域問題透過深度學習技術，提出不同的解決方案',
      '目前有科技部產學，與產業合作開發創新的技術',
      '也有大專生科技部計畫 透過各種金融研究方法，分析公司與產業狀況前景',
      '例如:強化式學習建構適性化理財機器人模型。',
    ],
    image: 'https://images.unsplash.com/photo-1745270917331-787c80129680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBtYXJrZXQlMjBkYXRhfGVufDF8fHx8MTc2MDg3NDkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'ecommerce',
    label: 'AI 應用在電子商務產業',
    title: 'AI 應用在電子商務產業',
    subtitle: 'AI Applications in E-Commerce',
    content: [
      '隨著電子商務平台成為顧客消費的主要管道，各公司擁有大量的使用者行為資料',
      '包含網頁端各類瀏覽行為的收集、購買產品的消費紀錄，甚至廣告投放的成效',
      '這些大量且多樣化的消費者資訊，無法用傳統行銷分析手段分析客戶以提出行銷策略',
      '協助產業依照不同行銷需求導入AI技術，目前已有多家廠商合作與成果。',
    ],
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjA4NjU4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'nlp',
    label: '自然語言應用與圖神經網路',
    title: '自然語言應用與圖神經網路',
    subtitle: 'Natural Language Processing & Graph Neural Networks',
    content: [
      '自然語言相關研究透過深度學習開創一個新的視野',
      '目前英文的語意分析與翻譯都已成熟，中文仍有很大的進步空間。',
      '探究最新的自然語言語意模型之外，更積極將最新的語意技術應用在評論分析與商業應用',
      '協助行銷部門改善產品設計或顧客服務。近年來更與社群網路行為分析結合，了解輿情生態與產品銷售狀況。',
      '這一兩年更結合最新圖神經網路技術，在偵測虛假資訊與虛假評論領域，已經有多篇國內外期刊發表。',
    ],
    image: 'https://images.unsplash.com/photo-1581093449818-2655b2467fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2glMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDg3NDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'medical',
    label: '醫療相關專案',
    title: '醫療相關專案',
    subtitle: 'Medical Related Projects',
    content: [
      '主要在自然語言技術或行為分析於相關的醫療專科',
      '目前與長庚醫院老年身心科醫師合作，透過設計聊天機器人，透過關心與提供衛教知識給長者',
      '期望改善長輩身心健康相關研究',
    ],
    image: 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwODA3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTopic, setActiveTopic] = useState<string>(researchTopics[0].id);

  const currentTopic = researchTopics.find((t) => t.id === activeTopic) || researchTopics[0];

  return (
    <section
      id="research"
      ref={ref}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTopic.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={currentTopic.image}
            alt={currentTopic.title}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(2, 6, 23, 0.95) 0%, rgba(2, 6, 23, 0.75) 50%, rgba(2, 6, 23, 0.5) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center">
          {/* Main Content Area */}
          <div className="max-w-3xl space-y-8 lg:space-y-12">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block">
                <span
                  className="text-cyan-400 tracking-widest"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                  }}
                >
                  RESEARCH ACHIEVEMENTS
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTopic.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* English Title */}
                <h2
                  className="text-white"
                  style={{
                    fontSize: 'clamp(42px, 6vw, 64px)',
                    fontWeight: 600,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {currentTopic.title}
                </h2>

                {/* Subtitle */}
                <p
                  className="text-cyan-300"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                  }}
                >
                  {currentTopic.subtitle}
                </p>

                {/* Description Content */}
                <div className="space-y-4 pt-4">
                  {currentTopic.content.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{
                        fontSize: '15px',
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.8,
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="pt-6"
                >
                  <motion.button
                    className="group relative px-8 py-3 rounded-lg overflow-hidden"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      fontSize: '14px',
                      fontWeight: 400,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 text-white transition-colors group-hover:text-cyan-300">
                      查看活動
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-16"
        >
          <div className="flex flex-wrap gap-6 lg:gap-8">
            {researchTopics.map((topic, index) => (
              <motion.button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className="group relative"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {/* Tab Text */}
                <span
                  className={`transition-colors duration-300 ${
                    activeTopic === topic.id
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                  }}
                >
                  {topic.label}
                </span>

                {/* Active Underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={false}
                  animate={{
                    scaleX: activeTopic === topic.id ? 1 : 0,
                    opacity: activeTopic === topic.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />

                {/* Hover Underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white/30"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: activeTopic === topic.id ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Section Label - "我們的研究成果" */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-12 left-1/2 -translate-x-1/2 z-20"
      >
        <h1
          className="text-white text-center"
          style={{
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 300,
            letterSpacing: '0.1em',
          }}
        >
          我們的研究成果
        </h1>
      </motion.div>

      {/* Gradient Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}
