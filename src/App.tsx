import React, { useEffect, useRef } from 'react';
import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import './App.css';

export const App: React.FC = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line max-len
    esriConfig.apiKey = 'AAPK4b4113c9c3744936bfb62773e5264aeephEk2ardc21L5QjW12x19tQAoumUJIo3wOlYStHpMuhNzZTmf7cuv7okg-D0BUPY';

    const map = new Map({
      basemap: 'osm-standard',
    });

    const view = new MapView({
      map,
      container: mapRef.current ?? undefined,
      center: [-112, 38],
      zoom: 13,
    });

    return () => view.destroy();
  }, []);

  return (
    <>
      <div ref={mapRef} className="map-view" />
    </>
  );
};
