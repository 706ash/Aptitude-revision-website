import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { SearchResult } from '../types';

interface SearchBarProps {
  onResultSelect: (result: SearchResult) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onResultSelect }) => {
  const { searchQuery, setSearchQuery, searchResults } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (result: SearchResult) => {
    onResultSelect(result);
    setSearchQuery('');
    setIsOpen(false);
  };

  const getResultTypeColor = (type: string) => {
    switch (type) {
      case 'topic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'subtopic': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'formula': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'mcq': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search topics, formulas, questions..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && searchQuery && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
          {searchResults.length > 0 ? (
            <div className="py-2">
              {searchResults.map((result, index) => (
                <button
                  key={`${result.type}-${result.id}-${index}`}
                  onClick={() => handleResultClick(result)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                        {result.title}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {result.description}
                      </div>
                    </div>
                    <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getResultTypeColor(result.type)}`}>
                      {result.type}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-8 px-4 text-center text-gray-500 dark:text-gray-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};