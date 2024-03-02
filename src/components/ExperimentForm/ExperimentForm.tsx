import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { LoadingButton } from '@components/LoadingButton/LoadingButton';
import { getPointsData } from '@utils/pointsLayer';
import { FeatureLayerContext } from '@components/FeatureLayerContext';
import { AppError } from '@cutomTypes/appError';
import { experimentService } from '@services/experimentService';
import { useAppDispatch } from '@redux/hooks';
import { getAreasData } from '@utils/areasLayer';
import { getMatrix } from '@utils/getMatrix';
import { toastService } from '@services/toastService';
import { apiErrorService } from '@services/apiErrorService';
import { addExperiment } from '@redux/features/experimentsSlice';

export const ExperimentForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pointsLayerRef, areasLayerRef } = useContext(FeatureLayerContext);

  const [iterationsThreshold, setIterationsThreshold] = useState(0);

  const { isLoading, mutate }
    = useMutation<void, AppError>({
      mutationFn: async () => {
        if (!pointsLayerRef || !pointsLayerRef.current
          || !areasLayerRef || !areasLayerRef.current) {
          return;
        }

        const points = await getPointsData(pointsLayerRef.current);
        const areas = await getAreasData(areasLayerRef?.current);

        const matrix = getMatrix(points, areas);

        console.log(matrix.map(row => row[54]));
        console.log(matrix.map(row => row[89]));
        console.log(matrix.map(row => row[19]));

        const result = await experimentService.makeExperiment({
          iterationsThreshold,
          points: points.map(({ attributes }) => ({ ...attributes })),
          areas: areas.map(({ attributes }) => ({ ...attributes })),
          matrix,
        });

        dispatch(addExperiment(result));
      },
      onError: (error: AppError) => {
        toastService.error(apiErrorService.getMessage(error));
      },
    });

  return (
    <>
      <div className="d-flex col-6 mb-4">
        <label
          className="me-5"
          htmlFor="exprerimentTime"
          style={{ width: 400 }}
        >
          Максимальна кількість ітерацій
        </label>

        <input
          type="number"
          className="form-control"
          id="equipment"
          value={iterationsThreshold}
          onChange={(event) => (
            setIterationsThreshold(Number(event.target.value))
          )}
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
