import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { experimentService } from '@services/experimentService';
import React from 'react';
import { useQuery } from 'react-query';
import { setExperiments } from '@redux/features/experimentsSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { ExperimentItem } from '@components/ExperimentItem';

export const ExperimentsList: React.FC = () => {
  const { experiments } = useAppSelector(state => state.experiments);
  const dispath = useAppDispatch();

  const { isLoading } = useQuery({
    queryKey: 'experiments',
    queryFn: experimentService.getAll,
    onSuccess: (result) => {
      dispath(setExperiments(result));
    },
  });

  return (
    <>
      <h3 className="mt-4">Експерименти:</h3>

      <AnimatePresence initial={false}>
        {experiments.map(experiment => (
          <motion.li
            key={experiment.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId={experiment.id.toString()}
            transition={{ duration: 0.5 }}
          >
            <ExperimentItem experiment={experiment} />
          </motion.li>
        ))}
      </AnimatePresence>
    </>
  );
};
