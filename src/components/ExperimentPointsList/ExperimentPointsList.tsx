import React from 'react';
import cn from 'classnames';
import { DecisionPoint } from '@cutomTypes/experiment/point';

type Props = {
  points: DecisionPoint[];
};

export const ExperimentPointsList: React.FC<Props> = ({ points }) => {
  return (
    points.map(point => (
      <div
        className="d-flex justify-content-start ms-5 mt-2"
        style={{ fontSize: 12 }}
      >
        <img
          src={point.typeOfPoint === 'business'
            ? `${import.meta.env.VITE_API_URL}/img/pn_icon.svg`
            : `${import.meta.env.VITE_API_URL}/img/pn_yellow.svg`}
          style={{ width: 40, height: 40 }}
          alt="goverment place"
        />

        <div
          className="col-6 d-flex
          align-items-center text-start ms-3"
        >
          {`${point.id} ${point.region}, ${point.city}, ${point.street}`}
        </div>

        <div
          className={cn(
            'col-6 d-flex justify-content-center',
            'align-items-center text-start ms-3',
            {
              'text-success': point.isIncluded,
              'text-danger': !point.isIncluded,
            },
          )}
        >
          {point.isIncluded ? 'Залишити' : 'Прибрати'}
        </div>
      </div>
    ))
  );
};
