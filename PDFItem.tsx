import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Tìm kiếm tài liệu, bài học..." }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="text-slate-400 w-5 h-5" />
      </div>
      <input
        type="text"
        className="w-full glass rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-env-purple/50 transition-all placeholder:text-slate-500"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
