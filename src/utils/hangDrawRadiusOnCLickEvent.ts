import Graphic from '@arcgis/core/Graphic';
import Circle from '@arcgis/core/geometry/Circle';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { SimpleFillSymbol } from '@arcgis/core/symbols';
import MapView from '@arcgis/core/views/MapView';
import { getRadiusById } from './pointsLayer';

export function hangDrawRadiusOnCLickEvent(
  view: MapView,
  layerToFilter: FeatureLayer,
): IHandle {
  return view.on('click', async (event) => {
    const opts = {
      include: layerToFilter,
      outFields: ['*'],
    };

    view.graphics.removeAll();

    const response = await view.hitTest(event, opts);

    if (response.results.length && 'graphic' in response.results[0]) {
      const {
        geometry: centerPoint,
        attributes,
        layer,
      } = response.results[0].graphic;

      if ('OBJECTID' in attributes) {
        const radius = await getRadiusById(
          layer as FeatureLayer,
          attributes.OBJECTID,
        ) ?? 0;

        const circleGeometry = new Circle({
          center: centerPoint,
          geodesic: true,
          numberOfPoints: 100,
          radius,
          radiusUnit: 'meters',
        });

        const fillSymbol = new SimpleFillSymbol({
          color: [226, 119, 40, 0.2],
          outline: {
            color: [0, 0, 0, 1],
            width: 1,
          },
        });

        const circleGraphic = new Graphic({
          geometry: circleGeometry,
          symbol: fillSymbol,
        });

        view.graphics.add(circleGraphic);
      }
    }
  });
}
