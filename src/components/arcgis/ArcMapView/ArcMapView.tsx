import React, { useCallback, useEffect, useRef, useState } from 'react';
import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Point from '@arcgis/core/geometry/Point';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import Circle from '@arcgis/core/geometry/Circle';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';

export const ArcMapView: React.FC = () => {
  const mapDiv = useRef(null);
  const mapRef = useRef<Map | null>(null);

  const [c, setC] = useState(0);

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
      if (c % 2 === 0) {
        console.log(c);
      }
      console.log(c);

      const point = new Point({
        latitude: event.mapPoint.latitude,
        longitude: event.mapPoint.longitude,
      });

      const markerSymbol = {
        type: 'simple-marker',
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 2,
        },
      };

      const graphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
      });

      graphicsLayer.add(graphic);

      const circleGeometry = new Circle({
        center: point,
        geodesic: true,
        numberOfPoints: 100,
        radius: 5,
        radiusUnit: 'kilometers',
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

      graphicsLayer.add(circleGraphic);

      graphicsLayer.add(circleGraphic);
    });

    return () => view.destroy();
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => setC(p => p + 1)}
      >
        Click on me
      </button>
      <p>{c}</p>
      <div ref={mapDiv} className="map-view" />
    </>
  );
};
