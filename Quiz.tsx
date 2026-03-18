import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { THEORY_DATA } from '../constants';
import Card from '../components/Card';
import { X } from 'lucide-react';

const Theory = () => {
  const [selectedTheory, setSelectedTheory] = useState<typeof THEORY_DATA[0] | null>(null);

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Lý thuyết Hệ thống</h2>
          <p className="text-slate-400">Tìm hiểu các giai đoạn quan trọng trong quy trình xử lý nước thải hiện đại.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {THEORY_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card
                title={item.title}
                description={item.description}
                iconName={item.icon}
                category={item.category}
                onClick={() => setSelectedTheory(item)}
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedTheory && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTheory(null)}
                className="absolute inset-0 bg-env-dark/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative glass rounded-3xl w-full max-w-2xl p-8 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedTheory(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-env-purple/20 flex items-center justify-center text-env-purple">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-env-green/20 text-env-green mb-2 inline-block">
                      {selectedTheory.category}
                    </span>
                    <h3 className="font-display font-bold text-3xl text-white">{selectedTheory.title}</h3>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {selectedTheory.content}
                  </p>
                  <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-bold mb-3">Thông tin bổ sung</h4>
                    <p className="text-slate-400 text-sm">
                      Đây là một phần trong chương trình đào tạo chuyên sâu về Kỹ thuật Môi trường. Sinh viên cần nắm vững các thông số đầu vào và đầu ra của giai đoạn này.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

import { BookOpen } from 'lucide-react';

export default Theory;
