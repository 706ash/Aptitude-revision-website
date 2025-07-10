import { Subtopic } from '../../types';

export const hcfLcm: Subtopic = {
  id: 'hcf-lcm',
  title: 'HCF and LCM',
  description: 'Highest Common Factor and Least Common Multiple',
  formulas: [
    {
      id: 'hcf-formula',
      title: 'HCF using Prime Factorization',
      formula: 'HCF = Product of lowest powers of common prime factors',
      description: 'Find HCF by taking the lowest power of each common prime factor',
      example: 'HCF(12, 18) = HCF(2² × 3, 2 × 3²) = 2¹ × 3¹ = 6'
    },
    {
      id: 'lcm-formula',
      title: 'LCM using Prime Factorization',
      formula: 'LCM = Product of highest powers of all prime factors',
      description: 'Find LCM by taking the highest power of each prime factor',
      example: 'LCM(12, 18) = LCM(2² × 3, 2 × 3²) = 2² × 3² = 36'
    },
    {
      id: 'hcf-lcm-relation',
      title: 'HCF × LCM Relation',
      formula: 'HCF(a,b) × LCM(a,b) = a × b',
      description: 'For any two numbers, product of HCF and LCM equals product of the numbers',
      example: 'For 12 and 18: HCF(12,18) × LCM(12,18) = 6 × 36 = 216 = 12 × 18'
    },
    {
      id: 'euclidean-algorithm',
      title: 'Euclidean Algorithm for HCF',
      formula: 'HCF(a,b) = HCF(b, a mod b)',
      description: 'Recursive method to find HCF using division',
      example: 'HCF(48, 18): 48 = 18×2 + 12, then HCF(18, 12) = HCF(12, 6) = 6'
    }
  ],
  mcqs: [
    {
      id: 'hcf-q1',
      question: 'What is the HCF of 24 and 36?',
      options: ['6', '8', '12', '18'],
      correctAnswer: 2,
      explanation: '24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 12',
      difficulty: 'medium'
    },
    {
      id: 'lcm-q1',
      question: 'What is the LCM of 15 and 25?',
      options: ['50', '75', '100', '125'],
      correctAnswer: 1,
      explanation: '15 = 3 × 5, 25 = 5². LCM = 3 × 5² = 75',
      difficulty: 'medium'
    },
    {
      id: 'hcf-lcm-q1',
      question: 'If HCF of two numbers is 6 and their LCM is 60, what is their product?',
      options: ['300', '360', '420', '480'],
      correctAnswer: 1,
      explanation: 'Product = HCF × LCM = 6 × 60 = 360',
      difficulty: 'easy'
    },
    {
      id: 'hcf-q2',
      question: 'The HCF of 84, 90, and 120 is:',
      options: ['4', '6', '8', '12'],
      correctAnswer: 1,
      explanation: '84 = 2² × 3 × 7, 90 = 2 × 3² × 5, 120 = 2³ × 3 × 5. HCF = 2 × 3 = 6',
      difficulty: 'hard'
    }
  ]
};