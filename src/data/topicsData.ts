
import { Topic } from '@/types/Topic';
import { arithmeticTopic } from './topics/arithmetic';
import { logicalReasoningTopic } from './topics/logicalReasoning';
import { dataInterpretationTopic } from './topics/dataInterpretation';
import { probabilityTopic } from './topics/probability';
import { puzzlesTopic } from './topics/puzzles';
import { timeWorkTopic } from './topics/timeWork';

export const topicsData: Topic[] = [
  arithmeticTopic,
  logicalReasoningTopic,
  dataInterpretationTopic,
  probabilityTopic,
  puzzlesTopic,
  timeWorkTopic
];
