import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { LoadingButton } from '@components/LoadingButton/LoadingButton';
import { getPointsData } from '@utils/pointsLayer';
import { FeatureLayerContext } from '@components/FeatureLayerContext';
import { AppError } from '@cutomTypes/appError';
import { ExperimentInputPayload } from '@cutomTypes/api/experiment';
import { experimentService } from '@services/experimentService';

export const ExperimentForm: React.FC = () => {
  const { pointsLayerRef } = useContext(FeatureLayerContext);

  const [timeThreshold, setTimeThreshold] = useState(0);
  const [hasEquipment, setHasEquipment] = useState(false);

  const { isLoading, mutate }
    = useMutation<void, AppError>({
      mutationFn: async () => {
        if (!pointsLayerRef || !pointsLayerRef.current) {
          return;
        }

        const points = await getPointsData(pointsLayerRef.current);
        const initial: ExperimentInputPayload['initial'] = points.map(
          ({
            geometry: { latitude, longitude },
            attributes: { OBJECTID, ...restAttributes },
          }) => ({
            geometry: {
              latitude,
              longitude,
            },
            attributes: {
              ...restAttributes,
              id: OBJECTID,
            },
          }),
        );

        const result = await experimentService.makeExperiment({
          timeThreshold,
          hasEquipment,
          initial,
        });

        console.log(result);
      },
    });

  return (
    <>
      <div className="d-flex col-6 mb-4">
        <label
          className="me-5"
          htmlFor="equipment"
          style={{ width: 300 }}
        >
          Додаткове обладнання
        </label>

        <input
          type="checkbox"
          className="form-check-input"
          id="equipment"
          checked={hasEquipment}
          onChange={(event) => setHasEquipment(event.target.checked)}
        />
      </div>

      <div className="d-flex col-6 mb-4">
        <label
          className="me-5"
          htmlFor="exprerimentTime"
          style={{ width: 300 }}
        >
          Максимальний час пошуку (с.)
        </label>

        <input
          type="number"
          className="form-control"
          id="equipment"
          value={timeThreshold}
          onChange={(event) => setTimeThreshold(Number(event.target.value))}
        />
      </div>

      <div className="w-100 d-flex mb-4">
        <div className="col-2">
          <img
            src={`${import.meta.env.VITE_API_URL}/img/pn_yellow.svg`}
            style={{ width: 40, height: 40 }}
            alt="goverment place"
          />
          <span className="align-middle ms-1">25</span>
        </div>
        <div className="col-2">
          <img
            src={`${import.meta.env.VITE_API_URL}/img/pn_icon.svg`}
            style={{ width: 40, height: 40 }}
            alt="goverment place"
          />
          <span className="align-middle ms-1">12</span>
        </div>
      </div>

      <div className="col-5">
        <LoadingButton
          isLoading={isLoading}
          className="btn-warning"
          onClick={() => mutate()}
        >
          Провести оптимізацію
        </LoadingButton>
      </div>
    </>
  );
};
