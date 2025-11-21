import { useState } from 'react';
import { motion } from 'motion/react';
import { AnimatedButton, AnimatedIconButton, AnimatedTextButton } from './AnimatedButton';
import { AnimatedCard, RevealCard, StaggeredCards } from './AnimatedCard';
import { LoadingAnimation, SpinnerAnimation, PulseAnimation, ProgressAnimation, SkeletonLoader } from './LoadingAnimation';
import { Modal, SlidePanel, Toast } from './Modal';
import { Carousel } from './Carousel';
import { AnimatedBarChart, AnimatedCounter, AnimatedProgressRing, AnimatedLineChart, StatCard } from './DataVisualization';
import { Play, Pause, Zap, TrendingUp, Users, Award } from 'lucide-react';

export function AnimationShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(65);

  const chartData = [
    { label: 'AI 研究', value: 85, color: 'bg-gradient-to-r from-cyan-400 to-blue-600' },
    { label: '金融科技', value: 72, color: 'bg-gradient-to-r from-blue-500 to-purple-600' },
    { label: '數據科學', value: 68, color: 'bg-gradient-to-r from-purple-500 to-pink-600' },
    { label: '機器學習', value: 90, color: 'bg-gradient-to-r from-green-400 to-emerald-600' },
  ];

  const lineData = [20, 35, 28, 45, 38, 52, 48, 65, 58, 75, 70, 85];

  const carouselItems = [
    <div key="1" className="h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl flex items-center justify-center">
      <h3 className="text-4xl text-white">Slide 1</h3>
    </div>,
    <div key="2" className="h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center">
      <h3 className="text-4xl text-white">Slide 2</h3>
    </div>,
    <div key="3" className="h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl flex items-center justify-center">
      <h3 className="text-4xl text-white">Slide 3</h3>
    </div>,
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2
            className="text-5xl lg:text-7xl tracking-tight"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #e2e8f0 50%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            動畫展示
          </h2>
          <p className="text-xl text-slate-400">
            豐富的動畫效果與互動組件
          </p>
        </motion.div>

        {/* Buttons Section */}
        <div className="space-y-6">
          <h3 className="text-2xl text-white mb-6">按鈕動畫</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <AnimatedButton variant="primary">
                主要按鈕
              </AnimatedButton>
              <AnimatedButton variant="secondary">
                次要按鈕
              </AnimatedButton>
              <AnimatedButton variant="ghost">
                幽靈按鈕
              </AnimatedButton>
            </div>

            <div className="space-y-4">
              <AnimatedButton variant="primary" size="sm">
                小型按鈕
              </AnimatedButton>
              <AnimatedButton variant="primary" size="md">
                中型按鈕
              </AnimatedButton>
              <AnimatedButton variant="primary" size="lg">
                大型按鈕
              </AnimatedButton>
            </div>

            <div className="space-y-4">
              <AnimatedButton variant="primary" disabled>
                禁用按鈕
              </AnimatedButton>
              <AnimatedButton
                variant="primary"
                loading={loading}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 2000);
                }}
              >
                載入按鈕
              </AnimatedButton>
              <div className="flex gap-2">
                <AnimatedIconButton icon={<Play className="w-5 h-5" />} variant="primary" />
                <AnimatedIconButton icon={<Pause className="w-5 h-5" />} />
                <AnimatedIconButton icon={<Zap className="w-5 h-5" />} />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <AnimatedTextButton onClick={() => console.log('clicked')}>
              文字連結按鈕 →
            </AnimatedTextButton>
          </div>
        </div>

        {/* Cards Section */}
        <div className="space-y-6">
          <h3 className="text-2xl text-white mb-6">卡片動畫</h3>
          <StaggeredCards className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCard>
              <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-xl text-white mb-2">懸停效果</h4>
                <p className="text-slate-400">將滑鼠移到卡片上查看動畫</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl text-white mb-2">進場動畫</h4>
                <p className="text-slate-400">滾動觸發的動畫效果</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-xl text-white mb-2">漸變光暈</h4>
                <p className="text-slate-400">懸停時的光暈效果</p>
              </div>
            </AnimatedCard>
          </StaggeredCards>
        </div>

        {/* Loading Animations */}
        <div className="space-y-6">
          <h3 className="text-2xl text-white mb-6">載入動畫</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl flex flex-col items-center justify-center space-y-4">
              <LoadingAnimation />
              <p className="text-sm text-slate-400">跳動點</p>
            </div>

            <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl flex flex-col items-center justify-center space-y-4">
              <SpinnerAnimation />
              <p className="text-sm text-slate-400">旋轉圈</p>
            </div>

            <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl flex flex-col items-center justify-center space-y-4">
              <PulseAnimation />
              <p className="text-sm text-slate-400">脈衝效果</p>
            </div>

            <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl flex flex-col items-center justify-center space-y-4">
              <div className="w-full space-y-4">
                <ProgressAnimation progress={progress} />
                <div className="flex gap-2">
                  <button
                    onClick={() => setProgress(Math.max(0, progress - 10))}
                    className="flex-1 px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 hover:bg-slate-700"
                  >
                    -10%
                  </button>
                  <button
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                    className="flex-1 px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 hover:bg-slate-700"
                  >
                    +10%
                  </button>
                </div>
              </div>
              <p className="text-sm text-slate-400">進度條</p>
            </div>
          </div>

          <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
            <p className="text-sm text-slate-400 mb-4">骨架屏</p>
            <SkeletonLoader />
          </div>
        </div>

        {/* Modal & Panel */}
        <div className="space-y-6">
          <h3 className="text-2xl text-white mb-6">彈窗與面板</h3>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton onClick={() => setModalOpen(true)}>
              開啟 Modal
            </AnimatedButton>
            <AnimatedButton variant="secondary" onClick={() => setPanelOpen(true)}>
              開啟側邊欄
            </AnimatedButton>
            <AnimatedButton variant="ghost" onClick={() => setToastVisible(true)}>
              顯示通知
            </AnimatedButton>
          </div>

          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="動畫彈窗">
            <div className="space-y-4">
              <p className="text-slate-300">
                這是一個帶有彈性動畫效果的 Modal 組件。
                背景具有模糊效果，進場動畫使用彈性緩動函數。
              </p>
              <AnimatedButton onClick={() => setModalOpen(false)}>
                關閉
              </AnimatedButton>
            </div>
          </Modal>

          <SlidePanel isOpen={panelOpen} onClose={() => setPanelOpen(false)}>
            <div className="space-y-6 pt-12">
              <h3 className="text-2xl text-white">側邊面板</h3>
              <p className="text-slate-300">
                這是一個從右側滑入的面板組件，
                適合用於導航菜單或詳細資訊展示。
              </p>
              <AnimatedButton onClick={() => setPanelOpen(false)}>
                關閉面板
              </AnimatedButton>
            </div>
          </SlidePanel>

          <Toast
            isVisible={toastVisible}
            message="操作成功！"
            type="success"
            onClose={() => setToastVisible(false)}
          />
        </div>

        {/* Carousel */}
        <div className="space-y-6">
          <h3 className="text-2xl text-white mb-6">輪播組件</h3>
          <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl overflow-hidden">
            <Carousel items={carouselItems} autoPlay interval={4000} />
          </div>
        </div>

        {/* Data Visualization */}
        <div className="space-y-6">
          <h3 className="text-2xl text-white mb-6">數據視覺化</h3>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              value={1250}
              label="總用戶數"
              change={12.5}
              icon={<Users className="w-6 h-6 text-cyan-400" />}
              delay={0}
            />
            <StatCard
              value={85}
              label="完成率"
              change={5.2}
              icon={<TrendingUp className="w-6 h-6 text-purple-400" />}
              delay={0.1}
            />
            <StatCard
              value={342}
              label="活躍項目"
              change={-2.1}
              icon={<Award className="w-6 h-6 text-green-400" />}
              delay={0.2}
            />
            <StatCard
              value={98}
              label="滿意度"
              change={8.3}
              icon={<Zap className="w-6 h-6 text-orange-400" />}
              delay={0.3}
            />
          </div>

          {/* Bar Chart */}
          <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
            <h4 className="text-xl text-white mb-6">研究領域分布</h4>
            <AnimatedBarChart data={chartData} />
          </div>

          {/* Progress Rings and Line Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
              <h4 className="text-xl text-white mb-8">項目完成度</h4>
              <div className="flex justify-around">
                <div className="text-center space-y-2">
                  <AnimatedProgressRing progress={75} color="#22d3ee" />
                  <p className="text-sm text-slate-400">AI 研究</p>
                </div>
                <div className="text-center space-y-2">
                  <AnimatedProgressRing progress={92} color="#a855f7" />
                  <p className="text-sm text-slate-400">金融科技</p>
                </div>
                <div className="text-center space-y-2">
                  <AnimatedProgressRing progress={68} color="#10b981" />
                  <p className="text-sm text-slate-400">數據科學</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
              <h4 className="text-xl text-white mb-6">成長趨勢</h4>
              <AnimatedLineChart data={lineData} height={200} />
            </div>
          </div>
        </div>

        {/* Counter Demo */}
        <div className="p-12 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl text-center">
          <h3 className="text-4xl text-white mb-4">
            已完成 <AnimatedCounter value={8543} suffix="+" /> 個項目
          </h3>
          <p className="text-xl text-slate-400">
            數字動態增長效果
          </p>
        </div>
      </div>
    </section>
  );
}
