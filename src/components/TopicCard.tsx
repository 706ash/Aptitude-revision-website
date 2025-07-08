
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { Topic } from '@/types/Topic';

interface TopicCardProps {
  topic: Topic;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/topic/${topic.id}`);
  };

  return (
    <Card 
      className="group cursor-pointer bg-white/70 backdrop-blur-sm border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90"
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${topic.bgColor}`}>
            <topic.icon className={`h-6 w-6 ${topic.iconColor}`} />
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-gray-900">
          {topic.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {topic.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="text-xs">
            {topic.subtopics.length} subtopics
          </Badge>
          <Badge variant="outline" className="text-xs">
            {topic.difficulty}
          </Badge>
        </div>
        
        <div className="text-xs text-gray-500">
          Last updated: {topic.lastUpdated}
        </div>
      </CardContent>
    </Card>
  );
};
