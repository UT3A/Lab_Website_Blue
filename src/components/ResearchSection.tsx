import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

interface ResearchItem {
  year: string;
  student: string;
  topic: string;
}

interface CategoryData {
  [key: string]: ResearchItem[];
}

const researchData: CategoryData = {
  papers: [
    {
      year: '110',
      student: '呂葦葶',
      topic: '警示股票與網路留言之探索',
    },
    {
      year: '110',
      student: '尹貽正',
      topic: '整合技術指標與交易策略應用機器學習預測股市漲跌',
    },
    {
      year: '110',
      student: '黃子滔',
      topic: '利用知識圖譜嵌入進行基於序列和服裝搭配的推薦系統',
    },
    {
      year: '110',
      student: '孫健修',
      topic: '基於深度強化式學習多代理人投資組合 自適應交易模型',
    },
    {
      year: '110',
      student: '鄭如涵',
      topic: '基於深度學習以服裝風格特徵建構個人化推薦系統',
    },
    {
      year: '110',
      student: '黃煜為',
      topic: '多任務中文Aspect 類別萃取暨情感極性預測模型',
    },
  ],
  undergrad: [
    {
      year: '109',
      student: '李小明',
      topic: '機器學習在推薦系統的應用',
    },
    {
      year: '109',
      student: '王大華',
      topic: '深度學習於影像辨識之研究',
    },
  ],
  conference: [
    {
      year: '114',
      student: '張詠翔',
      topic: '應用大語言技術之衛教聊天機器人(政大資管)',
    },
    {
      year: '113',
      student: '黃仁和',
      topic: '基於盤中逐筆交易資料及社群媒體立場分析之強化學習交易代理人(中央資管)',
    },
    {
      year: '111',
      student: '姜依婷',
      topic: '基於身材服裝穿搭推薦系統',
    },
    {
      year: '110',
      student: '陳元熙',
      topic: '以強化式學習建構適性化理財機器人模型-以ETF為標的(政大資管)',
    },
    {
      year: '109',
      student: '侯超旻',
      topic: '基於深度學習建置虛假資訊偵測模型 (北科資財)',
    },
  ],
};

// 大學生專題資料
const undergradProjects: ResearchItem[] = [
  {
    year: '109',
    student: '李小明',
    topic: '機器學習在推薦系統的應用',
  },
  {
    year: '109',
    student: '王大華',
    topic: '深度學習於影像辨識之研究',
  },
  {
    year: '108',
    student: '陳志明',
    topic: '自然語言處理在客服系統的應用',
  },
];

// 競賽資料
const competitions: ResearchItem[] = [
  {
    year: '114',
    student: '糖小護',
    topic: '聯新國際智慧健康照護 第二名',
  },
  {
    year: '113',
    student: '碳足跡教育',
    topic: '教育開放資料組 第一名',
  },
  {
    year: '113',
    student: '人工智慧財務健檢戰情室',
    topic: '商業資訊創新應用組第三名',
  },
  {
    year: '110',
    student: '銀JOY生活─長輩的好朋友',
    topic: '臺北生活好便利創新應用組 佳作',
  },
  {
    year: '109',
    student: '艾菲克特-專屬於你的新聞偵探 Open Data',
    topic: '創意應用開發組 第二名',
  },
  {
    year: '109',
    student: 'HOW PAY好配',
    topic: '經濟與能源空間開放資料服務應用組-應用系統主題 第三名',
  },
  {
    year: '108',
    student: '猜你喜歡─個人化旅遊推薦機器人',
    topic: '產學合作組 第三名',
  },
];

const categories = [
  { id: 'papers', label: '研究生論文' },
  { id: 'undergrad', label: '大學生專題(競賽)' },
  { id: 'conference', label: '大專國科會' },
];

// Table Component
interface TableProps {
  title: string;
  data: ResearchItem[];
  delay?: number;
}

function ResearchTable({ title, data, delay = 0 }: TableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg overflow-hidden w-full"
      style={{ border: '1px solid #e5e7eb' }}
    >
      {/* Table Title */}
      <div
        className="px-8 py-4 text-center font-medium"
        style={{
          backgroundColor: '#10B7A5',
          color: 'white',
          fontSize: '16px',
        }}
      >
        {title}
      </div>

      {/* Table Header */}
      <div
        className="grid gap-6 px-8 py-2"
        style={{
          gridTemplateColumns: '80px 120px 1fr',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div className="text-[#10B7A5]" style={{ fontSize: '15px', fontWeight: 1000 }}>
          年度
        </div>
        <div className="text-[#10B7A5]" style={{ fontSize: '15px', fontWeight: 1000 }}>
          學生
        </div>
        <div className="text-[#10B7A5]" style={{ fontSize: '15px', fontWeight: 1000 }}>
          成果
        </div>
      </div>

      {/* Table Body */}
      <div>
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.05 }}
            className="grid gap-6 px-8 py-5 transition-colors duration-200 hover:bg-gray-50"
            style={{
              gridTemplateColumns: '80px 120px 1fr',
              borderBottom: index < data.length - 1 ? '1px solid #f3f4f6' : 'none',
            }}
          >
            <div className="text-gray-600" style={{ fontSize: '16px', fontWeight: 400 }}>
              {item.year}
            </div>
            <div className="text-gray-800" style={{ fontSize: '16px', fontWeight: 500 }}>
              {item.student}
            </div>
            <div
              className="text-gray-700"
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {item.topic}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('papers');

  const currentData = researchData[activeCategory] || [];

  return (
    <section
      id="research"
      ref={ref}
      className="relative min-h-screen py-20 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-[#10B7A5] mb-8"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 600,
              letterSpacing: '0.05em',
              lineHeight: 1.3,
            }}
          >
            我們的研究成果
          </h2>

          {/* Category Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:text-[#10B7A5]'
                }`}
                style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  backgroundColor: activeCategory === category.id ? '#10B7A5' : 'white',
                  border: activeCategory === category.id ? 'none' : '1px solid #e5e7eb',
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Conditional Rendering: Two tables for undergrad, single table for others */}
        {activeCategory === 'undergrad' ? (
          // Two Tables Side by Side for 大學生專題(競賽)
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResearchTable title="大學生專題" data={undergradProjects} delay={0.4} />
            <ResearchTable title="競賽" data={competitions} delay={0.5} />
          </div>
        ) : (
          // Single Table for other categories
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: '1px solid #e5e7eb' }}
          >
            {/* Table Header */}
            <div
              className="grid gap-6 px-8 py-2"
              style={{
                gridTemplateColumns: '80px 120px 1fr',
                backgroundColor: '#f9fafb',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <div className="text-[#10B7A5]" style={{ fontSize: '15px', fontWeight: 1000 }}>
                年度
              </div>
              <div className="text-[#10B7A5]" style={{ fontSize: '15px', fontWeight: 1000 }}>
                學生
              </div>
              <div className="text-[#10B7A5]" style={{ fontSize: '15px', fontWeight: 1000 }}>
                研究
              </div>
            </div>

            {/* Table Body */}
            <div>
              {currentData.map((item, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid gap-6 px-8 py-5 transition-colors duration-200 hover:bg-gray-50"
                  style={{
                    gridTemplateColumns: '80px 120px 1fr',
                    borderBottom: index < currentData.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}
                >
                  <div className="text-gray-600" style={{ fontSize: '16px', fontWeight: 400 }}>
                    {item.year}
                  </div>
                  <div className="text-gray-800" style={{ fontSize: '16px', fontWeight: 500 }}>
                    {item.student}
                  </div>
                  <div
                    className="text-gray-700"
                    style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.topic}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}