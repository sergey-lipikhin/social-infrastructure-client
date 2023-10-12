import React, { useEffect, useRef } from 'react';
import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Point from '@arcgis/core/geometry/Point';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';

export const ArcMapView: React.FC = () => {
  const mapDiv = useRef(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    // eslint-disable-next-line max-len
    esriConfig.apiKey = 'AAPK4b4113c9c3744936bfb62773e5264aeephEk2ardc21L5QjW12x19tQAoumUJIo3wOlYStHpMuhNzZTmf7cuv7okg-D0BUPY';

    mapRef.current = new Map({
      basemap: 'streets-vector',
    });

    const view = new MapView({
      map: mapRef.current,
      container: mapDiv.current ?? undefined,
      center: new Point({ latitude: 47.833289, longitude: 35.149832 }),
      zoom: 9,
    });

    const graphicsLayer = new GraphicsLayer();

    mapRef.current.add(graphicsLayer);

    view.on('click', (event) => {
      const markerSymbol = {
        type: 'simple-marker',
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 2,
        },
      };

      const graphic = new Graphic({
        geometry: new Point({
          latitude: event.mapPoint.latitude,
          longitude: event.mapPoint.longitude,
        }),
        symbol: markerSymbol,
      });

      graphicsLayer.add(graphic);
    });

    return () => view.destroy();
  }, []);

  return (
    <div ref={mapDiv} className="map-view" />
  );
};
