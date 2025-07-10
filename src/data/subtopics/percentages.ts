import { Subtopic } from '../../types';

export const percentages: Subtopic = {
  id: 'percentages',
  title: 'Percentages',
  description: 'Understanding percentage calculations and applications',
  formulas: [
    {
      id: 'basic-percentage',
      title: 'Basic Percentage Formula',
      formula: 'Percentage = (Part/Whole) × 100',
      description: 'Convert a fraction to percentage',
      example: 'If 25 out of 100 students pass: (25/100) × 100 = 25%'
    },
    {
      id: 'percentage-increase',
      title: 'Percentage Increase',
      formula: 'Increase% = ((New Value - Old Value)/Old Value) × 100',
      description: 'Calculate percentage increase between two values',
      example: 'Price increases from ₹100 to ₹120: ((120-100)/100) × 100 = 20%'
    },
    {
      id: 'percentage-decrease',
      title: 'Percentage Decrease',
      formula: 'Decrease% = ((Old Value - New Value)/Old Value) × 100',
      description: 'Calculate percentage decrease between two values',
      example: 'Price decreases from ₹200 to ₹160: ((200-160)/200) × 100 = 20%'
    },
    {
      id: 'successive-percentage',
      title: 'Successive Percentage Changes',
      formula: 'Net% = a + b + (ab/100)',
      description: 'When two percentage changes are applied successively',
      example: 'After +20% then -10%: 20 + (-10) + (20×(-10)/100) = 8%'
    }
  ],
  mcqs: [
    {
      id: 'perc-q1',
      question: 'What is 25% of 80?',
      options: ['15', '20', '25', '30'],
      correctAnswer: 1,
      explanation: '25% of 80 = (25/100) × 80 = 20',
      difficulty: 'easy'
    },
    {
      id: 'perc-q2',
      question: 'If a number increases from 50 to 65, what is the percentage increase?',
      options: ['25%', '30%', '35%', '40%'],
      correctAnswer: 1,
      explanation: 'Increase% = ((65-50)/50) × 100 = 30%',
      difficulty: 'medium'
    }
  ]
};