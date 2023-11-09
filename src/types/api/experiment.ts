import { Point } from '@cutomTypes/experiment';

export type ExperimentInputPayload = {
  timeThreshold: number,
  hasEquipment: boolean,
  initial: Array<{
    geometry: {
      latitude: number;
      longitude: number;
    },
    attributes: Omit<Point, 'equipment' | 'isIncluded'>,
  }>
};

export type ExperimentOutputPayload = Array<Point>;
