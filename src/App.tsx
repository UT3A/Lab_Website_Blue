import { Navigation } from './components/Navigation';
import { HeroCarousel } from './components/HeroCarousel';
import { PhilosophySection } from './components/PhilosophySection';
import { ResearchSection } from './components/ResearchSection';
import { TeamCarousel } from './components/TeamCarousel';
import { ActivityGallery } from './components/ActivityGallery';
import { JoinSection } from './components/JoinSection';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { GridBackground } from './components/GridBackground';
import { FloatingElements } from './components/FloatingElements';
import { ChatBot } from './components/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 relative overflow-x-hidden">
      <AnimatedBackground />
      <GridBackground />
      <FloatingElements />
      <Navigation />
      
      {/* Hero Carousel - 首頁輪播 */}
      <HeroCarousel />
      
      {/* Core Philosophy - 核心理念培養 */}
      <PhilosophySection />
      
      {/* Research Achievements - 我們的研究成果 */}
      <ResearchSection />
      
      {/* Team Members - 團隊成員 */}
      <TeamCarousel />
      
      {/* Activity Gallery - 活動相簿 */}
      <ActivityGallery />
      
      {/* Join Us - 加入我們 */}
      <JoinSection />
      
      <Footer />
      <ChatBot />
    </div>
  );
}
