
import { Puzzle } from 'lucide-react';
import { Topic } from '@/types/Topic';

export const puzzlesTopic: Topic = {
  id: 'puzzles',
  title: 'Puzzles & Games',
  description: 'Solve brain teasers, riddles, and strategic thinking problems',
  icon: Puzzle,
  bgColor: 'bg-yellow-100',
  iconColor: 'text-yellow-600',
  difficulty: 'Intermediate',
  lastUpdated: '1 week ago',
  subtopics: [
    {
      id: 'logic-puzzles',
      title: 'Logic Puzzles',
      description: 'Word problems requiring logical deduction',
      estimatedTime: '60 mins',
      formulas: [],
      keyNotes: [
        {
          id: 'puzzle-tip-1',
          title: 'Systematic Approach',
          content: 'For logic puzzles, always create a grid or table to organize information systematically.',
          type: 'tip',
          importance: 'high'
        }
      ]
    }
  ]
};
