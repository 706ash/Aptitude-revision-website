
import { Brain } from 'lucide-react';
import { Topic } from '@/types/Topic';

export const logicalReasoningTopic: Topic = {
  id: 'logical-reasoning',
  title: 'Logical Reasoning',
  description: 'Develop logical thinking with patterns, sequences, and analytical reasoning',
  icon: Brain,
  bgColor: 'bg-green-100',
  iconColor: 'text-green-600',
  difficulty: 'Intermediate',
  lastUpdated: '1 week ago',
  subtopics: [
    {
      id: 'number-series',
      title: 'Number Series',
      description: 'Identify patterns in number sequences',
      estimatedTime: '45 mins',
      formulas: [
        {
          id: 'arithmetic-progression',
          title: 'Arithmetic Progression',
          formula: 'nth term = a + (n-1)d',
          description: 'Find any term in an arithmetic sequence',
          example: 'In series 2, 5, 8, 11... a=2, d=3, so 5th term = 2 + (5-1)×3 = 14'
        }
      ],
      keyNotes: [
        {
          id: 'series-tip-1',
          title: 'Pattern Recognition',
          content: 'Always look for differences between consecutive terms first. If differences are constant, it\'s arithmetic progression.',
          type: 'tip',
          importance: 'high'
        }
      ]
    }
  ]
};
