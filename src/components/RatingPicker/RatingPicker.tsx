import React, { HTMLAttributes, useState } from 'react';
import starImage from '@assets/Star.svg';
import starBlankImage from '@assets/Star-blank.svg';

type Props = HTMLAttributes<HTMLDivElement>;

export const RatingPicker: React.FC<Props> = ({ className }) => {
  const [rating, setRating] = useState(0);

  return (
    Array.from({ length: 5 }).map((_, index) => (
      <button
        type="button"
        onClick={() => setRating(index)}
        className={className}
      >
        <img
          width={30}
          height={30}
          src={index <= rating ? starImage : starBlankImage}
          alt="star"
        />
      </button>
    ))
  );
};
