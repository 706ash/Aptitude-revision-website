import React from 'react';
import { BookOpen, Calculator, BarChart3, ChevronRight } from 'lucide-react';
import { Topic } from '../types';

interface TopicPageProps {
  topic: Topic;
  onSubtopicSelect: (subtopicId: string) => void;
}

export const TopicPage: React.FC<TopicPageProps> = ({ topic, onSubtopicSelect }) => {
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return Calculator;
      case 'BarChart3': return BarChart3;
      default: return BookOpen;
    }
  };

  const IconComponent = getTopicIcon(topic.icon);

  return (
    <div className="space-y-8">
      {/* Topic Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl text-white p-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <IconComponent className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
            <p className="text-blue-100 text-lg">{topic.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>{topic.subtopics.length} subtopics</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>
              {topic.subtopics.reduce((acc, subtopic) => acc + subtopic.formulas.length, 0)} formulas
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span>
              {topic.subtopics.reduce((acc, subtopic) => acc + subtopic.mcqs.length, 0)} questions
            </span>
          </div>
        </div>
      </div>

      {/* Subtopics Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Subtopics
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topic.subtopics.map((subtopic, index) => (
            <button
              key={subtopic.id}
              onClick={() => onSubtopicSelect(subtopic.id)}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {subtopic.title}
                  </h3>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {subtopic.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-xs">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                    {subtopic.formulas.length} formulas
                  </span>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                    {subtopic.mcqs.length} MCQs
                  </span>
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(subtopic.mcqs.length, 5) }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-green-300 dark:bg-green-600 rounded-full"></div>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};