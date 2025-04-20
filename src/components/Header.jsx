import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = ({ theme }) => {
  return (
    // header container with flex layout for alignment and spacing
    <header className="flex justify-between items-center mb-8">
      
       
      <div className="flex items-center">
        <h1 className="text-3xl font-bold flex items-center">
          
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3 text-white shadow-lg">
            <Sparkles size={24} className="animate-pulse" /> 
            {/* gets us the spark icon  */}
          </span>

          {/* header title  */}
          Todo List
        </h1>
      </div>

      
    </header>
  );
};

export default Header;
