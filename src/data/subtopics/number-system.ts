import { Subtopic } from '../../types';

export const numberSystem: Subtopic = {
  id: 'number-system',
  title: 'Number System',
  description: 'Covers basic and advanced properties of numbers, operations, divisibility, remainders, unit digits, etc.',
  formulas: [
    {
      id: 'natural-numbers',
      title: 'Natural Numbers',
      formula: 'N = {1, 2, 3, 4, ...}',
      description: 'Positive integers starting from 1. They do not include 0.',
      example: 'Examples: 1, 2, 3, 10, 100'
    },
    {
      id: 'whole-numbers',
      title: 'Whole Numbers',
      formula: 'W = {0, 1, 2, 3, ...}',
      description: 'Natural numbers along with 0.',
      example: 'Examples: 0, 1, 2, 50, 999'
    },
    {
      id: 'integers',
      title: 'Integers',
      formula: 'Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}',
      description: 'All positive and negative whole numbers including zero.',
      example: 'Examples: -7, -1, 0, 8, 23'
    },
    {
      id: 'rational-numbers',
      title: 'Rational Numbers',
      formula: 'Q = {p/q | p, q ∈ Z, q ≠ 0}',
      description: 'Any number that can be expressed as a fraction of two integers.',
      example: 'Examples: 1/2, -4/7, 3, 0.25'
    },
    {
      id: 'irrational-numbers',
      title: 'Irrational Numbers',
      formula: 'Not expressible as p/q',
      description: 'Non-terminating, non-repeating decimals.',
      example: 'Examples: √2, π, e, √3'
    },
    {
      id: 'prime-numbers',
      title: 'Prime Numbers',
      formula: 'Prime: number > 1 with exactly two distinct factors (1 and itself)',
      description: 'Cannot be divided evenly except by 1 and itself.',
      example: 'Examples: 2, 3, 5, 7, 11, 241, 337'
    },
    {
      id: 'divisibility-rules',
      title: 'Divisibility Rules',
      formula: 'E.g., Div. by 3: Sum of digits divisible by 3',
      description: 'Shortcuts to check if a number is divisible by 2, 3, 4, 5, 8, 9, 11, 25, etc.',
      example: '541326 divisible by 3; 618703572 divisible by 4'
    },
    {
      id: 'unit-digit',
      title: 'Unit Digit in Product',
      formula: 'Check unit digit of base powers',
      description: 'Find last digit of a large product or power',
      example: '81×82×...×89 → unit digit = 0'
    },
    {
      id: 'remainder-theorems',
      title: 'Remainder Concepts',
      formula: '(xⁿ ± aⁿ) divisible by (x ± a)',
      description: 'Useful identity to quickly find remainders',
      example: '(257¹⁶⁶ – 243¹⁶⁶) divisible by 500 → remainder = 0'
    },
    {
      id: 'trailing-zeros',
      title: 'Trailing Zeros in Factorials',
      formula: 'No. of zeros = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ...',
      description: 'Used to count how many zeros are at the end of a factorial or product',
      example: '1×2×...×100 → 24 zeros'
    }
  ],
  mcqs: [
    {
      id: 'ns-q1',
      question: 'Which of the following is NOT a natural number?',
      options: ['1', '0', '5', '100'],
      correctAnswer: 1,
      explanation: 'Natural numbers start from 1, so 0 is not included.',
      difficulty: 'easy',
      source: 'RS Aggarwal Ex.'
    },
    {
      id: 'ns-q2',
      question: 'The least value of * so that 197*5462 is divisible by 9 is:',
      options: ['0', '2', '4', '9'],
      correctAnswer: 1,
      explanation: 'Sum of digits = 34 + x; to be divisible by 9, x = 2.',
      difficulty: 'easy',
      source: 'Ex. 17'
    },
    {
      id: 'ns-q3',
      question: 'Which of the following numbers is NOT a prime number?',
      options: ['241', '337', '391', '571'],
      correctAnswer: 2,
      explanation: '391 = 17 × 23, so it is not prime.',
      difficulty: 'medium',
      source: 'Ex. 13'
    },
    {
      id: 'ns-q4',
      question: 'Which digits should replace * and $ in 62684*$ so that it is divisible by 8 and 5?',
      options: ['4 and 0', '5 and 5', '0 and 0', '4 and 5'],
      correctAnswer: 0,
      explanation: 'Ends in 0 for 5; last 3 digits must be divisible by 8 → * = 4.',
      difficulty: 'medium',
      source: 'Ex. 19'
    },
    {
      id: 'ns-q5',
      question: 'What number is pronounced together when A counts 1–31 (odds only) and B counts 31–1?',
      options: ['15', '17', '19', '21'],
      correctAnswer: 3,
      explanation: 'Both meet at 21 at the same count.',
      difficulty: 'medium',
      source: 'Ex. 10'
    },
    {
      id: 'ns-q6',
      question: 'What is the units digit of 81 × 82 × 83 × ... × 89?',
      options: ['1', '2', '9', '0'],
      correctAnswer: 3,
      explanation: 'Product includes 2 × 5 = 10 → units digit is 0.',
      difficulty: 'easy',
      source: 'Ex. 34'
    },
    {
      id: 'ns-q7',
      question: 'If a number leaves remainder 3 when divided by 6, its square will leave remainder:',
      options: ['0', '1', '2', '3'],
      correctAnswer: 3,
      explanation: '(6k+3)² ≡ 3 mod 6.',
      difficulty: 'easy',
      source: 'Ex. 46'
    },
    {
      id: 'ns-q8',
      question: 'What least number must be added to 1000 to make it divisible by 45?',
      options: ['10', '20', '35', '45'],
      correctAnswer: 2,
      explanation: 'Remainder is 10, so add 35 to make it multiple of 45.',
      difficulty: 'easy',
      source: 'Ex. 26'
    },
    {
      id: 'ns-q9',
      question: 'What is the remainder when (96 + 7) is divided by 8?',
      options: ['0', '1', '7', '8'],
      correctAnswer: 0,
      explanation: 'Uses identity: xⁿ – 1 divisible by (x – 1).',
      difficulty: 'easy',
      source: 'Ex. 47'
    },
    {
      id: 'ns-q10',
      question: 'Which is the smallest 5-digit number divisible by 476?',
      options: ['10000', '10472', '10500', '9999'],
      correctAnswer: 1,
      explanation: '10000 remainder 4 → add (476–4)=472 to get 10472.',
      difficulty: 'easy',
      source: 'Ex. 29'
    },
    {
      id: 'ns-q11',
      question: 'Number of zeros at the end of 1 × 2 × ... × 100?',
      options: ['10', '12', '24', '50'],
      correctAnswer: 2,
      explanation: 'Highest power of 5 in 100! is 24.',
      difficulty: 'medium',
      source: 'Ex. 38'
    },
    {
      id: 'ns-q12',
      question: 'What values of M and N make M39048458N divisible by 8 and 11?',
      options: ['6 and 4', '4 and 6', '2 and 5', '5 and 2'],
      correctAnswer: 0,
      explanation: 'Last 3 digits → N=4; sum diff condition → M=6.',
      difficulty: 'medium',
      source: 'Ex. 22'
    },
    {
      id: 'ns-q13',
      question: 'Which number is divisible by 3?',
      options: ['541326', '5967013', '123456', '987654'],
      correctAnswer: 0,
      explanation: 'Sum of digits = 21 → divisible by 3.',
      difficulty: 'easy',
      source: 'Ex. 16'
    },
    {
      id: 'ns-q14',
      question: 'Common factor of (127127 + 97127) and (12797 + 9797)?',
      options: ['224', '220', '230', '240'],
      correctAnswer: 0,
      explanation: 'Uses xn + an identity → factor is (127+97)=224.',
      difficulty: 'medium',
      source: 'Ex. 51'
    },
    {
      id: 'ns-q15',
      question: 'What is the remainder when (257166 – 243166) is divided by 500?',
      options: ['0', '1', '250', '500'],
      correctAnswer: 0,
      explanation: 'Uses xn – an divisible by x+a for even n → remainder 0.',
      difficulty: 'medium',
      source: 'Ex. 50'
    }
  ]
  
};
