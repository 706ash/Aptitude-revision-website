import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { MCQ } from '../types';

interface MCQComponentProps {
  mcq: MCQ;
}

export const MCQComponent: React.FC<MCQComponentProps> = ({ mcq }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const resetQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getDifficultyColor(mcq.difficulty)}`}>
          {mcq.difficulty.charAt(0).toUpperCase() + mcq.difficulty.slice(1)}
        </span>
        {showResult && (
          <button
            onClick={resetQuestion}
            className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {mcq.question}
      </h3>

      <div className="space-y-3 mb-6">
        {mcq.options.map((option, index) => {
          let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ";
          
          if (!showResult) {
            buttonClass += "border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20";
          } else {
            if (index === mcq.correctAnswer) {
              buttonClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200";
            } else if (index === selectedAnswer && index !== mcq.correctAnswer) {
              buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200";
            } else {
              buttonClass += "border-gray-200 dark:border-gray-600 opacity-60";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={buttonClass}
              disabled={showResult}
            >
              <div className="flex items-center justify-between">
                <span className="flex-1 text-gray-900 dark:text-gray-100">
                  {String.fromCharCode(65 + index)}. {option}
                </span>
                {showResult && index === mcq.correctAnswer && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {showResult && index === selectedAnswer && index !== mcq.correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            {selectedAnswer === mcq.correctAnswer ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
            <span className={`font-medium ${selectedAnswer === mcq.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
              {selectedAnswer === mcq.correctAnswer ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Explanation:</span> {mcq.explanation}
          </p>
        </div>
      )}
    </div>
  );
};