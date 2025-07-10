import React from 'react';
import { BookOpen, Star, FileText, Building2, Calendar } from 'lucide-react';
import { references } from '../data/references';
import { Reference } from '../types';

interface ReferencesSectionProps {
  category?: 'arithmetic' | 'data-interpretation' | 'general';
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({ category }) => {
  const filteredReferences = category 
    ? references.filter(ref => ref.category === category)
    : references;

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'arithmetic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'data-interpretation': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'general': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : index < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="mt-12">
      <div className="flex items-center space-x-3 mb-6">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Recommended Textbooks
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReferences.map((reference) => (
          <div
            key={reference.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 ${getCategoryColor(reference.category)}`}>
                  {reference.category.replace('-', ' ').toUpperCase()}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2">
                  {reference.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  by {reference.author}
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-4">
              {reference.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {renderStars(reference.rating)}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                    {reference.rating}
                  </span>
                </div>
                {reference.pages && (
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <FileText className="w-4 h-4" />
                    <span>{reference.pages} pages</span>
                  </div>
                )}
              </div>

              <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                {reference.publisher && (
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-3 h-3" />
                    <span>{reference.publisher}</span>
                  </div>
                )}
                {reference.edition && (
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{reference.edition}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Available at bookstores and online retailers
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
              Study Tip
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              These textbooks are available at major bookstores, online retailers like Amazon, and educational platforms. Consider purchasing both physical and digital copies for comprehensive study. Many libraries also have these books available for borrowing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};