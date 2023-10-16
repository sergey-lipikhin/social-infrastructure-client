/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import debouce from 'debounce';
import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Point from '@arcgis/core/geometry/Point';

import Editor from '@arcgis/core/widgets/Editor';
import { createPointsLayer, getPointsData } from '@utils/pointsLayer';
import { drawRadiusEvent } from '@utils/drawRadiusEvent';
import { createAreasLayer, getAreasData } from '@utils/areasLayer';
import Home from '@arcgis/core/widgets/Home';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';
import Search from '@arcgis/core/widgets/Search';

import './ArcMapView.css';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Expand from '@arcgis/core/widgets/Expand';
import Popup from '@arcgis/core/widgets/Popup';
import { getAddressByLocation } from '@utils/getAddressByLocation';

export const ArcMapView: React.FC = () => {
  const mapDiv = useRef(null);
  const mapRef = useRef<Map | null>(null);

  const expandWidget = useRef<HTMLDivElement | null>(null);
  const pointsLayerView = useRef<__esri.FeatureLayerView | null>(null);
  const areasLayerView = useRef<__esri.FeatureLayerView | null>(null);

  const [c, setC] = useState(0);

  useEffect(() => {
    esriConfig.apiKey = import.meta.env.VITE_API_KEY;

    const pointsLayer = createPointsLayer();
    const areasLayer = createAreasLayer();

    mapRef.current = new Map({
      basemap: 'streets-vector',
      layers: [pointsLayer, areasLayer],
    });

    const view = new MapView({
      map: mapRef.current,
      container: mapDiv.current ?? undefined,
      center: new Point({
        latitude: 47.826334,
        longitude: 35.157650,
      }),
      zoom: 11,
      popup: new Popup({
        dockEnabled: true,
        dockOptions: {
          buttonEnabled: false,
          breakpoint: false,
          position: 'bottom-left',
        },
        visibleElements: {
          closeButton: false,
        },
      }),
    });

    let expandEvent: IHandle; let pointClickEvent: IHandle;

    view.whenLayerView(pointsLayer).then((layerView) => {
      pointsLayerView.current = layerView;

      const seasonsExpand = new Expand({
        view,
        content: expandWidget.current ?? undefined,
        expandIcon: 'filter',
        group: 'top-left',
      });

      expandEvent = seasonsExpand.watch('expanded', () => {
        if (!seasonsExpand.expanded && pointsLayerView.current) {
          pointsLayerView.current.filter = new FeatureFilter();
        }
      });

      view.ui.add(seasonsExpand, 'top-left');
    });

    view.whenLayerView(areasLayer).then((layerView) => {
      areasLayerView.current = layerView;

      pointClickEvent = drawRadiusEvent(
        view,
        pointsLayer,
        areasLayerView.current,
      );
    });

    // getPointsData(pointsLayer).then(x => console.log(x));
    // getAreasData(areasLayer).then(x => console.log(x[0].geometry.centroid));

    const editor = new Editor({ view });
    const homeButton = new Home({ view });
    const ccWidget = new CoordinateConversion({ view });
    const searchWidget = new Search({ view });

    editor.viewModel.sketchViewModel.on('update', debouce(
      async (event) => {
        const { geometry } = event.graphics[0];

        if ('longitude' in geometry && 'latitude' in geometry) {
          const address = await getAddressByLocation(new Point({
            latitude: geometry.latitude as number,
            longitude: geometry.longitude as number,
          }));

          if (!address) {
            return;
          }

          editor.viewModel.featureFormViewModel.setValue('region', address.region);
          editor.viewModel.featureFormViewModel.setValue('city', address.city);
          editor.viewModel.featureFormViewModel.setValue('street', address.street);
        }
      },
      300,
    ));

    view.ui.add(editor, 'top-right');
    view.ui.add(homeButton, 'top-left');
    view.ui.add(searchWidget, 'top-left');
    view.ui.add(ccWidget, 'bottom-right');

    return () => {
      expandEvent.remove();
      pointClickEvent.remove();
      view.destroy();
    };
  }, []);

  return (
    <>
      <div ref={expandWidget} className="seasons-filter esri-widget">
        {[
          { type: 'goverment', name: 'Пункт Незламності' },
          { type: 'business', name: 'Пункт Незламності відповідального бізнесу' },
        ].map(({ type, name }) => (
          <button
            type="button"
            key={type}
            className="season-item"
            onClick={() => {
              if (!pointsLayerView.current) {
                return;
              }

              pointsLayerView.current.filter = new FeatureFilter({
                where: `typeOfPoint = '${type}'`,
              });
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <button
        type='button'
        className='btn btn-warning'
        onClick={() => { setC((p) => p + 1) }}
      >
        Click on me
      </button>
      <p>{c}</p>
      <div ref={mapDiv} className='map-view' />
    </>
  );
};
