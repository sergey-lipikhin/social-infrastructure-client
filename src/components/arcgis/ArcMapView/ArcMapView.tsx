/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Point from '@arcgis/core/geometry/Point';

import Editor from '@arcgis/core/widgets/Editor';
import { createPointsLayer, getPointsData } from '@utils/pointsLayer';
import { hangDrawRadiusOnCLickEvent } from '@utils/hangDrawRadiusOnCLickEvent';
import { createAreasLayer } from '@utils/areasLayer';

export const ArcMapView: React.FC = () => {
  const mapDiv = useRef(null);
  const mapRef = useRef<Map | null>(null);
  const viewRef = useRef<MapView | null>(null);

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
      center: new Point({ latitude: 34.006223186690285, longitude: -118.81267318739927 }),
      zoom: 11,
    });

    const editor = new Editor({
      view,
    });

    hangDrawRadiusOnCLickEvent(view, pointsLayer);

    getPointsData(pointsLayer).then(x => console.log(x));

    view.ui.add(editor, 'top-right');

    return () => view.destroy();
  }, []);

  return (
    <>
      <button
        type='button'
        className='btn btn-warning'
        onClick={() => setC(p => p + 1)}
      >
        Click on me
      </button>
      <p>{c}</p>
      <div ref={mapDiv} className='map-view' />
    </>
  );
};
