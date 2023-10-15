/* eslint-disable consistent-return */
import React, { useEffect, useRef } from 'react';

import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Expand from '@arcgis/core/widgets/Expand';

type Props = {
  view: __esri.MapView | null,
  setView: React.Dispatch<React.SetStateAction<__esri.MapView | null>>;
  pointsLayerRef: React.MutableRefObject<__esri.FeatureLayer | null>,
};

export const PointFeaturesFilter: React.FC<Props> = ({
  view,
  setView,
  pointsLayerRef,
}) => {
  const expandWidget = useRef<HTMLDivElement | null>(null);
  const pointsLayerView = useRef<__esri.FeatureLayerView | null>(null);

  useEffect(() => {
    const pointsLayer = pointsLayerRef.current;

    if (!view || !pointsLayer) {
      return;
    }

    view.whenLayerView(pointsLayer).then((layerView) => {
      pointsLayerView.current = layerView;

      const seasonsExpand = new Expand({
        view,
        content: expandWidget.current ?? undefined,
        expandIcon: 'filter',
        group: 'top-left',
      });

      seasonsExpand.watch('expanded', () => {
        if (!seasonsExpand.expanded && pointsLayerView.current) {
          pointsLayerView.current.filter = new FeatureFilter();
        }
      });

      const c = view.ui.add(seasonsExpand, 'top-left');

      console.log(view.ui);

      setView(view);
    }).catch((e) => console.log(e));

    console.log(23343);

    return () => {
      // view?.destroy();
    };
  }, [view]);

  return (
    <div ref={expandWidget} className="seasons-filter esri-widget">
      {[
        { type: 'goverment', name: 'Пункт Незламності' },
        { type: 'business', name: 'Пункт Незламності відповідального бізнесу' },
      ].map(({ type, name }) => (
        <button
          type="button"
          key={type}
          className="season-item"
          onClick={() => {
            if (!pointsLayerView.current) {
              return;
            }

            pointsLayerView.current.filter = new FeatureFilter({
              where: `typeOfPoint = '${type}'`,
            });
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
