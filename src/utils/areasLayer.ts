import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

export function createAreasLayer(): FeatureLayer {
  return new FeatureLayer({
    url: import.meta.env.VITE_AREAS_LAYER_URL,
  });
}
