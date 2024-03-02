/* eslint-disable max-len */
// eslint-disable-next-line object-curly-newline
import React, { useEffect, useRef, useId, useState, useContext } from 'react';
import debouce from 'debounce';
import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Point from '@arcgis/core/geometry/Point';

import Editor from '@arcgis/core/widgets/Editor';
import { createPointsLayer } from '@utils/pointsLayer';
import { drawRadiusEvent } from '@utils/drawRadiusEvent';
import { createAreasLayer } from '@utils/areasLayer';
import Home from '@arcgis/core/widgets/Home';

import Search from '@arcgis/core/widgets/Search';

import './ArcMapView.css';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Expand from '@arcgis/core/widgets/Expand';
import Popup from '@arcgis/core/widgets/Popup';
import { getAddressByLocation } from '@utils/getAddressByLocation';
import { LatLongWidget } from '@components/LatLongWidget';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import { FeatureLayerContext } from '@components/FeatureLayerContext';

type Coords = {
  latitude: number,
  longitude: number,
};

export const ArcMapView: React.FC = () => {
  const mapDiv = useRef(null);
  const mapRef = useRef<Map | null>(null);

  const { pointsLayerRef, areasLayerRef } = useContext(FeatureLayerContext);

  const expandWidget = useRef<HTMLDivElement | null>(null);
  const pointsLayerView = useRef<__esri.FeatureLayerView | null>(null);
  const areasLayerView = useRef<__esri.FeatureLayerView | null>(null);

  const [coords, setCoords] = useState<Coords>({ latitude: 0, longitude: 0 });

  const latLongWidgetId = useId();

  useEffect(() => {
    esriConfig.apiKey = import.meta.env.VITE_API_KEY;

    const pointsLayer = createPointsLayer();
    const areasLayer = createAreasLayer();

    if (pointsLayerRef) {
      pointsLayerRef.current = pointsLayer;
    }

    if (areasLayerRef) {
      areasLayerRef.current = areasLayer;
    }

    // const pointsLayer = new GeoJSONLayer({
    //   url: url,
    //   copyright: "USGS Earthquakes",
    //   popupTemplate: template
    // });

    mapRef.current = new Map({
      basemap: 'streets-vector',
      layers: [pointsLayer, areasLayer],
    });

    const view = new MapView({
      map: mapRef.current,
      container: mapDiv.current ?? undefined,
      center: new Point({
        latitude: 46.3986,
        longitude: 30.7259,
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

      if (!expandWidget.current) {
        return;
      }

      const seasonsExpand = new Expand({
        view,
        content: expandWidget.current,
        expandIcon: 'filter',
        group: 'top-left',
      });

      expandEvent = seasonsExpand.watch('expanded', () => {
        if (!seasonsExpand.expanded && pointsLayerView.current) {
          pointsLayerView.current.filter = new FeatureFilter();
        }
      });

      view.ui.add(seasonsExpand, 'top-left');

      new Promise<void>((resolve) => setTimeout(() => resolve(), 300)).then(() => {
        if (!expandWidget.current) {
          return;
        }

        expandWidget.current.style.display = 'block';
      });
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
    const searchWidget = new Search({ view });
    const ccWidget = new CoordinateConversion({ view });

    view.on('pointer-move', () => {
      const { latitude, longitude } = ccWidget.viewModel.currentLocation;

      setCoords({ latitude, longitude });
    });

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
          editor.viewModel.featureFormViewModel.setValue('radius', 500);
        }
      },
      300,
    ));

    const latLongWidget = document.getElementById(latLongWidgetId);

    if (latLongWidget) {
      view.ui.add(latLongWidget, 'bottom-left');
    }

    view.ui.add(editor, 'top-right');
    view.ui.add(homeButton, 'top-left');
    view.ui.add(searchWidget, 'top-left');

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
          { type: 'government', name: 'Пункт Незламності' },
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

      <div ref={mapDiv} className="map-view" />

      <LatLongWidget
        coords={coords}
        id={latLongWidgetId}
      />
    </>
  );
};
