import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
          <span>by Ash</span>
        </div>
      </div>
    </footer>
  );
};