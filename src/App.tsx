import React, { useState } from 'react';

import { ArcMapView } from '@components/arcgis/ArcMapView';

import './App.css';

export const App: React.FC = () => {
  const [c, setC] = useState(0);

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
      <ArcMapView />
    </>
  );
};
