import React from 'react';
import { FileText, Download } from 'lucide-react';
import { motion } from 'motion/react';

interface PDFItemProps {
  title: string;
  size: string;
  url: string;
}

const PDFItem: React.FC<PDFItemProps> = ({ title, size, url }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass glass-hover rounded-2xl p-4 flex items-center justify-between group"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-semibold text-white group-hover:text-env-green transition-colors">{title}</h4>
          <p className="text-xs text-slate-500">{size}</p>
        </div>
      </div>
      <a
        href={url}
        download
        className="p-3 rounded-xl bg-white/5 hover:bg-env-green hover:text-white transition-all text-slate-400"
        title="Tải xuống"
      >
        <Download className="w-5 h-5" />
      </a>
    </motion.div>
  );
};

export default PDFItem;
