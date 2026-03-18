import React from 'react';
import { NavLink } from 'react-router-dom';
import { Droplets, BookOpen, BarChart3, FileText, HelpCircle } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: '/', icon: Droplets, label: 'Trang chủ' },
    { to: '/theory', icon: BookOpen, label: 'Lý thuyết' },
    { to: '/charts', icon: BarChart3, label: 'Biểu đồ' },
    { to: '/pdfs', icon: FileText, label: 'Tài liệu' },
    { to: '/quiz', icon: HelpCircle, label: 'Ôn tập' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-env-purple to-env-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl hidden sm:block">
            Env<span className="text-env-green">Edu</span>
          </span>
        </NavLink>

        <div className="flex items-center gap-1 sm:gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-white/10 text-env-green shadow-inner'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium hidden md:block">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
