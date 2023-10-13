import Graphic from '@arcgis/core/Graphic';
import Circle from '@arcgis/core/geometry/Circle';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { SimpleFillSymbol } from '@arcgis/core/symbols';
import MapView from '@arcgis/core/views/MapView';

export function hangDrawRadiusOnCLickEvent(
  view: MapView,
  layerToFilter: FeatureLayer,
): IHandle {
  return view.on('click', (event) => {
    const opts = {
      include: layerToFilter,
    };

    view.graphics.removeAll();

    view
      .hitTest(event, opts)
      .then((response) => {
        if (response.results.length && 'graphic' in response.results[0]) {
          const { geometry: centerPoint } = response.results[0].graphic;

          const circleGeometry = new Circle({
            center: centerPoint,
            geodesic: true,
            numberOfPoints: 100,
            radius: 300,
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

          // Add the circle graphic to the map
          view.graphics.add(circleGraphic);
        }
      });
  });
}
