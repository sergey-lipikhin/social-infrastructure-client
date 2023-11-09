import React, { createContext, useRef } from 'react';

type FeatureLayerContextType = {
  pointsLayerRef: React.MutableRefObject<__esri.FeatureLayer | null> | null;
};

export const FeatureLayerContext = createContext<FeatureLayerContextType>({
  pointsLayerRef: null,
});

type FeatureLayerProviderProps = {
  children: React.ReactNode;
};

export const FeatureLayerProvider: React.FC<FeatureLayerProviderProps> = ({
  children,
}) => {
  const pointsLayerRef = useRef<__esri.FeatureLayer | null>(null);

  const value = {
    pointsLayerRef,
  };

  return (
    <FeatureLayerContext.Provider value={value}>
      {children}
    </FeatureLayerContext.Provider>
  );
};
