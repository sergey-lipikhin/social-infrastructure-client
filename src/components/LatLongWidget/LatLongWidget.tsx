import React from 'react';

import './LatLongWidget.css';

type Coords = {
  latitude: number,
  longitude: number,
};

type Props = {
  id: string;
  coords: Coords,
};

export const LatLongWidget: React.FC<Props> = ({ coords, id }) => {
  return (
    <div
      id={id}
      className="esri-component lat-long-widget"
    >
      {`lat: ${coords.latitude.toFixed(4)}`}
      &nbsp;
      &nbsp;
      {`lon: ${coords.longitude.toFixed(4)}`}
    </div>
  );
};
