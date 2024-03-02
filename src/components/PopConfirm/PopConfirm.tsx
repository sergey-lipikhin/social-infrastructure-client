import React, { useState } from 'react';
import { Popover, ArrowContainer } from 'react-tiny-popover';

type Props = {
  children: (togglePopover: () => void) => JSX.Element;
  onConfirm: () => void;
  onCancel?: () => void;
};

export const PopConfirm: React.FC<Props> = ({
  children,
  onConfirm,
  onCancel,
}) => {
  const [isPopoverOpened, setIsPopoverOpened] = useState(false);

  return (
    <Popover
      isOpen={isPopoverOpened}
      positions={['top', 'right', 'left', 'bottom']}
      padding={10}
      onClickOutside={() => setIsPopoverOpened(false)}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor="white"
          arrowSize={15}
          arrowStyle={{ opacity: 0.7 }}
        >
          <div className="bg-light border border-2 shadow p-3 lh-1">
            Ви впевнені що хочете видалити подію?
            <hr />
            <div className="row d-flex justify-content-center
              align-items-center"
            >
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-outline-danger p-1 w-100"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsPopoverOpened(false);

                    if (onCancel) {
                      onCancel();
                    }
                  }}
                >
                  Скасувати
                </button>
              </div>

              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-success p-1 w-100"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsPopoverOpened(false);
                    onConfirm();
                  }}
                >
                  Підтвердити
                </button>
              </div>
            </div>
          </div>
        </ArrowContainer>
      )}
    >
      {children(() => setIsPopoverOpened(prevState => !prevState))}
    </Popover>
  );
};
