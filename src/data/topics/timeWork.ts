
import { TrendingUp } from 'lucide-react';
import { Topic } from '@/types/Topic';

export const timeWorkTopic: Topic = {
  id: 'time-work',
  title: 'Time & Work',
  description: 'Calculate work rates, time efficiency, and collaborative work problems',
  icon: TrendingUp,
  bgColor: 'bg-indigo-100',
  iconColor: 'text-indigo-600',
  difficulty: 'Intermediate',
  lastUpdated: '4 days ago',
  subtopics: [
    {
      id: 'basic-time-work',
      title: 'Basic Time & Work',
      description: 'Fundamental time and work calculations',
      estimatedTime: '45 mins',
      formulas: [
        {
          id: 'work-rate-formula',
          title: 'Work Rate Formula',
          formula: 'Work Rate = 1 / Time taken to complete work',
          description: 'Calculate how much work is done per unit time',
          example: 'If A can complete work in 10 days, A\'s rate = 1/10 work per day'
        }
      ],
      keyNotes: [
        {
          id: 'work-concept-1',
          title: 'Work Unit',
          content: 'Always assume total work = 1 unit. This makes calculations much simpler.',
          type: 'concept',
          importance: 'high'
        }
      ]
    }
  ]
};
