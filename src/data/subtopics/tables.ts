import { Subtopic } from '../../types';

export const tables: Subtopic = {
  id: 'tables',
  title: 'Tables',
  description: 'Reading and interpreting tabular data',
  formulas: [
    {
      id: 'percentage-change',
      title: 'Percentage Change',
      formula: 'Percentage Change = ((New Value - Old Value) / Old Value) × 100',
      description: 'Calculate the percentage increase or decrease between two values',
      example: 'If sales increased from 100 to 120: ((120-100)/100) × 100 = 20%'
    },
    {
      id: 'average-formula',
      title: 'Average',
      formula: 'Average = Sum of all values / Number of values',
      description: 'Find the mean of a set of numbers',
      example: 'Average of 10, 20, 30 = (10+20+30)/3 = 20'
    },
    {
      id: 'growth-rate',
      title: 'Growth Rate',
      formula: 'Growth Rate = ((Final Value - Initial Value) / Initial Value) × 100',
      description: 'Calculate the rate of growth over a period',
      example: 'Population grows from 1000 to 1200: ((1200-1000)/1000) × 100 = 20%'
    },
    {
      id: 'ratio-analysis',
      title: 'Ratio Analysis',
      formula: 'Ratio = Value A : Value B = A/B',
      description: 'Compare two quantities using ratios',
      example: 'If boys:girls = 3:2 and total = 50, then boys = 30, girls = 20'
    }
  ],
  mcqs: [
    {
      id: 'table-q1',
      question: 'If a company\'s profit increased from ₹50,000 to ₹65,000, what is the percentage increase?',
      options: ['25%', '30%', '35%', '40%'],
      correctAnswer: 1,
      explanation: 'Percentage increase = ((65000-50000)/50000) × 100 = 30%',
      difficulty: 'medium'
    },
    {
      id: 'table-q2',
      question: 'The average of 15, 25, 35, and 45 is:',
      options: ['25', '30', '35', '40'],
      correctAnswer: 1,
      explanation: 'Average = (15+25+35+45)/4 = 120/4 = 30',
      difficulty: 'easy'
    },
    {
      id: 'table-q3',
      question: 'If the ratio of expenses to income is 3:4 and income is ₹80,000, what are the expenses?',
      options: ['₹60,000', '₹65,000', '₹70,000', '₹75,000'],
      correctAnswer: 0,
      explanation: 'If ratio is 3:4, then expenses = (3/4) × 80,000 = ₹60,000',
      difficulty: 'medium'
    }
  ]
};