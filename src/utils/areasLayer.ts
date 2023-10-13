import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Polygon from '@arcgis/core/geometry/Polygon';

export function createAreasLayer(): FeatureLayer {
  return new FeatureLayer({
    url: import.meta.env.VITE_AREAS_LAYER_URL,
    title: 'Область проживання',
  });
}

export async function getAreasData(pointsLayer: FeatureLayer) {
  const query = pointsLayer.createQuery();

  query.where = '1=1';
  query.outFields = ['*'];

  const queryResults = await pointsLayer.queryFeatures(query);

  return queryResults.features.map(({ geometry, attributes }) => ({
    geometry: geometry as Polygon,
    attributes,
  }));
}
