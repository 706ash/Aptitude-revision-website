import { Subtopic } from '../../types';

export const simplificationSubtopic: Subtopic = {
  id: 'simplification',
  title: 'Simplification',
  description: 'This section covers problems that require the simplification of numerical expressions using arithmetic operations and algebraic identities.',
  formulas: [
    {
      id: 'formula-1',
      title: 'Basic Algebraic Identities',
      formula: '(a + b)² = a² + b² + 2ab\n(a² + b²) = ½[(a + b)² + (a – b)²]\na² – b² = (a + b)(a – b)\na³ + b³ = (a + b)(a² – ab + b²)',
      description: 'Essential algebraic identities for simplification: square of sum, sum of squares, difference of squares, and sum of cubes.',
      example: 'Examples: (5 + 3)² = 5² + 3² + 2×5×3 = 64; 7² – 3² = (7 + 3)(7 – 3) = 40.'
    },
    {
      id: 'formula-2',
      title: 'BODMAS Rule',
      formula: 'BODMAS: Brackets, Order (powers/roots), Division, Multiplication, Addition, Subtraction',
      description: 'The order in which operations should be performed: Brackets first, then Orders (powers and roots), followed by Division, Multiplication, Addition, and finally Subtraction.'
    },
    {
      id: 'formula-3',
      title: 'Basic Arithmetic Operations',
      formula: 'Addition (+), Subtraction (−), Multiplication (×), Division (÷), Brackets ( )',
      description: 'The five basic operations used in simplification problems: addition, subtraction, multiplication, division, and the use of brackets.'
    }
  ],
  mcqs: [
    {
      id: 'mcq-1',
      question: 'Simplify: 8888 + 888 + 88 + 8',
      options: ['9992', '9872', '9862', '9900'],
      correctAnswer: 0,
      explanation: '8888 + 888 = 9776, +88 = 9864, +8 = 9872.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    },
    {
      id: 'mcq-2',
      question: 'Simplify: (5793405 × 9999)',
      options: ['57934050000', '57928256595', '57925256595', '57935000000'],
      correctAnswer: 1,
      explanation: 'Use distributive law: 5793405 × (10000 - 1) = 57934050000 - 5793405 = 57928256595.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    },
    {
      id: 'mcq-3',
      question: 'What is the value of: 986 × 137 + 986 × 863?',
      options: ['986000', '98600', '960000', '986863'],
      correctAnswer: 0,
      explanation: '986(137 + 863) = 986 × 1000 = 986000.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    },
    {
      id: 'mcq-4',
      question: 'What is the value of: 983 × 207 – 983 × 107?',
      options: ['98300', '983000', '98310', '97300'],
      correctAnswer: 0,
      explanation: '983(207 – 107) = 983 × 100 = 98300.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    },
    {
      id: 'mcq-5',
      question: 'Simplify: (1605)²',
      options: ['2560025', '2576025', '2605025', '2550025'],
      correctAnswer: 1,
      explanation: '(1600 + 5)² = 1600² + 5² + 2×1600×5 = 2560000 + 25 + 16000 = 2576025.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    },
    {
      id: 'mcq-6',
      question: 'Simplify: (1398)²',
      options: ['1954404', '1944404', '1955404', '1953404'],
      correctAnswer: 0,
      explanation: '(1400 – 2)² = 1400² + 2² – 2×1400×2 = 1960000 + 4 – 5600 = 1954404.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    },
    {
      id: 'mcq-7',
      question: 'Simplify: 475² + 125²',
      options: ['482500', '241250', '302500', '60500'],
      correctAnswer: 1,
      explanation: 'Use (a² + b²) = ½[(a+b)² + (a–b)²]; (475+125)=600, (475–125)=350 → ½[600²+350²] = 241250.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    },
    {
      id: 'mcq-8',
      question: 'Simplify: (796)² – (204)²',
      options: ['592000', '595000', '592200', '595200'],
      correctAnswer: 0,
      explanation: 'a²–b² = (a+b)(a–b); (796+204)=1000, (796–204)=592 ⇒ 1000×592 = 592000.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    },
    {
      id: 'mcq-9',
      question: 'Simplify: 789³ + 211³ / (789² – 789×211 + 211²)',
      options: ['1000', '789', '211', 'None of these'],
      correctAnswer: 0,
      explanation: 'Using identity: a³+b³ = (a+b)(a²–ab+b²) ⇒ Expression = (a+b). So, 789+211 = 1000.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    },
    {
      id: 'mcq-10',
      question: 'Simplify: 658³ – 328³ / (658² + 658×328 + 328²)',
      options: ['330', '986', '990', 'None of these'],
      correctAnswer: 0,
      explanation: 'Using a³–b³ = (a–b)(a²+ab+b²); so, expression = a–b = 658–328 = 330.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017)'
    }
  ]
}; 