import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-teal-50 to-white border-t border-teal-500/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.06),transparent_50%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-20 h-10">
                <img src="img/faim-logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-800 font-medium">FAIM Lab</span>
                <span className="text-xs text-slate-600">
                  金融科技與AI行銷實驗室
                </span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              探索科技前沿，引領創新未來
              <br />
              培育具有溫度的技術人才
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-800 mb-6">快速連結</h4>
            <ul className="space-y-3">
              {[
                { name: '核心理念', href: '#philosophy' },
                { name: '研究成果', href: '#research' },
                { name: '團隊成員', href: '#team' },
                { name: '活動相簿', href: '#activity' },
                { name: '加入我們', href: '#join' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-600 hover:text-teal-600 text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-teal-500 group-hover:w-4 transition-all duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-800 mb-6">聯絡資訊</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 text-sm group">
                <Mail className="w-4 h-4 mt-0.5 text-slate-500 group-hover:text-teal-600 transition-colors" />
                <a href="mailto:faim@example.edu.tw" className="hover:text-teal-600 transition-colors">
                  lijen.cheng@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-600 text-sm group">
                <Phone className="w-4 h-4 mt-0.5 text-slate-500 group-hover:text-teal-600 transition-colors" />
                <span>(02) 2771-2171 #6720</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600 text-sm group">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-500 group-hover:text-teal-600 transition-colors" />
                <span>臺北市大安區忠孝東路三段1號 宏裕科技大樓B3F B325-1 金融科技與智慧行銷實驗室</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-slate-800 mb-6">追蹤我們</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-cyan-600/20 border border-teal-500/20 hover:border-teal-500/50 rounded-xl flex items-center justify-center text-slate-600 hover:text-teal-600 transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-6 leading-relaxed">
              營業時間：週一至週五
              <br />
              09:00 - 18:00
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-teal-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © 2025 FAIM Laboratory. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">
                隱私政策
              </a>
              <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">
                使用條款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
