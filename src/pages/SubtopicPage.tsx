import React from 'react';
import { BookOpen, HelpCircle } from 'lucide-react';
import { Subtopic } from '../types';
import { FormulaCard } from '../components/FormulaCard';
import { MCQComponent } from '../components/MCQComponent';

interface SubtopicPageProps {
  subtopic: Subtopic;
  topicTitle: string;
}

export const SubtopicPage: React.FC<SubtopicPageProps> = ({ subtopic, topicTitle }) => {
  return (
    <div className="space-y-8">
      {/* Subtopic Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-blue-700 rounded-2xl text-white p-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <div className="text-emerald-200 text-sm font-medium mb-1">{topicTitle}</div>
            <h1 className="text-3xl font-bold mb-2">{subtopic.title}</h1>
            <p className="text-emerald-100 text-lg">{subtopic.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4" />
            <span>{subtopic.formulas.length} formulas</span>
          </div>
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-4 h-4" />
            <span>{subtopic.mcqs.length} practice questions</span>
          </div>
        </div>
      </div>

      {/* Concepts Section */}
      {subtopic.concepts && subtopic.concepts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span>Concepts</span>
          </h2>
          <ul className="space-y-4">
            {subtopic.concepts.map((concept) => (
              <li key={concept.id}>
                <div className="font-semibold">{concept.title}</div>
                <div className="text-gray-700 dark:text-gray-300">{concept.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Formulas Section */}
      {subtopic.formulas.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span>Formulas & Concepts</span>
          </h2>
          <div className="grid gap-6">
            {subtopic.formulas.map((formula) => (
              <FormulaCard key={formula.id} formula={formula} />
            ))}
          </div>
        </section>
      )}

      {/* MCQs Section */}
      {subtopic.mcqs.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center space-x-2">
            <HelpCircle className="w-6 h-6 text-green-600" />
            <span>Practice Questions</span>
          </h2>
          <div className="grid gap-6">
            {subtopic.mcqs.map((mcq) => (
              <MCQComponent key={mcq.id} mcq={mcq} />
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {subtopic.formulas.length === 0 && subtopic.mcqs.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Content Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            We're working on adding formulas and practice questions for this subtopic.
          </p>
        </div>
      )}
    </div>
  );
};