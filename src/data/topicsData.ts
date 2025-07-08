
import { Calculator, Brain, BarChart3, Target, Puzzle, TrendingUp } from 'lucide-react';
import { Topic } from '@/types/Topic';

export const topicsData: Topic[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];
