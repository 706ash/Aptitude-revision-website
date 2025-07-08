
import React from 'react';
import { TopicCard } from './TopicCard';
import { topicsData } from '@/data/topicsData';

interface TopicGridProps {
  searchQuery?: string;
}

export const TopicGrid = ({ searchQuery = '' }: TopicGridProps) => {
  const filteredTopics = topicsData.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.subtopics.some(subtopic => 
      subtopic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subtopic.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Topic
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master aptitude questions with our comprehensive collection of topics, 
            formulas, and practice problems designed to boost your confidence.
          </p>
        </div>
        
        {searchQuery && (
          <div className="mb-8">
            <p className="text-gray-600">
              {filteredTopics.length} result{filteredTopics.length !== 1 ? 's' : ''} found for "{searchQuery}"
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
        
        {filteredTopics.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No topics found matching "{searchQuery}". Try searching for different keywords.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
