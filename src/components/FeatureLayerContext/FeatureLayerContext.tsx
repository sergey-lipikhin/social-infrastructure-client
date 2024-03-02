import React, { createContext, useRef } from 'react';

type FeatureLayerContextType = {
  pointsLayerRef: React.MutableRefObject<__esri.FeatureLayer | null> | null;
  areasLayerRef: React.MutableRefObject<__esri.FeatureLayer | null> | null;
};

export const FeatureLayerContext = createContext<FeatureLayerContextType>({
  pointsLayerRef: null,
  areasLayerRef: null,
});

type FeatureLayerProviderProps = {
  children: React.ReactNode;
};

export const FeatureLayerProvider: React.FC<FeatureLayerProviderProps> = ({
  children,
}) => {
  const pointsLayerRef = useRef<__esri.FeatureLayer | null>(null);
  const areasLayerRef = useRef<__esri.FeatureLayer | null>(null);

  const value = {
    pointsLayerRef,
    areasLayerRef,
  };

  return (
    <FeatureLayerContext.Provider value={value}>
      {children}
    </FeatureLayerContext.Provider>
  );
};
