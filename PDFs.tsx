import React from 'react';
import { motion } from 'motion/react';
import SearchBar from '../components/SearchBar';
import { Droplets, BookOpen, BarChart3, FileText, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const menuItems = [
    { to: '/theory', icon: BookOpen, label: 'Lý thuyết', color: 'bg-blue-500', desc: 'Hệ thống kiến thức xử lý nước thải' },
    { to: '/charts', icon: BarChart3, label: 'Biểu đồ', color: 'bg-env-green', desc: 'Theo dõi các chỉ số môi trường' },
    { to: '/pdfs', icon: FileText, label: 'Tài liệu', color: 'bg-orange-500', desc: 'Download giáo trình & quy chuẩn' },
    { to: '/quiz', icon: HelpCircle, label: 'Ôn tập', color: 'bg-env-purple', desc: 'Câu hỏi trắc nghiệm kiến thức' },
  ];

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-env-green text-sm font-medium mb-6"
          >
            <Droplets className="w-4 h-4" />
            Đại học Đồng Tháp - Khoa Khoa học Môi trường
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Học tập & Ôn tập <br />
            <span className="text-gradient">Xử lý Nước thải</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto mb-10"
          >
            Nền tảng hỗ trợ sinh viên nắm vững kiến thức chuyên môn, tra cứu tài liệu và theo dõi số liệu thực tế về hệ thống xử lý nước thải.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <SearchBar onSearch={(q) => console.log(q)} />
          </motion.div>
        </section>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <Link to={item.to} className="block group">
                <div className="glass glass-hover rounded-3xl p-8 h-full flex flex-col gap-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">{item.label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center text-env-green font-semibold text-sm">
                    Khám phá ngay <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
