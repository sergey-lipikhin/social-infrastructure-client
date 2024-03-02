import { Experiment } from '@cutomTypes/experiment';
import { AreaAttributes } from '@cutomTypes/experiment/areas';
import { PointAttributtes } from '@cutomTypes/experiment/point';

export type MakeExperimentInputPayload = {
  iterationsThreshold: number,
  points: PointAttributtes[];
  areas: AreaAttributes[];
  matrix: Array<Array<number>>;
};

export type MakeExperimentOutputPayload = Experiment;

export type GetExperimentOutputPayload = Experiment[];
