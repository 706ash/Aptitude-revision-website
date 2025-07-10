import React from 'react';
import { Calculator, BarChart3, BookOpen, Brain } from 'lucide-react';
import { topics } from '../data/topics';
import { Topic } from '../types';
import { ReferencesSection } from '../components/ReferencesSection';

interface HomeProps {
  onTopicSelect: (topicId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onTopicSelect }) => {
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return Calculator;
      case 'BarChart3': return BarChart3;
      default: return BookOpen;
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Master Aptitude Topics
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Interactive learning platform for arithmetic, data interpretation, and more
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Interactive MCQs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>Formula Library</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span>Progressive Learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Choose Your Topic
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const IconComponent = getTopicIcon(topic.icon);
            return (
              <button
                key={topic.id}
                onClick={() => onTopicSelect(topic.id)}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-left"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {topic.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {topic.subtopics.length} subtopics
                      </span>
                      <div className="flex space-x-1">
                        {topic.subtopics.slice(0, 3).map((_, index) => (
                          <div key={index} className="w-2 h-2 bg-blue-300 dark:bg-blue-600 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Learning Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {topics.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Topics</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
              {topics.reduce((acc, topic) => acc + topic.subtopics.length, 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Subtopics</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              {topics.reduce((acc, topic) => 
                acc + topic.subtopics.reduce((subAcc, subtopic) => subAcc + subtopic.formulas.length, 0), 0
              )}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Formulas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              {topics.reduce((acc, topic) => 
                acc + topic.subtopics.reduce((subAcc, subtopic) => subAcc + subtopic.mcqs.length, 0), 0
              )}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Questions</div>
          </div>
        </div>
      </div>

      {/* References Section */}
      <ReferencesSection />
    </div>
  );
};