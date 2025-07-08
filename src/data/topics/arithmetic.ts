
import { Calculator } from 'lucide-react';
import { Topic } from '@/types/Topic';

export const arithmeticTopic: Topic = {
  id: 'arithmetic',
  title: 'Arithmetic',
  description: 'Master fundamental mathematical operations, percentages, ratios, and basic calculations',
  icon: Calculator,
  bgColor: 'bg-blue-100',
  iconColor: 'text-blue-600',
  difficulty: 'Beginner',
  lastUpdated: '2 days ago',
  subtopics: [
    {
      id: 'percentages',
      title: 'Percentages',
      description: 'Learn percentage calculations, increase/decrease, and applications',
      estimatedTime: '30 mins',
      formulas: [
        {
          id: 'basic-percentage',
          title: 'Basic Percentage Formula',
          formula: 'Percentage = (Value / Total) × 100',
          description: 'Calculate what percentage one value is of another',
          example: 'If 20 out of 100 students passed, percentage = (20/100) × 100 = 20%',
          variables: {
            'Value': 'The part or portion you want to find percentage of',
            'Total': 'The whole amount or total value'
          }
        },
        {
          id: 'percentage-increase',
          title: 'Percentage Increase',
          formula: '% Increase = ((New Value - Old Value) / Old Value) × 100',
          description: 'Calculate the percentage increase between two values',
          example: 'Price increased from ₹100 to ₹120: ((120-100)/100) × 100 = 20%'
        }
      ],
      keyNotes: [
        {
          id: 'percent-tip-1',
          title: 'Quick Mental Calculation',
          content: 'To find 10% of any number, simply move the decimal point one place to the left. For 1%, move it two places.',
          type: 'tip',
          importance: 'high'
        },
        {
          id: 'percent-concept-1',
          title: 'Percentage Definition',
          content: 'Percentage means "per hundred" - it\'s a way of expressing a number as a fraction of 100.',
          type: 'definition',
          importance: 'high'
        }
      ]
    }
  ]
};
