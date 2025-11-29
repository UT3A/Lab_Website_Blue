import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '核心理念', href: '#philosophy' },
    { name: '研究成果', href: '#research' },
    { name: '團隊成員', href: '#team' },
    { name: '活動相簿', href: '#activity' },
    { name: '加入我們', href: '#join' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-teal-500/10 shadow-sm'
            : 'bg-white/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-semibold">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 lg:gap-3 group flex-shrink-0"
            >
              <div className="w-20 h-10">
              <img src="img/faim-logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>

              <div className="flex" style={{ fontSize: '25px' }}>
                <span className=" text-slate-800 tracking-tight whitespace-nowrap">
                金融科技與智慧行銷實驗室
                </span>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="px-3 xl:px-4 py-2 font-semibold text-slate-600 hover:text-teal-600 transition-all duration-300 relative group whitespace-nowrap"
                  style={{ fontSize: '20px' }}  // 強制設定字體大小為 30px
                  >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 group-hover:w-3/4 rounded-full" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:block px-4 xl:px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 border border-teal-500/30 rounded-full text-sm text-white transition-all duration-300 backdrop-blur-sm relative overflow-hidden group shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <span className="relative z-10">聯絡我們</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/20 group-hover:to-cyan-400/20 transition-all duration-300" />
              </motion.button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white/95 backdrop-blur-xl border-l border-teal-500/10 z-40 lg:hidden shadow-lg"
      >
        <div className="flex flex-col p-6 gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 border border-teal-500/30 rounded-lg text-white hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-md">
            聯絡我們
          </button>
        </div>
      </motion.div>
    </>
  );
}