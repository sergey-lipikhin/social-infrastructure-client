import React, { useEffect, useRef, useState } from 'react';
import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Point from '@arcgis/core/geometry/Point';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import Circle from '@arcgis/core/geometry/Circle';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';

import Editor from '@arcgis/core/widgets/Editor';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

export const ArcMapView: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const mapDiv = useRef(null);
  const mapRef = useRef<Map | null>(null);

  const [c, setC] = useState(0);

  useEffect(() => {
    console.log(c);
  }, [c]);

  console.log(points);

  useEffect(() => {
    // eslint-disable-next-line max-len
    esriConfig.apiKey = 'AAPK4b4113c9c3744936bfb62773e5264aeephEk2ardc21L5QjW12x19tQAoumUJIo3wOlYStHpMuhNzZTmf7cuv7okg-D0BUPY';

    const myPointsFeatureLayer = new FeatureLayer({
      url: "https://services1.arcgis.com/J4KEg3K5KfnHwu4N/arcgis/rest/services/dsadasdasdasd_as/FeatureServer/0?token=AAPK4b4113c9c3744936bfb62773e5264aeephEk2ardc21L5QjW12x19tQAoumUJIo3wOlYStHpMuhNzZTmf7cuv7okg-D0BUPY",
      apiKey: 'AAPK4b4113c9c3744936bfb62773e5264aeephEk2ardc21L5QjW12x19tQAoumUJIo3wOlYStHpMuhNzZTmf7cuv7okg-D0BUPY',
    });

    console.log(myPointsFeatureLayer);

    mapRef.current = new Map({
      basemap: 'streets-vector',
      layers: [myPointsFeatureLayer],
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
      const point = new Point({
        latitude: event.mapPoint.latitude,
        longitude: event.mapPoint.longitude,
      });

      setPoints(prevState => [...prevState, point]);

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

    console.log(myPointsFeatureLayer.loadStatus);

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
