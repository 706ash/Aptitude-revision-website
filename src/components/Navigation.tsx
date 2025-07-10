import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface NavigationProps {
  currentPath: string[];
  onNavigate: (path: string[]) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPath, onNavigate }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <button
        onClick={() => onNavigate([])}
        className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </button>
      
      {currentPath.map((segment, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4" />
          <button
            onClick={() => onNavigate(currentPath.slice(0, index + 1))}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 capitalize"
          >
            {segment.replace('-', ' ')}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};