/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LoadingButton: React.FC<Props> = ({
  isLoading,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'btn btn-primary w-100 position-relative',
        {
          disabled: isLoading,
        },
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="position-absolute
          top-50 start-50 translate-middle"
          >
            <div className="spinner-border align-middle" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </span>

          &#8203;
        </>
      ) : children}
    </button>
  );
};
