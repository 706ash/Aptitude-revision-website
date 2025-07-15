import { Subtopic } from '../../types';

export const templateSubtopic: Subtopic = {
  id: 'template-id',
  title: 'Template Title',
  description: 'Description of the subtopic goes here.',
  formulas: [
    {
      id: 'formula-1',
      title: 'Formula Title',
      formula: 'Formula expression here',
      description: 'Description of the formula.',
      example: 'Example usage of the formula.'
    }
    // Add more formulas as needed
  ],
  mcqs: [
    {
      id: 'mcq-1',
      question: 'Sample question text?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswer: 0,
      explanation: 'Explanation for the correct answer.',
      difficulty: 'easy',
      source: 'Source or reference (optional)'
    }
    // Add more MCQs as needed
  ]
}; 