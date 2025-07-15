import { Subtopic } from '../../types';

export const percentagesSubtopic: Subtopic = {
  id: 'percentages',
  title: 'Percentages',
  description: 'Covers all percentage basics, conversions, increase/decrease, profit-loss linkage, and applications.',
  formulas: [
    {
      id: 'formula-1',
      title: 'Definition of Percentage',
      formula: 'Percentage = (Value / Total Value) × 100%',
      description: 'A fraction expressed out of 100.',
      example: '20 out of 50: (20/50)×100% = 40%.'
    },
    {
      id: 'formula-2',
      title: 'Finding a Number when Percentage is Given',
      formula: 'Required Number = (Given Value × 100) / Percentage%',
      description: 'Useful to find the base value.',
      example: 'If 25% of X = 50, then X = (50×100)/25 = 200.'
    },
    {
      id: 'formula-3',
      title: 'Percentage Increase / Decrease',
      formula: 'Change% = [(New – Old)/Old] × 100%',
      description: 'Used to find profit, loss, or growth.',
      example: 'Old: 200, New: 250 → Change% = (50/200)×100% = 25% increase.'
    },
    {
      id: 'formula-4',
      title: 'Converting Percentage to Fraction',
      formula: 'Divide the percentage by 100.',
      description: 'Quick fraction equivalents help in mental math.',
      example: '25% = 1/4, 20% = 1/5.'
    },
    {
      id: 'formula-5',
      title: 'Successive Percentage Change',
      formula: 'Net % change = a + b + (ab)/100',
      description: 'When two percentage changes happen one after another.',
      example: 'If a good gains 20% and then loses 10%: Net% = 20 + (–10) + (20×–10)/100 = 8%.'
    }
  ],
  mcqs: [
    {
      id: 'mcq-1',
      question: 'What is 25% of 200?',
      options: ['25', '40', '50', '60'],
      correctAnswer: 2,
      explanation: '25% of 200 = (25/100)×200 = 50.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q1, Page 309'
    },
    {
      id: 'mcq-2',
      question: 'What percent of 60 is 15?',
      options: ['20%', '25%', '30%', '35%'],
      correctAnswer: 1,
      explanation: '(15/60)×100% = 25%',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q4, Page 310'
    },
    {
      id: 'mcq-3',
      question: 'Express 0.2 as a percent.',
      options: ['2%', '5%', '20%', '50%'],
      correctAnswer: 2,
      explanation: '0.2 × 100% = 20%',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q6, Page 311'
    },
    {
      id: 'mcq-4',
      question: 'What is 20% more than 150?',
      options: ['160', '170', '180', '190'],
      correctAnswer: 2,
      explanation: '20% of 150 = 30, so 150 + 30 = 180.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q9, Page 312'
    },
    {
      id: 'mcq-5',
      question: 'If 40% of a number is 80, what is the number?',
      options: ['180', '160', '200', '220'],
      correctAnswer: 2,
      explanation: 'Let number = x: 40% of x = 80 → (40/100)×x = 80 → x = 200.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q13, Page 313'
    },
    {
      id: 'mcq-6',
      question: 'In an election, a candidate gets 60% of the total votes and wins by 1200 votes. Find the total votes.',
      options: ['3000', '4000', '5000', '6000'],
      correctAnswer: 1,
      explanation: 'Let total votes = x. Winner: 60%, Loser: 40%. So diff = 20% = 1200 ⇒ x = (1200×100)/20 = 6000.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q18, Page 314'
    },
    {
      id: 'mcq-7',
      question: 'Price of an article increased by 20% and then decreased by 20%. Net effect?',
      options: ['No change', '4% increase', '4% decrease', '2% increase'],
      correctAnswer: 2,
      explanation: 'Net% = 20 + (–20) + (20×–20)/100 = –4% decrease.',
      difficulty: 'medium',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q23, Page 316'
    },
    {
      id: 'mcq-8',
      question: 'What percent is 3/5 of 50?',
      options: ['30%', '40%', '50%', '60%'],
      correctAnswer: 3,
      explanation: '3/5 of 50 = 30; so (30/50)×100% = 60%.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q27, Page 317'
    },
    {
      id: 'mcq-9',
      question: 'What is 125% of 80?',
      options: ['85', '90', '95', '100'],
      correctAnswer: 3,
      explanation: '125% of 80 = (125/100)×80 = 100.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q30, Page 319'
    },
    {
      id: 'mcq-10',
      question: 'What percentage of 500 is 45?',
      options: ['9%', '10%', '11%', '12%'],
      correctAnswer: 0,
      explanation: '(45/500)×100% = 9%.',
      difficulty: 'easy',
      source: 'RS Aggarwal Quantitative Aptitude (Reprint 2017), Q33, Page 320'
    }
  ]
};