import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Mail, X } from 'lucide-react';
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
  name: '鄭麗珍 教授',
  nameEn: 'Prof. Cheng',
  title: '實驗室主持人',
  role: 'Principal Investigator',
  image: '/img/teacher.jpg',
  email: 'lijen.cheng@gmail.com',
  expertise: ['機器學習與數據分析', '數位金融', '智慧行銷', '社群運算', '企業智慧'],
  description: '專注於人工智慧技術應用於財務或是行銷與管理領域,成立目的訓練學生成為資料科學家。',
};

// 團隊成員資料
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '吳姿穎',
    nameEn: 'wu',
    title: '碩一生',
    role: '碩一生',
    image: '/img/114/114AB8003_吳姿穎.jpg', // 修改路徑
    email: 't114ab8003@ntut.org.tw',
    expertise: ['資料庫', '財務分析'],
    description:
      '我畢業於北科大資訊與財金管理系，因實習接觸資料庫而培養了資料處理能力。平時熱衷於研究股票、關注市場趨勢，也喜歡透過旅遊拓展視野。期望在研究所期間精進資料分析並結合財務應用，持續培養跨域整合能力。',
  },
  {
    id: 2,
    name: '林千惠',
    nameEn: 'Lin',
    title: '碩一生',
    role: '碩一生',
    image: '/img/114/114AB8041_林千惠.jpg', // 修改路徑
    email: 't114ab8041@ntut.org.tw',
    expertise: ['前端(Vue.js)', '後端(Spring Boot)'],
    description:
      '我畢業於北科資財，高中時是網頁選手，大學在精誠實習，對於系統開發比較了解。喜歡出國旅遊、追星、投資，人生目標是財富自由，歡迎跟我討論投資相關議題。',
  },
  {
    id: 3,
    name: '李泓泯',
    nameEn: 'LEE',
    title: '碩一生',
    role: '碩一生',
    image: '/img/114/114AB8042_李泓泯.png', // 修改路徑
    email: 't114ab8042@ntut.org.tw',
    expertise: [
      'Python',
      'Java',
      'React',
      'Vue.js',
      'Spring Boot',
      'Django',
      'Flask',
      'CNN',
      'IoT',
      'Linux 系統',
    ],
    description:
      '我畢業於北商大資管系，大家都叫我「李董」（這個綽號是高中時隨便取的）。\n我的興趣是打羽球、打遊戲，還有「打程式」——程式就是我的武器。從高中當選手就一路寫到現在，我都用它來做各種有趣甚至有點奇怪的事。\n有時候做事的時候，我會偷偷在「卷」，你永遠想不到我下一步會出什麼招。\n我現在最大的願望，就是希望能把英文學好。',
  },
  {
    id: 4,
    name: '林承玄',
    nameEn: 'Lin',
    title: '碩一生',
    role: '碩一生',
    image: '/img/114/114ab8048_林承玄.jpg', // 修改路徑
    email: 't114ab8048@ntut.org.tw',
    expertise: ['程式設計'],
    description:
      '我畢業於聯合大學資管系。我對人工智慧、資料分析以及人機互動相關的應用很有興趣，特別喜歡嘗試新技術與應用。課餘時間喜歡打遊戲、看小說。',
  },
  {
    id: 5,
    name: '葉千熏',
    nameEn: 'yeh',
    title: '碩一生',
    role: '碩一生',
    image: '/img/114/114AB8050_葉千熏.jpg', // 修改路徑
    email: 't114ab8050@ntut.org.tw',
    expertise: ['前端設計', '前端工程'],
    description:
      '我的名字念很快發音會很像煙燻，所以可以叫我煙燻或燻雞。對AI領域很有興趣，曾在國家實驗研究院科政中心做資料處理與分析。興趣是唱歌、運動(但不喜歡跑步)、去海邊看夕陽、旅遊、看有關醫學的懸疑小說。',
  },
  {
    id: 6,
    name: '呂芯穎',
    nameEn: 'Uta',
    title: '碩一生',
    role: '碩一生',
    image: '/img/114/114EP8002_呂芯穎.jpg', // 修改路徑
    email: 't114EP8002@ntut.org.tw',
    expertise: ['前端設計', 'Python', '系統分析'],
    description:
      '我畢業於中原大學資管系，對大數據和人工智慧有興趣，也有做過相關專題。\n大學時比較擅長系統分析，平常的興趣是攝影、運動、拼樂高、看貓咪吃飯。\n如果找不到人去寵物展可以找我一起去！！',
  },
  {
    id: 7,
    name: '賴泓瑋',
    nameEn: 'Lai',
    title: '碩一生',
    role: '碩一生',
    image: '/img/114/114EP8012_賴泓瑋.jpg', // 修改路徑
    email: 't114EP8012@ntut.org.tw',
    expertise: ['Python', '機器學習', '資料庫'],
    description:
      '我畢業於中科大商經系，對人工智慧與數據分析感興趣。\n大學也做過相關領域之專題，平常的興趣是聽音樂、追劇，烹飪、烘培。是個想聊天但不敢先開口的I人。',
  },
  {
    id: 8,
    name: '鄭淮源',
    nameEn: 'cheng',
    title: '碩一生',
    role: '碩一生',
    image: '/img/114/114EP8023_鄭淮源.JPG', // 修改路徑
    email: 't114EP8023@ntut.org.tw',
    expertise: ['C++程式設計', '資料結構', '英文'],
    description:
      '我畢業於中正大學資工系, 雖然是資工系不過因為考研的關係其實coding並不強，大學的專題是做關於RNN的油畫模型輔助工具。平常的興趣是健身、看英文小說跟外國人文化交流。投資小白，最近也參加了北科的投資理財社哈哈哈。',
  },
  {
    id: 9,
    name: '黃聖瑋',
    nameEn: 'huang',
    title: '碩一生',
    role: '碩一生',
    image: '/img/114/114EP8024_黃聖瑋.jpg', // 修改路徑
    email: 't114ep8024@ntut.org.tw',
    expertise: ['C++', 'Java', 'Android'],
    description:
      '我畢業於聯合大學資訊管理學系，對深度學習的應用有興趣，大學專題是做系統開發和人工智慧相關。興趣是打電動、彈吉他、鋼琴，是個活網仔，很愛講屁話，什麼都可以聊，最近想學習投資和coding，目標是趕快財富自由。',
  },
  {
    id: 10,
    name: '大石鍊',
    nameEn: 'Uta',
    title: '碩二生',
    role: '碩二生',
    image: '/img/113/大石鍊.JPG', // 修改路徑
    email: 't113ab8018@ntut.org.tw',
    expertise: ['資料庫', 'RPA'],
    description:
      '大家好,我是大石。畢業於大同大學資訊經營系。大學專題是協助會計事務所流程自動化。希望在研究所期間學習機器學習及資訊在金融中的應用，處理各類問題。我的興趣是踢足球﹑看日劇。',
  },
  {
    id: 11,
    name: '陽彩柔',
    nameEn: 'Uta',
    title: '碩二生',
    role: '碩二生',
    image: '/img/113/113AB8005陽彩柔.JPG', // 修改路徑
    email: 't113ab8005@ntut.org.tw',
    expertise: ['資料處理', 'C/C++'],
    description:
      '嗨～我是陽彩柔，畢業於中原大學資工系，在研究所期間想了解資訊技術與財金領域如何碰撞產生出更多創新的發展，並且想學習透過數據分析、機器學習等技術協助與解決不同領域的問題。我的興趣是運動、聽音樂、看劇。',
  },
  {
    id: 12,
    name: '吳育碩',
    nameEn: 'Wu',
    title: '碩二生',
    role: '碩二生',
    image: '/img/113/113AB8007吳育碩.JPG', // 修改路徑
    email: 't113ab8007@ntut.org.tw',
    expertise: ['前後端'],
    description:
      '大家好，我是吳育碩，畢業於國立聯合大學資訊管理學系。在大學期間透過專題認識到了大型語言模型的魅力，因而希望在研究所期間可以更深入瞭解機器學習的領域。\n平常喜歡玩電腦，閑暇時也喜歡打羽球。貓咪叫闆闆。',
  },
  {
    id: 13,
    name: '詹舒融',
    nameEn: 'Wu',
    title: '碩二生',
    role: '碩二生',
    image: '/img/113/113AB8015.JPG', // 修改路徑
    email: 't113ab8015@ntut.org.tw',
    expertise: ['資料庫'],
    description:
      '哈嘍，我是詹舒融，畢業於國立雲林科技大學資訊管理系，在大學期間做的專題是跟行程編輯有關，希望在研究所的期間能學習到跟機器學習的領域，增進更多相關知識。\n平時空閒都待在家玩電腦，看劇。',
  },
  {
    id: 14,
    name: '邱康文',
    nameEn: 'Wu',
    title: '碩二生',
    role: '碩二生',
    image: '/img/113/113AB8046.JPG', // 修改路徑
    email: 't113ab8046@ntut.org.tw',
    expertise: ['python', 'SQL'],
    description:
      '哈囉~我是邱康文，畢業於臺北科技大學資訊與財金管理系。大學專題是詐騙防護機器人。希望可以在研究所研究機器學習在不同領域的應用，我的興趣是看小說，追劇，打電動。',
  },
  {
    id: 15,
    name: '許怡芳',
    nameEn: 'Wu',
    title: '碩二生',
    role: '碩二生',
    image: '/img/113/許怡芳.jpg', // 修改路徑
    email: 't113ab8050@ntut.org.tw',
    expertise: ['前端開發', '網頁設計', '數據分析'],
    description:
      'HiHi，我是許怡芳，畢業於北科大資財系。\n曾擔任前端工程師，參與產品規劃與系統開發。\n在實務中接觸到資料分析的重要性，進而對 AI 產生興趣。\n現在回到學校，希望結合過去經驗，深入學習機器學習與資料科學，也期待與大家交流，一起在這個領域持續成長！',
  },
  {
    id: 16,
    name: '紀信毅',
    nameEn: 'Wu',
    title: '碩二生',
    role: '碩二生',
    image: '/img/113/t113AB8049.jpg', // 修改路徑
    email: 't113AB8049@ntut.org.tw',
    expertise: ['爬蟲', 'DL', 'LLM'],
    description:
      '大家好，我是紀信毅，畢業於國立台北科技大學資財系，在大學期間做的專題是網頁跟機器學習，希望在研究所期間能學習到更多AI領域的知識。',
  },
];

// ────────────── Modal ──────────────
interface MemberDetailModalProps {
  member: TeamMember;
  onClose: () => void;
}

const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ member, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: -50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
        style={{
          minHeight: '400px',
          width: '1000px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          backgroundColor: 'white',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors p-1"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* 左側：照片＋基本資訊 */}
          <div className="w-full md:w-1/3 p-6 flex flex-col items-center bg-white border-r border-slate-100/50">
            <div
              className="rounded-lg overflow-hidden mb-4"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '1 / 1',
                maxHeight: '384px',
                maxWidth: '384px',
                margin: '0 auto 1rem',
              }}
            >
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3
              className="font-semibold mt-2"
              style={{ color: '#111827', fontSize: '30px' }}
            >
              {member.name}
            </h3>

            <p className="text-base mb-4" style={{ color: '#6B7280' }}>
              {member.title || member.role}
            </p>

            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {member.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: '#E0F7FA',
                    color: '#00798B',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 右側：詳細介紹＋聯絡方式 */}
          <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <h4 className="text-xl font-medium text-slate-800 pb-2 border-b border-slate-200">
                研究與簡介
              </h4>

              <p
                className="text-slate-700 text-base leading-relaxed"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {member.description}
              </p>
            </div>

            {member.email && (
              <div className="pt-6 border-t border-slate-200 mt-6">
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <span className="inline-block mr-2">MAIL : {member.email}</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ────────────── Carousel ──────────────
export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  }, []);

  useEffect(() => {
    if (selectedMember) return; // 開啟 Modal 時暫停輪播
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, selectedMember]);

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

  const getVisibleMembers = () => {
    const members: TeamMember[] = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      members.push(teamMembers[index]);
    }
    return members;
  };

  const handleCardClick = (member: TeamMember) => {
    if (member.description && member.description.length > 15) {
      setSelectedMember(member);
    }
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section
      id="team"
      className="relative py-24 bg-gradient-to-b from-white via-teal-50/20 to-white overflow-hidden"
    >
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="tracking-widest"
                  style={{ fontSize: '11px', letterSpacing: '0.2em' }}
                >
                  OUR TEAM
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  lineHeight: 1.2,
                  letterSpacing: '-1px',
                  fontWeight: 600,
                  background:
                    'linear-gradient(135deg, #001614ff 0%, #000000ff 50%, #000000ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.1,
                }}
              >
                團隊成員
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'rgba(1, 0, 0, 1)',
                  lineHeight: 1.8,
                }}
              >
                我們是一群充滿熱情的研究者，致力於將各種深度學習、人工智慧的技術應用在解決各種產業實務問題上。
                在這裡，團隊合作與創新思維是我們的核心價值。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: '1', label: '教授' },
                { number: '3', label: '博士生' },
                { number: '10+', label: '碩士生' },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div
                    style={{
                      fontSize: '42px',
                      fontWeight: 400,
                      color: '#000000ff',
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(0, 0, 0, 1)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

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
                <ChevronLeft className="w-5 h-5 text-slate-700" />
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
                <ChevronRight className="w-5 h-5 text-slate-700" />
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
                            ? 'rgba(0, 120, 111, 1)'
                            : 'rgba(255, 255, 255, 0.63)',
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Team Cards */}
          <div className="relative">
            {/* Professor Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <a
                href="https://ljcheng.tw/"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(0, 120, 111, 0.1),rgba(240, 253, 250, 0.5), rgba(0, 150, 137, 0.2))',
                    border: '1px solid rgba(14, 165, 233, 0.2)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div className="p-8 flex flex-col md:flex-row gap-6 items-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="w-32 h-32 rounded-2xl overflow-hidden"
                        style={{
                          border: '3px solid rgba(0, 150, 137, 0.5)',
                          boxShadow: '0 0 30px rgba(0, 120, 111, 0.3)',
                        }}
                      >
                        <ImageWithFallback
                          src={professor.image}
                          alt={professor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background:
                            'radial-gradient(circle, rgba(0, 150, 137, 0.2), transparent)',
                          filter: 'blur(20px)',
                          zIndex: -1,
                        }}
                      />
                    </motion.div>

                    <div className="flex-1 space-y-3 text-center md:text-left">
                      <div>
                        <h3
                          style={{
                            fontSize: '28px',
                            fontWeight: 700,
                            color: '#000000ff',
                            marginBottom: '4px',
                          }}
                        >
                          {professor.name}
                        </h3>
                        <p
                          style={{
                            fontSize: '14px',
                            color: 'rgba(0, 120, 111, 0.8)',
                            letterSpacing: '0.05em',
                            fontWeight: 500,
                          }}
                        >
                          {professor.role}
                        </p>
                      </div>

                      <p
                        style={{
                          fontSize: '13px',
                          color: 'rgba(0, 0, 0, 1)',
                          lineHeight: 1.7,
                          fontWeight: 600,
                        }}
                      >
                        {professor.description}
                      </p>

                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {professor.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-xs"
                            style={{
                              background: 'rgba(255, 255, 255, 1)',
                              color: 'rgba(0, 120, 112, 1)',
                              border: '1px solid rgba(0, 187, 167, 0.3)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {professor.email && (
                        <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
                          <a
                            href={`mailto:${professor.email}`}
                            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors"
                            style={{ fontSize: '12px' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="w-4 h-4" />
                            聯絡信箱
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Team Members Cards - Sliding */}
            <div className="relative h-[400px] md:h-[450px]">
              <AnimatePresence mode="popLayout">
                {getVisibleMembers().map((member, index) => {
                  const canShowDetail =
                    member.description && member.description.length > 15;
                  const visibleExpertise = member.expertise.slice(0, 2);

                  return (
                    <motion.div
                      key={member.id}
                      className={`absolute ${canShowDetail ? 'cursor-pointer' : ''}`}
                      onClick={() => canShowDetail && handleCardClick(member)}
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
                        className="rounded-xl overflow-hidden h-full flex flex-col"
                        style={{
                          background: 'rgba(0, 213, 192, 0.1)',
                          border: '1px solid rgba(0, 120, 111, 0.1)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <div className="relative h-56 overflow-hidden shrink-0">
                          <ImageWithFallback
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                'linear-gradient(180deg, transparent 0%, rgba(2, 6, 23, 0.9) 100%)',
                            }}
                          />
                        </div>

                        <div className="p-6 space-y-3 flex-1 flex flex-col">
                          <div>
                            <h4
                              style={{
                                fontSize: '20px',
                                fontWeight: 600,
                                color: '#000000ff',
                              }}
                            >
                              {member.name}
                            </h4>
                            <p
                              style={{
                                fontSize: '12px',
                                color: 'rgba(0, 120, 111, 0.8)',
                                letterSpacing: '0.05em',
                              }}
                            >
                              {member.role}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2 items-center">
                            {visibleExpertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 rounded-full text-xs"
                                style={{
                                  background: 'rgba(255, 255, 255, 1)',
                                  color: 'rgba(0, 120, 112, 1)',
                                  border: '1px solid rgba(0, 187, 167, 0.3)',
                                  fontSize: '10px',
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <p
                            style={{
                              fontSize: '12px',
                              color: 'rgba(0, 0, 0, 1)',
                              lineHeight: 1.6,
                              overflow: 'hidden',
                              fontWeight: 500,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                            }}
                            title={member.description}
                          >
                            {member.description}
                          </p>

                          {canShowDetail && (
                            <p className="text-cyan-700 text-xs mt-1">
                              ...點擊查看詳情
                            </p>
                          )}

                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-700 transition-colors pt-2 mt-auto"
                              style={{ fontSize: '11px' }}
                            >
                              <Mail className="w-3 h-3" />
                              聯絡
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <AnimatePresence>
        {selectedMember && (
          <MemberDetailModal member={selectedMember} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}