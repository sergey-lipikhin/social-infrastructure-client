import Polygon from '@arcgis/core/geometry/Polygon';

export type AreaAttributes = {
  id: number;
  name: string;
};

export type Area = {
  geometry: Polygon,
  attributes: AreaAttributes,
};
