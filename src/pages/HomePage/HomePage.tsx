import { ArcMapView } from '@components/arcgis/ArcMapView';
import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <div className="row gx-2 w-100 vh-100 p-2 p-0">
      <div className="col-12 mb-3 mb-md-0 col-md-4">
        <div className="p-3 shadow border">
          Hello
        </div>
      </div>

      <div
        className="col-12 col-md-8 border shadow p-0
      articles-admin-page__article-panel z-0"
      >
        <ArcMapView />
      </div>
    </div>
  );
};
