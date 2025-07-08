
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
    },
    {
      id: 'line-graphs',
      title: 'Line Graphs',
      description: 'Understand trends and patterns in line charts',
      estimatedTime: '35 mins',
      formulas: [],
      keyNotes: [
        {
          id: 'line-concept-1',
          title: 'Trend Analysis',
          content: 'Look for patterns: increasing, decreasing, or constant trends over time.',
          type: 'concept',
          importance: 'high'
        }
      ]
    },
    {
      id: 'pie-charts',
      title: 'Pie Charts',
      description: 'Analyze proportional data and percentages',
      estimatedTime: '30 mins',
      formulas: [
        {
          id: 'pie-formula-1',
          title: 'Percentage Calculation',
          formula: 'Percentage = (Part/Whole) × 100',
          explanation: 'To find what percentage a segment represents of the total pie'
        }
      ],
      keyNotes: [
        {
          id: 'pie-concept-1',
          title: 'Reading Pie Charts',
          content: 'The entire pie represents 100%. Each slice represents a proportion of the whole.',
          type: 'concept',
          importance: 'high'
        }
      ]
    },
    {
      id: 'tables',
      title: 'Data Tables',
      description: 'Extract information from tabular data',
      estimatedTime: '45 mins',
      formulas: [],
      keyNotes: [
        {
          id: 'table-concept-1',
          title: 'Table Navigation',
          content: 'Always read row and column headers carefully. Look for totals and subtotals.',
          type: 'concept',
          importance: 'high'
        }
      ]
    }
  ]
};
