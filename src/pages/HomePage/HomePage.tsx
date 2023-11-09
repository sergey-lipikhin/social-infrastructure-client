import React from 'react';
import { ExperimentForm } from '@components/ExperimentForm';
import { ArcMapView } from '@components/arcgis/ArcMapView';
import { logout } from '@redux/features/authSlice';
import { useAppDispatch } from '@redux/hooks';
import { useNavigate } from 'react-router-dom';
import { FeatureLayerProvider } from '@components/FeatureLayerContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <FeatureLayerProvider>
      <div className="row gx-2 w-100 vh-100 p-2 p-0">
        <div className="col-12 mb-3 mb-md-0 col-md-4">
          <div className="p-3 shadow border">
            <div className="w-100 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-secondary p-absolute top-0"
                onClick={() => {
                  dispatch(logout());
                  navigate('/login');
                }}
              >
                Вийти з системи
              </button>
            </div>

            <ExperimentForm />
          </div>
        </div>

        <div
          className="col-12 col-md-8 border shadow p-0
      articles-admin-page__article-panel z-0"
        >
          <ArcMapView />
        </div>
      </div>
    </FeatureLayerProvider>
  );
};
