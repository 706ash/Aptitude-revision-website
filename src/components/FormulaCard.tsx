import React from 'react';
import { BookOpen } from 'lucide-react';
import { Formula } from '../types';

interface FormulaCardProps {
  formula: Formula;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({ formula }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border border-blue-100 dark:border-gray-600 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {formula.title}
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 mb-3">
            <pre className="text-lg font-mono text-blue-700 dark:text-blue-300 break-words whitespace-pre-line m-0">
              {formula.formula}
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            {formula.description}
          </p>
          {formula.example && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <span className="font-medium">Example:</span> {formula.example}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};