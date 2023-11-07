import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  isVisible?: boolean;
};

export const PageLoader: React.FC<Props> = ({ isVisible = true }) => {
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          key="modal"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="vh-100 bg-black position-absolute start-0 end-0
          d-flex align-items-center justify-content-center z-3"
        >
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
