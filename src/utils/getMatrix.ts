/* eslint-disable no-mixed-operators */
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import { Area } from '@cutomTypes/experiment/areas';
import { Point as PointOfInvincibility } from '@cutomTypes/experiment/point';
import Circle from '@arcgis/core/geometry/Circle';
import Point from '@arcgis/core/geometry/Point';

export function getMatrix(points: PointOfInvincibility[], areas: Area[]) {
  const matrix = points.map(point => {
    const pointGeometry = new Point({
      latitude: point.geometry.latitude,
      longitude: point.geometry.longitude,
    });

    const circle = new Circle({
      center: pointGeometry,
      radius: point.attributes.radius,
      radiusUnit: 'meters',
    });

    return areas.map(area => {
      return geometryEngine.intersects(circle, area.geometry) ? 1 : 0;
    });
  });

  return matrix;
}
