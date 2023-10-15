/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Point from '@arcgis/core/geometry/Point';

import Editor from '@arcgis/core/widgets/Editor';
import { createPointsLayer, getPointsData } from '@utils/pointsLayer';
import { hangDrawRadiusOnCLickEvent } from '@utils/hangDrawRadiusOnCLickEvent';
import { createAreasLayer, getAreasData } from '@utils/areasLayer';
import Home from '@arcgis/core/widgets/Home';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';
import Search from '@arcgis/core/widgets/Search';

import './ArcMapView.css';
import { PointFeaturesFilter } from '../PointFeaturesFilter';

export const ArcMapView: React.FC = () => {
  const mapDiv = useRef(null);
  const mapRef = useRef<Map | null>(null);

  const [viewMain, setViewMain] = useState<MapView | null>(null);
  const pointsLayerRef = useRef<__esri.FeatureLayer | null>(null);

  const [c, setC] = useState(0);

  useEffect(() => {
    esriConfig.apiKey = import.meta.env.VITE_API_KEY;

    pointsLayerRef.current = createPointsLayer();
    const pointsLayer = pointsLayerRef.current;
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
    });

    const editor = new Editor({
      view,
    });

    const homeButton = new Home({
      view,
    });

    const ccWidget = new CoordinateConversion({
      view,
    });

    const searchWidget = new Search({
      view,
    });

    // Add the search widget to the top right corner of the view
    // Add the home button to the top left corner of the view

    // editor.viewModel.watch('state', () => {
    //   view.graphics.removeAll();
    // });

    const drawRadiusEventId = hangDrawRadiusOnCLickEvent(view, pointsLayer);

    // getPointsData(pointsLayer).then(x => console.log(x));
    // getAreasData(areasLayer).then(x => console.log(x[0].geometry.centroid));

    view.ui.add(editor, 'top-right');
    view.ui.add(homeButton, 'top-left');
    view.ui.add(searchWidget, 'top-left');
    view.ui.add(ccWidget, 'bottom-leading');

    setViewMain(view);

    return () => {
      drawRadiusEventId.remove();
      viewMain?.destroy();
      console.log('A')
    };
  }, []);

  return (
    <>
      <PointFeaturesFilter
        view={viewMain}
        setView={setViewMain}
        pointsLayerRef={pointsLayerRef}
      />

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
