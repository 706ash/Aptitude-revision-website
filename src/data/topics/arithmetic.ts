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
      id: 'number-system',
      title: 'Number System: Key Concepts & Patterns',
      description: 'Covers types of numbers, divisibility, primes, factors, series, unit digits, remainders, decimals, digital roots, and special numbers as per R.S. Aggarwal and competitive exam standards.',
      estimatedTime: '45 mins',
      formulas: [
        {
          id: 'lcm-hcf',
          title: 'LCM and HCF Formula',
          formula: 'LCM(a, b) = (a × b) / HCF(a, b)',
          description: 'Find the Least Common Multiple (LCM) and Highest Common Factor (HCF) of two numbers.',
          example: 'LCM(12, 18) = (12 × 18) / 6 = 36',
          variables: {
            'a': 'First number',
            'b': 'Second number',
            'HCF(a, b)': 'Highest Common Factor of a and b'
          }
        },
        {
          id: 'ap-nth-term',
          title: 'Arithmetic Progression (AP) nth Term',
          formula: 'a_n = a + (n-1)d',
          description: 'Find the nth term of an arithmetic progression.',
          example: 'If a = 2, d = 3, n = 4: a_4 = 2 + (4-1)×3 = 11',
          variables: {
            'a': 'First term',
            'd': 'Common difference',
            'n': 'Term number'
          }
        },
        {
          id: 'gp-nth-term',
          title: 'Geometric Progression (GP) nth Term',
          formula: 'a_n = a × r^{n-1}',
          description: 'Find the nth term of a geometric progression.',
          example: 'If a = 2, r = 3, n = 4: a_4 = 2 × 3^{3} = 54',
          variables: {
            'a': 'First term',
            'r': 'Common ratio',
            'n': 'Term number'
          }
        },
        {
          id: 'digital-root',
          title: 'Digital Root',
          formula: 'Digital Root of n = n mod 9 (if n not divisible by 9, else 9)',
          description: 'Find the digital root (repeated sum of digits) of a number.',
          example: 'Digital root of 123 = 1+2+3 = 6',
          variables: {
            'n': 'Any integer'
          }
        }
      ],
      keyNotes: [
        {
          id: 'number-types',
          title: 'Types of Numbers',
          content: [
            '• Natural Numbers: Counting numbers (1, 2, 3, ...)',

            '• Whole Numbers: Natural numbers including zero (0, 1, 2, ...)',

            '• Integers: Whole numbers and their negatives (..., -2, -1, 0, 1, 2, ...)',

            '• Rational Numbers: Numbers expressible as a fraction p/q, where p and q are integers and q ≠ 0 (e.g., 1/2, 0.75, -4)',

            '• Irrational Numbers: Numbers that cannot be expressed as a fraction, e.g., √2, π',

            '• Real Numbers: All numbers on the number line, including rational and irrational',

            '• Complex Numbers: Numbers of the form a + bi, where i = √-1'
          ].join('\n'),
          type: 'definition',
          importance: 'high'
        },
        {
          id: 'divisibility-rules',
          title: 'Divisibility Rules',
          content: [
            '• 2: Last digit is even (0, 2, 4, 6, 8)',

            '• 3: Sum of digits divisible by 3',

            '• 4: Last two digits form a number divisible by 4',

            '• 5: Last digit is 0 or 5',

            '• 6: Divisible by both 2 and 3',

            '• 9: Sum of digits divisible by 9',

            '• 11: Difference between sum of digits in odd and even positions is 0 or divisible by 11'
          ].join('\n'),
          type: 'tip',
          importance: 'high'
        },
        {
          id: 'prime-composite',
          title: 'Prime & Composite Numbers',
          content: [
            '• Prime: Greater than 1, only two factors (1 and itself), e.g., 2, 3, 5, 7',

            '• Composite: More than two factors, e.g., 4, 6, 8, 9',

            '• Co-prime: Two numbers with GCD = 1',

            '• Prime tests: Trial division, sieve methods'
          ].join('\n'),
          type: 'concept',
          importance: 'high'
        },
        {
          id: 'factors-multiples',
          title: 'Factors & Multiples',
          content: [
            '• Factors: Numbers that divide a given number without remainder',

            '• Multiples: Numbers obtained by multiplying a given number by integers',

            '• HCF: Use Euclidean algorithm or prime factorization',

            '• LCM: LCM(a, b) = (a × b) / HCF(a, b)'
          ].join('\n'),
          type: 'concept',
          importance: 'high'
        },
        {
          id: 'series-patterns',
          title: 'Number Series & Patterns',
          content: [
            '• AP: Sequence with constant difference, a_n = a + (n-1)d',

            '• GP: Sequence with constant ratio, a_n = a × r^{n-1}',

            '• Other: Squares (1, 4, 9, ...), cubes (1, 8, 27, ...), alternating patterns'
          ].join('\n'),
          type: 'concept',
          importance: 'medium'
        },
        {
          id: 'units-digit-cyclicity',
          title: 'Unit’s Digit & Cyclicity',
          content: [
            'Cyclicity for powers:',
            '• 2: 2,4,8,6 (cycle 4)',
            '• 3: 3,9,7,1 (cycle 4)',
            '• 4: 4,6 (cycle 2)',
            '• 5: 5 (cycle 1)',
            '• 6: 6 (cycle 1)',
            '• 7: 7,9,3,1 (cycle 4)',
            '• 8: 8,4,2,6 (cycle 4)',
            '• 9: 9,1 (cycle 2)',

            'Application: Find unit digit of large powers using cycles'
          ].join('\n'),
          type: 'tip',
          importance: 'medium'
        },
        {
          id: 'remainder-theorems',
          title: 'Remainder Theorems',
          content: [
            '• Basic: n mod d is the remainder when n is divided by d',

            '• Chinese Remainder Theorem: Solves systems of congruences for coprime moduli',

            '• Fermat’s Little Theorem: For prime p, a^{p-1} ≡ 1 mod p (if p does not divide a)',

            '• Wilson’s Theorem: For prime p, (p-1)! ≡ -1 mod p'
          ].join('\n'),
          type: 'concept',
          importance: 'medium'
        },
        {
          id: 'decimal-patterns',
          title: 'Fraction & Decimal Patterns',
          content: [
            '• Recurring decimals: Rational numbers may have repeating decimal expansions (e.g., 1/3 = 0.333...)',

            '• To convert recurring decimal to fraction: Let x = 0.333..., 10x = 3.333..., 10x - x = 9x = 3, x = 1/3'
          ].join('\n'),
          type: 'concept',
          importance: 'medium'
        },
        {
          id: 'digital-root',
          title: 'Sum of Digits & Digital Root',
          content: [
            '• Digital root: Sum digits until a single digit remains (e.g., 123 → 1+2+3=6)',

            '• Property: Digital root of n is n mod 9 (if n not divisible by 9, else 9)',

            '• Used for divisibility by 9 and pattern finding'
          ].join('\n'),
          type: 'concept',
          importance: 'medium'
        },
        {
          id: 'special-numbers',
          title: 'Special Numbers',
          content: [
            '• Perfect: Equal to sum of proper divisors (e.g., 6 = 1+2+3)',

            '• Palindrome: Reads same forward and backward (e.g., 121)',

            '• Armstrong: Sum of digits raised to power of number of digits (e.g., 153 = 1^3+5^3+3^3)'
          ].join('\n'),
          type: 'definition',
          importance: 'low'
        },
        {
          id: 'problem-strategies',
          title: 'Common Problem Types & Strategies',
          content: [
            '• Finding Factors: Use prime factorization or factor counting',

            '• LCM/HCF: For events coinciding (LCM) or dividing into equal parts (HCF)',

            '• Remainder: Use modular arithmetic or cyclicity',

            '• Sequence: Identify pattern (AP, GP, etc.) and use formulas',

            '• Unit’s Digit: Use cyclicity for large exponents'
          ].join('\n'),
          type: 'trick',
          importance: 'high'
        }
      ]
    }
  ]
};
