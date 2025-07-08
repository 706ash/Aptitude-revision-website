
import { Target } from 'lucide-react';
import { Topic } from '@/types/Topic';

export const probabilityTopic: Topic = {
  id: 'probability',
  title: 'Probability',
  description: 'Understand chance, probability distributions, and statistical concepts',
  icon: Target,
  bgColor: 'bg-red-100',
  iconColor: 'text-red-600',
  difficulty: 'Advanced',
  lastUpdated: '5 days ago',
  subtopics: [
    {
      id: 'basic-probability',
      title: 'Basic Probability',
      description: 'Fundamental probability concepts and calculations',
      estimatedTime: '50 mins',
      formulas: [
        {
          id: 'basic-prob-formula',
          title: 'Basic Probability',
          formula: 'P(Event) = Favorable Outcomes / Total Outcomes',
          description: 'Calculate the probability of an event occurring',
          example: 'Probability of getting heads in coin toss = 1/2 = 0.5'
        }
      ],
      keyNotes: [
        {
          id: 'prob-concept-1',
          title: 'Probability Range',
          content: 'Probability always lies between 0 and 1 (or 0% and 100%). 0 means impossible, 1 means certain.',
          type: 'concept',
          importance: 'high'
        }
      ]
    }
  ]
};
