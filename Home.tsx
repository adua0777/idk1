import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  iconName: string;
  category?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, iconName, category, onClick }) => {
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass glass-hover rounded-3xl p-6 cursor-pointer flex flex-col gap-4"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-env-purple/20 flex items-center justify-center text-env-purple">
          <Icon className="w-6 h-6" />
        </div>
        {category && (
          <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-env-green/20 text-env-green">
            {category}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
      <div className="mt-auto pt-4 flex items-center text-env-green text-sm font-semibold group">
        Xem chi tiết
        <LucideIcons.ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
};

export default Card;
