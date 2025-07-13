import { Subtopic } from '../../types';

export const fractionsAndDecimalsSubtopic: Subtopic = {
  id: 'fractions-and-decimals',
  title: 'Fractions & Decimals',
  description: 'Covers decimal fractions, conversions, operations, recurring decimals, and basic algebraic formulae.',
  formulas: [
    {
      id: 'formula-1',
      title: 'Decimal Fractions',
      formula: 'Fractions with denominators as powers of 10',
      description: 'Fractions in which denominators are powers of 10 are known as decimal fractions.',
      example: '1/10 = 0.1 (1 tenth), 1/100 = 0.01 (1 hundredth), 99/100 = 0.99, 7/1000 = 0.007'
    },
    {
      id: 'formula-2',
      title: 'Conversion: Decimal to Vulgar Fraction',
      formula: 'Put 1 in denominator with zeros equal to decimal places, remove decimal point, reduce to lowest terms',
      description: 'Put 1 in the denominator under the decimal point and annex zeros equal to the number of digits after decimal point.',
      example: '0.25 = 25/100 = 1/4; 2.008 = 2008/1000 = 251/125'
    },
    {
      id: 'formula-3',
      title: 'Annexing Zeros',
      formula: 'Adding zeros to right of decimal does not change value',
      description: 'Annexing zeros to the extreme right of a decimal fraction does not change its value.',
      example: '0.8 = 0.80 = 0.800'
    },
    {
      id: 'formula-4',
      title: 'Multiplication by Power of 10',
      formula: 'Shift decimal point right by number of places equal to power of 10',
      description: 'Shift the decimal point to the right by as many places as is the power of 10.',
      example: '5.9632 × 100 = 596.32; 0.073 × 10000 = 730'
    },
    {
      id: 'formula-5',
      title: 'Multiplication of Decimal Fractions',
      formula: 'Multiply without decimal point, then mark decimal places equal to sum of decimal places in factors',
      description: 'Multiply given numbers without decimal point, then mark decimal point in product to have as many decimal places as sum of decimal places in given numbers.',
      example: '0.2 × 0.02 × 0.002 = 0.000008 (2×2×2=8, decimal places: 1+2+3=6)'
    },
    {
      id: 'formula-6',
      title: 'Division by Counting Number',
      formula: 'Divide without decimal point, then put decimal point in quotient to match dividend decimal places',
      description: 'Divide without considering decimal point, then put decimal point in quotient to give as many decimal places as in dividend.',
      example: '0.0204 ÷ 17 = 0.0012 (204÷17=12, dividend has 4 decimal places)'
    },
    {
      id: 'formula-7',
      title: 'Division by Decimal Fraction',
      formula: 'Multiply dividend and divisor by power of 10 to make divisor whole number',
      description: 'Multiply both dividend and divisor by suitable power of 10 to make divisor a whole number, then proceed.',
      example: '0.00066 ÷ 0.11 = (0.00066×100) ÷ (0.11×100) = 0.066 ÷ 11 = 0.006'
    },
    {
      id: 'formula-8',
      title: 'Pure Recurring Decimal to Fraction',
      formula: 'Write repeated figures once in numerator, put as many nines in denominator as repeating figures',
      description: 'Write the repeated figures only once in numerator and take as many nines in denominator as number of repeating figures.',
      example: '0.5 = 5/9; 0.53 = 53/99; 0.067 = 67/999'
    },
    {
      id: 'formula-9',
      title: 'Mixed Recurring Decimal to Fraction',
      formula: 'Numerator: (all digits - non-repeating digits), Denominator: nines for repeating + zeros for non-repeating',
      description: 'Numerator: difference between number formed by all digits and non-repeating digits. Denominator: nines for repeating digits + zeros for non-repeating digits.',
      example: '0.16 = (16-1)/90 = 15/90 = 1/6; 0.2273 = (2273-22)/9900 = 2251/9900'
    },
    {
      id: 'formula-10',
      title: 'Basic Algebraic Formulae',
      formula: '(a+b)(a-b) = a²-b², (a+b)² = a²+b²+2ab, (a-b)² = a²+b²-2ab',
      description: 'Essential algebraic identities for calculations.',
      example: '(a+b+c)² = a²+b²+c²+2(ab+bc+ca), (a³+b³) = (a+b)(a²-ab+b²)'
    }
  ],
  mcqs: [
    {
      id: 'mcq-1',
      question: 'Which is greater: 5/6 or 7/9?',
      options: ['5/6', '7/9', 'Equal', 'Cannot be determined'],
      correctAnswer: 0,
      explanation: 'Convert to decimals: 5/6 ≈ 0.833, 7/9 ≈ 0.778.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q3, Page 72'
    },
    {
      id: 'mcq-2',
      question: 'What is 2.75 as a fraction?',
      options: ['11/4', '27/10', '7/4', '5/2'],
      correctAnswer: 0,
      explanation: '2.75 = 2 + 0.75 = 2 + 3/4 = 11/4.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q5, Page 73'
    },
    {
      id: 'mcq-3',
      question: 'Add: 3/4 + 2/3',
      options: ['17/12', '5/7', '13/12', '1 5/12'],
      correctAnswer: 0,
      explanation: 'LCM of 4 and 3 is 12; 3/4 = 9/12, 2/3 = 8/12. Sum = 17/12.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q8, Page 75'
    },
    {
      id: 'mcq-4',
      question: 'Subtract: 5.5 – 2.75',
      options: ['2.25', '2.75', '3.25', '3.75'],
      correctAnswer: 0,
      explanation: '5.5 – 2.75 = 2.75.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q11, Page 77'
    },
    {
      id: 'mcq-5',
      question: 'Multiply: 2.5 × 0.4',
      options: ['1.0', '1.2', '1.4', '1.5'],
      correctAnswer: 1,
      explanation: '2.5 × 0.4 = 1.0.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q13, Page 78'
    },
    {
      id: 'mcq-6',
      question: 'What is 3.6 ÷ 0.2?',
      options: ['18', '1.8', '0.18', '0.2'],
      correctAnswer: 0,
      explanation: '3.6 ÷ 0.2 = 36 ÷ 2 = 18.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q15, Page 79'
    },
    {
      id: 'mcq-7',
      question: 'Simplify: 1/2 + 2/3 + 3/4',
      options: ['23/12', '2', '13/12', '17/12'],
      correctAnswer: 0,
      explanation: 'LCM is 12. So: 6/12 + 8/12 + 9/12 = 23/12.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q19, Page 81'
    },
    {
      id: 'mcq-8',
      question: 'If 0.25 of a number is 20, what is the number?',
      options: ['50', '60', '70', '80'],
      correctAnswer: 3,
      explanation: '0.25 × N = 20 ⇒ N = 80.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q22, Page 83'
    },
    {
      id: 'mcq-9',
      question: 'What is the reciprocal of 0.8?',
      options: ['1.25', '0.125', '0.25', '1.5'],
      correctAnswer: 0,
      explanation: 'Reciprocal: 1 ÷ 0.8 = 1.25.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q24, Page 84'
    },
    {
      id: 'mcq-10',
      question: 'Find the average of 2.5, 3.5 and 4.5.',
      options: ['3.5', '4.0', '3.0', '3.25'],
      correctAnswer: 0,
      explanation: '(2.5 + 3.5 + 4.5)/3 = 10.5/3 = 3.5.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q28, Page 86'
    }
  ]
}; 