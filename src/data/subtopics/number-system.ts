import { Subtopic } from '../../types';

export const numberSystem: Subtopic = {
  id: 'number-system',
  title: 'Number System',
  description: 'Understanding different types of numbers and their properties',
  formulas: [
    {
      id: 'natural-numbers',
      title: 'Natural Numbers',
      formula: 'N = {1, 2, 3, 4, ...}',
      description: 'The set of positive integers starting from 1',
      example: 'Examples: 1, 2, 3, 100, 1000'
    },
    {
      id: 'whole-numbers',
      title: 'Whole Numbers',
      formula: 'W = {0, 1, 2, 3, 4, ...}',
      description: 'Natural numbers including zero',
      example: 'Examples: 0, 1, 2, 50, 999'
    },
    {
      id: 'integers',
      title: 'Integers',
      formula: 'Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}',
      description: 'Positive and negative whole numbers including zero',
      example: 'Examples: -5, -1, 0, 7, 42'
    },
    {
      id: 'rational-numbers',
      title: 'Rational Numbers',
      formula: 'Q = {p/q : p, q ∈ Z, q ≠ 0}',
      description: 'Numbers that can be expressed as a fraction of two integers',
      example: 'Examples: 1/2, -3/4, 5, 0.75'
    },
    {
      id: 'irrational-numbers',
      title: 'Irrational Numbers',
      formula: 'Numbers that cannot be expressed as p/q',
      description: 'Numbers with non-terminating, non-repeating decimal expansions',
      example: 'Examples: √2, π, e, √3'
    }
  ],
  mcqs: [
    {
      id: 'ns-q1',
      question: 'Which of the following is NOT a natural number?',
      options: ['1', '0', '5', '100'],
      correctAnswer: 1,
      explanation: 'Natural numbers start from 1, so 0 is not included in natural numbers.',
      difficulty: 'easy'
    },
    {
      id: 'ns-q2',
      question: 'The smallest whole number is:',
      options: ['1', '0', '-1', '2'],
      correctAnswer: 1,
      explanation: 'Whole numbers include 0, which is the smallest whole number.',
      difficulty: 'easy'
    },
    {
      id: 'ns-q3',
      question: 'Which of the following is a rational number?',
      options: ['√2', 'π', '22/7', '√5'],
      correctAnswer: 2,
      explanation: '22/7 can be expressed as a fraction, making it a rational number.',
      difficulty: 'medium'
    },
    {
      id: 'ns-q4',
      question: 'The number 0.333... (repeating) is:',
      options: ['Irrational', 'Rational', 'Neither', 'Undefined'],
      correctAnswer: 1,
      explanation: '0.333... = 1/3, which is a fraction, so it is rational.',
      difficulty: 'medium'
    }
  ]
};