import React from 'react';
import { Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold flex items-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3 text-white shadow-lg">
            <Sparkles size={24} className="animate-pulse" />
          </span>
          Todo List
        </h1>
      </div>
      {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}
    </header>
  );
};
 
export default Header;