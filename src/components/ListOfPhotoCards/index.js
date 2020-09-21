/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3].map((id) => (
        <li>
          <PhotoCard key={id} />
        </li>
      ))}
    </ul>
  );
};
