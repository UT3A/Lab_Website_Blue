import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

interface ResearchItem {
  id: string;
  year: string;
  student: string;
  topic: string;
}

interface ResearchYear {
  id: string;
  label: string;
  items: ResearchItem[];
}

const researchYears: ResearchYear[] = [
  {
    id: 'all',
    label: '全部',
    items: [
      // 整合所有年份的資料，這樣「全部」選項會顯示所有的研究項目
      {
        id: '114-1',
        year: '114',
        student: '測試',
        topic: 'AAAAAAAAAAAAAAAAAAA',
      },
      {
        id: '114-2',
        year: '114',
        student: '測試B',
        topic: 'BBBBBBBBBBBBBBBBBBBB',
      },
      {
        id: '113-1',
        year: '113',
        student: '測試C',
        topic: 'ccccccccccccccc',
      },
      {
        id: '112-1',
        year: '112',
        student: '測試D',
        topic: 'DDDDDDDDDDDDDDDDDDD',
      },
      {
        id: 'other-1',
        year: '111',
        student: '測試E',
        topic: 'EEEEEEEEEEEEEEEEE',
      },
      {
        id: 'other-2',
        year: '110',
        student: '呂葦葶',
        topic: '警示股票與網路留言之探索',
      },
      {
        id: 'other-3',
        year: '110',
        student: '尹貽正',
        topic: '整合技術指標與交易策略應用機器學習預測股市漲跌',
      },
      // ...其他年份的研究項目
    ],
  },
  {
    id: '114',
    label: '114年',
    items: [
      {
        id: '114-1',
        year: '114',
        student: '測試',
        topic: 'AAAAAAAAAAAAAAAAAAA',
      },
      {
        id: '114-2',
        year: '114',
        student: '測試B',
        topic: 'BBBBBBBBBBBBBBBBBBBB',
      },
      // ...其他 114 年的研究項目
    ],
  },
  {
    id: '113',
    label: '113年',
    items: [
      {
        id: '113-1',
        year: '113',
        student: '林欣怡',
        topic: '智慧農業中的感測技術研究',
      },
      // 113 年的研究項目
    ],
  },
  {
    id: '112',
    label: '112年',
    items: [
      {
        id: '112-1',
        year: '112',
        student: '李明杰',
        topic: '機器學習在交通流量預測中的應用',
      },
      // 112 年的研究項目
    ],
  },
];

export function ResearchSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeYearId, setActiveYearId] = useState<string>('all');
  const activeYear = researchYears.find((y) => y.id === activeYearId);

  return (
    <section id="research" className="relative bg-white py-16 lg:py-24">
      <div ref={ref} className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 600,
            color: '#11B7A5',
          }}
        >
          我們的研究成果
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear?.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4">{activeYear?.label}</h3>
              <div className="flex items-center gap-3 mb-2 text-sm font-medium text-gray-700 border-b pb-2">
                <div className="w-12 shrink-0" style={{ color: '#11B7A5' }}>年度</div>
                <div className="w-20 shrink-0" style={{ color: '#11B7A5' }}>學生</div>
                <div className="flex-1" style={{ color: '#11B7A5' }}>研究</div>
              </div>

              {activeYear?.items.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0"
                >
                  <div className="w-12 shrink-0 text-gray-500 pt-0.5">{item.year}</div>
                  <div className="w-20 shrink-0 font-medium text-gray-900 pt-0.5">{item.student}</div>
                  <div className="flex-1 text-gray-600 leading-relaxed text-justify">{item.topic}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4">更多研究</h3>
              <div className="flex items-center gap-3 mb-2 text-sm font-medium border-b pb-2">
                <div className="w-12 shrink-0" style={{ color: '#11B7A5' }}>年度</div>
                <div className="w-20 shrink-0" style={{ color: '#11B7A5' }}>學生</div>
                <div className="flex-1" style={{ color: '#11B7A5' }}>研究</div>
              </div>

              {activeYear?.items.slice(5).map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0"
                >
                  <div className="w-12 shrink-0 text-gray-500 pt-0.5">{item.year}</div>
                  <div className="w-20 shrink-0 font-medium text-gray-900 pt-0.5">{item.student}</div>
                  <div className="flex-1 text-gray-600 leading-relaxed text-justify">{item.topic}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center gap-4"
        >
          {researchYears.map((year) => (
            <button
              key={year.id}
              onClick={() => setActiveYearId(year.id)}
              className={`min-w-[96px] rounded-full border px-6 py-2 text-sm tracking-[0.2em] transition-all
                ${year.id === activeYearId
                  ? 'bg-gray-100 border-gray-500 text-gray-800 shadow-sm'
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'}`}
            >
              {year.label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
