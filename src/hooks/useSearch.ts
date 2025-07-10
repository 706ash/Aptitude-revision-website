import { useState, useMemo } from 'react';
import { topics } from '../data/topics';
import { SearchResult } from '../types';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const results: SearchResult[] = [];
    const query = searchQuery.toLowerCase();

    topics.forEach(topic => {
      // Search in topics
      if (topic.title.toLowerCase().includes(query) || 
          topic.description.toLowerCase().includes(query)) {
        results.push({
          type: 'topic',
          id: topic.id,
          title: topic.title,
          description: topic.description
        });
      }

      // Search in subtopics
      topic.subtopics.forEach(subtopic => {
        if (subtopic.title.toLowerCase().includes(query) || 
            subtopic.description.toLowerCase().includes(query)) {
          results.push({
            type: 'subtopic',
            id: subtopic.id,
            title: subtopic.title,
            description: subtopic.description,
            topicId: topic.id
          });
        }

        // Search in formulas
        subtopic.formulas.forEach(formula => {
          if (formula.title.toLowerCase().includes(query) || 
              formula.description.toLowerCase().includes(query)) {
            results.push({
              type: 'formula',
              id: formula.id,
              title: formula.title,
              description: formula.description,
              topicId: topic.id,
              subtopicId: subtopic.id
            });
          }
        });

        // Search in MCQs
        subtopic.mcqs.forEach(mcq => {
          if (mcq.question.toLowerCase().includes(query)) {
            results.push({
              type: 'mcq',
              id: mcq.id,
              title: mcq.question,
              description: `${mcq.difficulty} level question`,
              topicId: topic.id,
              subtopicId: subtopic.id
            });
          }
        });
      });
    });

    return results;
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults
  };
};