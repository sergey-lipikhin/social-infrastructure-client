import { GeoPoint } from '@cutomTypes/geo-point';

export type TypeOfPoint = 'government' | 'business';

export type PointAttributtes = {
  id: number;
  radius: number;
  typeOfPoint: TypeOfPoint;
  region: string;
  city: string;
  street: string;
};

export type Point = {
  geometry: GeoPoint;
  attributes: PointAttributtes;
};

export type DecisionPoint = PointAttributtes & {
  isIncluded: boolean;
};
