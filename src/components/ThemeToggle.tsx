import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 border border-gray-300 dark:border-gray-600"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className={`absolute inset-0 w-5 h-5 text-yellow-600 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
        <Moon className={`absolute inset-0 w-5 h-5 text-blue-500 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`} />
      </div>
    </button>
  );
};