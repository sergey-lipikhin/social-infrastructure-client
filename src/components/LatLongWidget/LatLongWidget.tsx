import React, { useEffect, useState } from 'react';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';

import './LatLongWidget.css';

type Coords = {
  latitude: number,
  longitude: number,
};

type Props = {
  viewRef: React.MutableRefObject<__esri.MapView | null>,
  id: string;
};

export const LatLongWidget: React.FC<Props> = ({ viewRef, id }) => {
  const [coords, setCoords] = useState<Coords>({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const view = viewRef.current;

    if (!view) {
      return;
    }

    const ccWidget = new CoordinateConversion({ view });

    view.on('pointer-move', () => {
      const { latitude, longitude } = ccWidget.viewModel.currentLocation;

      setCoords({ latitude, longitude });
    });
  }, [viewRef]);

  return (
    <div
      id={id}
      className="esri-component lat-long-widget"
    >
      {`${coords.latitude} ${coords.longitude}`}
    </div>
  );
};
