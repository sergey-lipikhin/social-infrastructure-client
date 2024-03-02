/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import { Modify } from '@cutomTypes/helpers';
import { ToastOptions, toast } from 'react-toastify';
import { NotificationMessage } from '@cutomTypes/notification';

const toastTypes = ['success', 'warning', 'error', 'info'] as const;

type ToastMethods = Record<
  typeof toastTypes[number],
  (content: NotificationMessage, options?: ToastOptions) => void
>;

type OverridedToast = Modify<typeof toast, ToastMethods>;

const ToastInfo: React.FC<NotificationMessage> = ({
  title,
  description,
}) => {
  return (
    <div className="fs-5">
      <h3 className="lh-1 h5 m-0 mb-2">
        {title}
      </h3>

      {description && (
        <p className="m-0 lh-sm" style={{ fontSize: '1rem' }}>
          {description}
        </p>
      )}
    </div>
  );
};

function overrideToastMethods(
  ContentComponent: React.FC<NotificationMessage>,
  options?: ToastOptions,
): ToastMethods {
  return toastTypes.reduce((acc, type) => {
    acc[type] = (content, passedOptions) => {
      toast[type](
        <ContentComponent {...content} />,
        { ...options, ...passedOptions },
      );
    };

    return acc;
  }, {} as ToastMethods);
}

export const toastService: OverridedToast = {
  ...toast,
  ...overrideToastMethods(ToastInfo),
};
