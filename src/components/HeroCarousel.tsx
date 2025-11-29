import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CarouselSlide {
  id: number;
  mainTitle: string;
  subTitle: string;
  description: string;
  mainImage: string;
  cardImages: string[];
  tag: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    mainTitle: '深度學習',
    subTitle: 'Deep Learning',
    description: '隨著硬體技術快速的進步，更大規模更複雜的運算也隨之發展。深度學習的應用大量出現在各議題上：行為預測、異常檢測、影像辨識處理、文本理解等…我們的訓練不只是使用線上整理乾淨的資料集，更多的是使用產學合作的真實資料，確保我們的模型經得起"真實世界的考驗"',
    tag: '企業應用',
    mainImage: '/img/hero/深度學習.png',
    cardImages: [
      'https://images.unsplash.com/photo-1732881112419-ca9ce3b852d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Njb3BlJTIwbmFub3RlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNzgxNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc2MDc1ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA2OTU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 2,
    mainTitle: '數位金融',
    subTitle: 'Fintech',
    description: '金融服務無所不在，已經嵌入各種生活場景。除了提供更多充滿便利性的點子外，這樣的大量使用也累積了許多的使用行為資料。這些資料更是值得我們深入研究的素材。',
    tag: '金融科技',
    mainImage: '/img/hero/數位金融.png',
    cardImages: [
      'https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc2MDc1ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA2OTU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2glMjBzY2llbmNlfGVufDF8fHx8MTc2MDcwNDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 3,
    mainTitle: '文字的力量',
    subTitle: 'NLP - Natural Language Processing',
    description: '文字是人類溝通表達的媒介，文字蘊含了豐富的資訊、意思表達、思想、情感。想要讓電腦試圖理解人類？NLP自然語言處理技術就是這一切的基礎。',
    tag: '自然語言處理',
    mainImage: '/img/hero/文字的力量.png',
    cardImages: [
      'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2glMjBzY2llbmNlfGVufDF8fHx8MTc2MDcwNDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1732881112419-ca9ce3b852d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Njb3BlJTIwbmFub3RlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNzgxNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA2OTU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 4,
    mainTitle: '輿情分析',
    subTitle: 'Public Opinion Analysis',
    description: '輿情是指大眾的情緒、觀念、態度等不同元素形成的反映社會共同意見的意見集合體。輿情分析可以更加理解大眾對於特定議題的看法。處理謠言、部分事實、虛假訊息的散佈等，意圖煽動操弄的行為也是重要的研究方向。',
    tag: '社會分析',
    mainImage: '/img/hero/輿情分析.png',
    cardImages: [
      'https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc2MDc1ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2glMjBzY2llbmNlfGVufDF8fHx8MTc2MDcwNDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1732881112419-ca9ce3b852d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Njb3BlJTIwbmFub3RlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNzgxNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentSlide = slides[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative mt-16 lg:mt-24 h-[85vh] min-h-[600px] bg-gradient-to-br from-teal-50 via-cyan-50 to-white overflow-hidden">
      {/* Top Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-24 md:top-28 lg:top-32 left-1/2 -translate-x-1/2 z-30 text-center w-full px-4"
      >
        <p className="text-sm md:text-base font-light text-teal-700/80 tracking-widest">
        </p>
      </motion.div>

      {/* Background Image with Overlay */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={`bg-${currentIndex}`}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={currentSlide.mainImage}
            alt={currentSlide.mainTitle}
            className="w-full h-full object-cover"
          />
          {/* Light Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 40%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0.2) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="space-y-8 z-10"
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span
                  className="inline-block px-6 py-2 rounded-full text-xs tracking-widest"
                  style={{
                    background: 'rgba(20, 184, 166, 0.1)',
                    border: '1px solid rgba(20, 184, 166, 0.3)',
                    color: 'rgba(15, 118, 110, 1)',
                    fontSize: '14px',
                  }}
                >
                  {currentSlide.tag}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-800"
                style={{
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-1px',
                }}
              >
                {currentSlide.mainTitle}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: '24px',
                  fontWeight: 450,
                  color: 'rgba(0, 0, 0, 1)',
                  lineHeight: 1.6,
                }}
              >
                {currentSlide.subTitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  color: 'rgba(0, 0, 0, 1)',
                  lineHeight: 1.8,
                  maxWidth: '560px',
                }}
              >
                {currentSlide.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Overlapping Cards */}
          <div className="relative h-[500px] hidden lg:block">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`cards-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                {currentSlide.cardImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      width: '280px',
                      height: '350px',
                      right: `${index * 120}px`,
                      top: `${index * 50}px`,
                      zIndex: currentSlide.cardImages.length - index,
                      border: '2px solid rgba(20, 184, 166, 0.2)',
                      backdropFilter: 'blur(10px)',
                    }}
                    initial={{ opacity: 0, y: 50, rotate: -10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotate: index * 3 - 3,
                    }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.6,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 0,
                      zIndex: 999,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Card ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Glass Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(20, 184, 166, 0.1) 100%)',
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4 z-20">
        {/* Arrow Buttons */}
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 6px rgba(20, 184, 166, 0.1)',
          }}
          whileHover={{
            background: 'rgba(20, 184, 166, 0.1)',
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5 text-teal-600" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 6px rgba(20, 184, 166, 0.1)',
          }}
          whileHover={{
            background: 'rgba(20, 184, 166, 0.1)',
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5 text-teal-600" />
        </motion.button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 ml-4">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="relative"
              whileHover={{ scale: 1.2 }}
            >
              <div
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background:
                    index === currentIndex
                      ? 'rgba(20, 184, 166, 1)'
                      : 'rgba(20, 184, 166, 0.3)',
                  width: index === currentIndex ? '32px' : '8px',
                }}
              />
            </motion.button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="ml-4 hidden md:flex items-center gap-2">
          <span
            style={{
              fontSize: '14px',
              fontFamily: 'Monaco, Consolas, monospace',
              color: 'rgba(15, 118, 110, 0.8)',
            }}
          >
            {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Right Side: Latest News Badge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 right-6 lg:right-12 z-20 hidden md:block"
      >
        <div
          className="px-8 py-4 rounded-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 4px 6px rgba(20, 184, 166, 0.1)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                color: 'rgba(15, 118, 110, 0.9)',
              }}
            >
              最新消息 News
            </span>
          </div>
          <p
            className="mt-2"
            style={{
              fontSize: '11px',
              color: 'rgba(51, 65, 85, 0.7)',
              maxWidth: '200px',
            }}
          >
            24/12/03 最新實驗室網站已上線
          </p>
        </div>
      </motion.div>

      {/* Decorative Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.5), transparent)',
        }}
      />
    </section>
  );
}