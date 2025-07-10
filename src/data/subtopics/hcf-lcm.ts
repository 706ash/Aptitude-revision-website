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
      description: 'Find the HCF by multiplying the lowest powers of all common prime factors.',
      example: 'HCF(12, 18) = 2¹ × 3¹ = 6'
    },
    {
      id: 'lcm-formula',
      title: 'LCM using Prime Factorization',
      formula: 'LCM = Product of highest powers of all prime factors',
      description: 'Find the LCM by multiplying the highest powers of all prime factors present.',
      example: 'LCM(12, 18) = 2² × 3² = 36'
    },
    {
      id: 'hcf-lcm-relation',
      title: 'HCF × LCM Relation',
      formula: 'HCF(a,b) × LCM(a,b) = a × b',
      description: 'The product of the HCF and LCM of two numbers equals the product of the numbers.',
      example: '6 × 36 = 216 = 12 × 18'
    },
    {
      id: 'euclidean-algorithm',
      title: 'Euclidean Algorithm for HCF',
      formula: 'HCF(a,b) = HCF(b, a mod b)',
      description: 'Use the Euclidean algorithm to find the HCF by repeated division.',
      example: 'HCF(48,18): 48 = 18×2+12 ⇒ HCF(18,12) ⇒ HCF(12,6)=6'
    }
  ],
  mcqs: [
    {
      id: 'hcf-q1',
      question: 'Find the HCF of 42, 63 and 140.',
      options: ['2', '7', '14', '21'],
      correctAnswer: 1,
      explanation: '42=2×3×7, 63=3²×7, 140=2²×5×7 ⇒ HCF=7.',
      difficulty: 'easy',
      source: 'RS Aggarwal, Ex. 2, Ex. 2(a), Page 52'
    },
    {
      id: 'hcf-q2',
      question: 'Find the HCF of 108, 288 and 360.',
      options: ['12', '24', '36', '72'],
      correctAnswer: 2,
      explanation: '108=2²×3³, 288=2⁵×3², 360=2³×3²×5 ⇒ HCF=2²×3²=36.',
      difficulty: 'easy',
      source: 'RS Aggarwal, Ex. 2, Ex. 2(b), Page 52'
    },
    {
      id: 'hcf-q3',
      question: 'Find the HCF of 513, 1134 and 1215.',
      options: ['9', '27', '81', '243'],
      correctAnswer: 1,
      explanation: 'Using division: HCF(513,1134)=27, then with 1215 ⇒ HCF=27.',
      difficulty: 'medium',
      source: 'RS Aggarwal, Ex. 2, Ex. 3, Page 52'
    },
    {
      id: 'lcm-q1',
      question: 'Find the LCM of 87 and 145.',
      options: ['435', '870', '725', '1015'],
      correctAnswer: 0,
      explanation: '87=3×29, 145=5×29 ⇒ LCM=3×5×29=435.',
      difficulty: 'easy',
      source: 'RS Aggarwal, Ex. 2, Ex. 6(a), Page 53'
    },
    {
      id: 'lcm-q2',
      question: 'Find the LCM of 72, 108 and 2100.',
      options: ['3780', '7560', '15120', '37800'],
      correctAnswer: 3,
      explanation: '72=2³×3², 108=2²×3³, 2100=2²×3×5²×7 ⇒ LCM=2³×3³×5²×7=37800.',
      difficulty: 'medium',
      source: 'RS Aggarwal, Ex. 2, Ex. 6(b), Page 53'
    },
    {
      id: 'fraction-q1',
      question: 'Find the HCF of fractions 2/3, 4/9, 8/81 and 10/27.',
      options: ['1/81', '1/27', '2/81', '2/3'],
      correctAnswer: 2,
      explanation: 'HCF(num)=2, LCM(den)=81 ⇒ HCF=2/81.',
      difficulty: 'hard',
      source: 'RS Aggarwal, Ex. 2, Ex. 8, Page 54'
    },
    {
      id: 'decimal-q1',
      question: 'Find the LCM of 0.63, 1.05 and 2.1.',
      options: ['0.63', '1.26', '6.3', '630'],
      correctAnswer: 2,
      explanation: 'Without decimals: LCM(63,105,210)=630 ⇒ with decimals: 6.30.',
      difficulty: 'hard',
      source: 'RS Aggarwal, Ex. 2, Ex. 9, Page 54'
    },
    {
      id: 'ratio-q1',
      question: 'Two numbers are in the ratio 15:11. If HCF is 13, find the numbers.',
      options: ['143 & 195', '195 & 143', '120 & 88', '156 & 114'],
      correctAnswer: 1,
      explanation: 'Numbers=15×13 & 11×13=195 & 143.',
      difficulty: 'medium',
      source: 'RS Aggarwal, Ex. 2, Ex. 10, Page 54'
    },
    {
      id: 'word-q1',
      question: 'Find the largest possible length that can measure 4m95cm, 9m and 16m65cm exactly.',
      options: ['15 cm', '45 cm', '55 cm', '90 cm'],
      correctAnswer: 1,
      explanation: 'Convert: 495cm, 900cm, 1665cm ⇒ HCF=45cm.',
      difficulty: 'medium',
      source: 'RS Aggarwal, Ex. 2, Ex. 15, Page 55'
    },
    {
      id: 'remainders-q1',
      question: 'Find the greatest number that divides 62, 132, 237 leaving the same remainder.',
      options: ['17', '35', '40', '70'],
      correctAnswer: 1,
      explanation: 'Diffs: 132–62=70, 237–132=105, 237–62=175 ⇒ HCF=35.',
      difficulty: 'hard',
      source: 'RS Aggarwal, Ex. 2, Ex. 17, Page 55'
    }
  ]
};
