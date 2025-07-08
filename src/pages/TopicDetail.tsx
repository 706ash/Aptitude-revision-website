
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SubtopicCard } from '@/components/SubtopicCard';
import { topicsData } from '@/data/topicsData';

const TopicDetail = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  
  const topic = topicsData.find(t => t.id === topicId);
  
  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Topic not found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Topics
          </Button>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${topic.bgColor}`}>
                <topic.icon className={`h-8 w-8 ${topic.iconColor}`} />
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">{topic.title}</h1>
                <p className="text-gray-600 mb-4 text-lg">{topic.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {topic.subtopics.length} Subtopics
                  </Badge>
                  <Badge variant="outline">{topic.difficulty}</Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Updated {topic.lastUpdated}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <h2 className="text-2xl font-bold text-gray-800">Subtopics</h2>
          {topic.subtopics.map((subtopic) => (
            <SubtopicCard 
              key={subtopic.id} 
              subtopic={subtopic} 
              topicId={topic.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
