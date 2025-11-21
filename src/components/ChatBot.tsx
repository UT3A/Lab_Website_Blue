import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bookmark, 
  Moon, 
  Smartphone, 
  ShoppingCart,
  Home,
  Users,
  Newspaper,
  Mail,
  Bot
} from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '您好！我是 FAIM Lab 的 AI 智能助理，有什麼我可以為您服務的嗎？',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // 模擬機器人回覆
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: '感謝您的訊息！我們的團隊會盡快為您提供協助。',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const quickActions = [
    { icon: Bookmark, label: '我的收藏', action: () => console.log('收藏') },
    { icon: Moon, label: '深色模式', action: () => console.log('深色模式') },
    { icon: Smartphone, label: '手機模式', action: () => console.log('手機模式') },
    { icon: ShoppingCart, label: '預購清單', action: () => console.log('預購清單') },
  ];

  const navigationActions = [
    { icon: Home, label: '回到主頁', href: '#home' },
    { icon: Users, label: '研究團隊', href: '#team' },
    { icon: Newspaper, label: '研究成果', href: '#achievements' },
    { icon: Mail, label: '聯絡我們', href: '#join' },
  ];

  return (
    <>
      {/* 觸發按鈕 */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 8px 32px rgba(6, 182, 212, 0.5)',
            '0 8px 48px rgba(6, 182, 212, 0.7)',
            '0 8px 32px rgba(6, 182, 212, 0.5)',
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <MessageSquare className="w-8 h-8" />
      </motion.button>

      {/* 聊天視窗 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 遮罩層 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* 聊天窗口 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 right-8 z-50 w-96 max-w-[calc(100vw-2rem)] h-[640px] max-h-[calc(100vh-4rem)] bg-slate-900 rounded-3xl border border-cyan-500/20 shadow-2xl shadow-black/50 overflow-hidden flex flex-col lg:max-w-md"
            >
              {/* 標題欄 */}
              <div className="relative h-16 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI 智能助理</h3>
                    <p className="text-xs text-white/80">在線服務</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 訊息區域 */}
              <div className="flex-1 overflow-y-auto bg-slate-950 p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-tr-none'
                          : 'bg-slate-800 text-gray-200 rounded-tl-none'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.type === 'bot' && (
                          <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        )}
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* 快捷按鈕區 */}
              <div className="p-4 bg-slate-900/50 border-t border-cyan-500/10">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={action.action}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-gray-300 transition-colors"
                    >
                      <action.icon className="w-4 h-4" />
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {navigationActions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-gray-300 transition-colors"
                    >
                      <action.icon className="w-4 h-4" />
                      <span>{action.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* 輸入欄 */}
              <div className="p-4 bg-slate-900 border-t border-cyan-500/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="輸入訊息..."
                    className="flex-1 px-4 py-2.5 bg-slate-800 border border-cyan-500/30 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full text-white transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
