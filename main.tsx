import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PDF_DOCS } from '../constants';
import PDFItem from '../components/PDFItem';
import SearchBar from '../components/SearchBar';
import { FileText } from 'lucide-react';

const PDFs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = PDF_DOCS.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 mx-auto mb-6"
          >
            <FileText className="w-8 h-8" />
          </motion.div>
          <h2 className="font-display text-4xl font-bold text-white mb-4">Kho Tài Liệu PDF</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Tải xuống các giáo trình, quy chuẩn kỹ thuật và tài liệu hướng dẫn vận hành hệ thống xử lý nước thải.
          </p>
          <SearchBar onSearch={setSearchQuery} placeholder="Tìm kiếm tên tài liệu..." />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc) => (
              <PDFItem key={doc.id} title={doc.title} size={doc.size} url={doc.url} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 glass rounded-3xl">
              <p className="text-slate-500">Không tìm thấy tài liệu nào phù hợp.</p>
            </div>
          )}
        </div>

        <div className="mt-16 p-8 glass rounded-3xl border-env-green/20 bg-env-green/5">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Bạn cần thêm tài liệu?</h3>
              <p className="text-slate-400 leading-relaxed">
                Nếu bạn không tìm thấy tài liệu mình cần, hãy liên hệ với thư viện Khoa Khoa học Môi trường hoặc giảng viên bộ môn để được hỗ trợ cung cấp bản mềm.
              </p>
            </div>
            <button className="px-8 py-4 rounded-2xl bg-env-green text-white font-bold hover:bg-env-green/80 transition-all shadow-lg shadow-env-green/20">
              Gửi yêu cầu tài liệu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFs;
