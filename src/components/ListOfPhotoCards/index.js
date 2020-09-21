/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCards = () => (
  <ul>
    {[1, 2, 3, 4, 5, 6].map((id) => (
      <li key={id}>
        <PhotoCard key={id} id={id} />
      </li>
    ))}
  </ul>
);
