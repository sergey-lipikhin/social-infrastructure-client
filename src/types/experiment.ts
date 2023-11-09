export type Experiment = {
  id: number;
  date: string;
  rate: number;
  points: Point[];
};

export type TypeOfPoint = 'government' | 'business';

export type Point = {
  id: number;
  radius: number;
  typeOfPoint: TypeOfPoint;
  region: string;
  city: string;
  street: string;
  isIncluded: boolean;
  equipment: Equipment;
};

export type Equipment = {
  generator: boolean;
  starlink: boolean;
  fiberInternet: boolean;
};
