import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import { SimpleRenderer } from '@arcgis/core/renderers';
import { PictureMarkerSymbol } from '@arcgis/core/symbols';

export function createPointsLayer(): FeatureLayer {
  const renderer = new SimpleRenderer({
    symbol: new PictureMarkerSymbol({
      // eslint-disable-next-line max-len
      url: 'http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png',
      width: '18px',
      height: '18px',
    }),
  });

  const label = new LabelClass({
    symbol: {
      type: 'text',
      color: '#FFFFFF',
      haloColor: '#5E8D74',
      haloSize: '2px',
      font: {
        size: '16px',
        family: 'Noto Sans',
        style: 'italic',
        weight: 'normal',
      },
    },
    labelPlacement: 'above-center',
    labelExpressionInfo: {
      expression: '$feature.id',
    },
  });

  return new FeatureLayer({
    url: import.meta.env.VITE_POINTS_LAYER_URL,
    renderer,
    labelingInfo: [label],
  });
}

export async function getPointsData(pointsLayer: FeatureLayer) {
  const query = pointsLayer.createQuery();

  query.where = '1=1';
  query.outFields = ['*'];

  const queryResults = await pointsLayer.queryFeatures(query);

  return queryResults.features.map(({ geometry, attributes }) => ({
    geometry,
    attributes,
  }));
}
