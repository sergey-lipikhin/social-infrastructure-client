import { DecisionPoint } from './point';

export type Experiment = {
  id: number;
  output: DecisionPoint[];
  iterationsThreshold: number;
};
