
import { BarChart3 } from 'lucide-react';
import { Topic } from '@/types/Topic';

export const dataInterpretationTopic: Topic = {
  id: 'data-interpretation',
  title: 'Data Interpretation',
  description: 'Analyze charts, graphs, and tables to extract meaningful insights',
  icon: BarChart3,
  bgColor: 'bg-purple-100',
  iconColor: 'text-purple-600',
  difficulty: 'Intermediate',
  lastUpdated: '3 days ago',
  subtopics: [
    {
      id: 'bar-graphs',
      title: 'Bar Graphs',
      description: 'Interpret and analyze bar chart data',
      estimatedTime: '40 mins',
      formulas: [],
      keyNotes: [
        {
          id: 'bar-concept-1',
          title: 'Reading Bar Graphs',
          content: 'Always check the scale on both axes. The height/length of bars represents the value.',
          type: 'concept',
          importance: 'high'
        }
      ]
    }
  ]
};
