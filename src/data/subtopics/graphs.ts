import { Subtopic } from '../../types';

export const graphs: Subtopic = {
  id: 'graphs',
  title: 'Graphs and Charts',
  description: 'Understanding bar charts, line graphs, and pie charts',
  formulas: [
    {
      id: 'pie-chart-angle',
      title: 'Pie Chart Angle',
      formula: 'Angle = (Value / Total) × 360°',
      description: 'Calculate the angle for a sector in a pie chart',
      example: 'If a category represents 25% of data: (25/100) × 360° = 90°'
    },
    {
      id: 'bar-chart-scale',
      title: 'Bar Chart Scale',
      formula: 'Scale = Maximum Value / Maximum Bar Height',
      description: 'Determine the scale used in a bar chart',
      example: 'If max value is 1000 and max bar height is 10cm: Scale = 1000/10 = 100 units/cm'
    },
    {
      id: 'line-graph-slope',
      title: 'Line Graph Slope',
      formula: 'Slope = (y₂ - y₁) / (x₂ - x₁)',
      description: 'Calculate the rate of change in a line graph',
      example: 'Between points (2,10) and (4,20): Slope = (20-10)/(4-2) = 5'
    },
    {
      id: 'trend-analysis',
      title: 'Trend Analysis',
      formula: 'Trend = (End Value - Start Value) / Number of Periods',
      description: 'Calculate average change per period',
      example: 'Sales from 100 to 160 over 4 months: Trend = (160-100)/4 = 15 per month'
    }
  ],
  mcqs: [
    {
      id: 'graph-q1',
      question: 'In a pie chart, if a sector represents 20% of the data, what is its angle?',
      options: ['60°', '72°', '80°', '90°'],
      correctAnswer: 1,
      explanation: 'Angle = (20/100) × 360° = 72°',
      difficulty: 'easy'
    },
    {
      id: 'graph-q2',
      question: 'In a bar chart, if the scale is 1 cm = 50 units and a bar is 6 cm tall, what value does it represent?',
      options: ['250', '300', '350', '400'],
      correctAnswer: 1,
      explanation: 'Value = 6 cm × 50 units/cm = 300 units',
      difficulty: 'medium'
    },
    {
      id: 'graph-q3',
      question: 'If a line graph shows values increasing from 40 to 100 over 5 years, what is the average annual increase?',
      options: ['10', '12', '15', '20'],
      correctAnswer: 1,
      explanation: 'Average increase = (100-40)/5 = 60/5 = 12 per year',
      difficulty: 'medium'
    }
  ]
};