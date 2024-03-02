import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { useMutation } from 'react-query';

import { Experiment } from '@cutomTypes/experiment';
import { AppError } from '@cutomTypes/appError';
import { experimentService } from '@services/experimentService';
import { deleteExperiment } from '@redux/features/experimentsSlice';
import { toastService } from '@services/toastService';
import { apiErrorService } from '@services/apiErrorService';
import { useAppDispatch } from '@redux/hooks';
import { PopConfirm } from '@components/PopConfirm';
import { ExperimentPointsList } from '@components/ExperimentPointsList';
import { RatingPicker } from '@components/RatingPicker';

type Props = {
  experiment: Experiment;
};

export const ExperimentItem: React.FC<Props> = React.memo(({
  experiment,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispath = useAppDispatch();

  const deleteExperimentMutation = useMutation<void, AppError, number>({
    mutationKey: ['experiment', experiment.id],
    mutationFn: async (id) => {
      await experimentService.deleteExperiment(id);
    },
    onSuccess: async () => {
      dispath(deleteExperiment(experiment.id));
      toastService.success({ title: 'Експеримент успішно видалено' });
    },
    onError: (error) => {
      const message = apiErrorService.getMessage(
        error, 'Не вдалось видалити експеримент',
      );

      toastService.error(message);
    },
    onMutate: () => toastService.dismiss(),
  });

  const handleArticleDelete = useCallback(() => {
    deleteExperimentMutation.mutate(experiment.id);
  }, [deleteExperimentMutation, experiment.id]);

  return (
    <div
      className={cn(
        'bg-light w-100 m-0 mb-3 py-2 px-1',
        'rounded border border-2 position-relative',
        {
          'pe-none opacity-50': deleteExperimentMutation.isLoading,
        },
      )}
    >
      <div className="w-100 row d-flex m-0">
        <div className="d-block d-md-none d-lg-block col-1 p-0 p-lg-2">
          {`#${experiment.id}`}
        </div>

        <div className="ms-3 ms-md-0 col-4 d-flex align-items-center">
          <span>{`Проведено ${experiment.iterationsThreshold} ітерацій`}</span>
        </div>

        <div className="ms-md-0 col-4 d-flex align-items-center">
          <RatingPicker />
        </div>

        <div className="col-3 d-flex justify-content-end align-items-center">
          <button
            type="button"
            className="btn btn-secondary p-1 ms-3"
          >
            <i className="bi bi-file-earmark-arrow-down
            fs-3 lh-1 align-middle"
            />
          </button>

          <button
            type="button"
            className="btn btn-secondary p-1 ms-3"
            onClick={() => setIsExpanded((prevState) => !prevState)}
          >
            <i className={cn(
              'bi fs-3 lh-1 align-middle',
              {
                'bi-arrow-down-circle': !isExpanded,
                'bi-arrow-up-circle': isExpanded,
              },
            )}
            />
          </button>

          <PopConfirm onConfirm={handleArticleDelete}>
            {(togglePopover) => (
              <button
                type="button"
                className="btn btn-secondary p-1 ms-3"
                onClick={(event) => {
                  event.stopPropagation();
                  togglePopover();
                }}
              >
                <i className="bi bi-x-circle fs-3 lh-1 align-middle" />
              </button>
            )}
          </PopConfirm>
        </div>

        {deleteExperimentMutation.isLoading && (
          <div className="position-absolute top-0 bottom-0 start-0 end-0
          d-flex align-items-center justify-content-center"
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>

      {isExpanded && (
        <ExperimentPointsList points={experiment.output} />
      )}
    </div>
  );
});
