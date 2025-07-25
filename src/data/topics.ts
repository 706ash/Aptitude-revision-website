import { Topic } from '../types';
import { simplificationSubtopic } from './subtopics/simplification';
import { fractionsAndDecimalsSubtopic } from './subtopics/fractions-and-decimals';
import { numberSystem } from './subtopics/number-system';
import { hcfLcm } from './subtopics/hcf-lcm';
import { percentagesSubtopic } from './subtopics/percentages';
import { tables } from './subtopics/tables';
import { graphs } from './subtopics/graphs';

export const topics: Topic[] = [
  {
    id: 'arithmetic',
    title: 'Arithmetic',
    description: 'Fundamental mathematical operations and number theory',
    icon: 'Calculator',
    subtopics: [
      numberSystem,
      hcfLcm,
      simplificationSubtopic,
      fractionsAndDecimalsSubtopic,
      percentagesSubtopic
    ]
  },
  {
    id: 'data-interpretation',
    title: 'Data Interpretation',
    description: 'Analyzing and interpreting data from various sources',
    icon: 'BarChart3',
    subtopics: [
      tables,
      graphs
    ]
  }
];