/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { ListOfCategories } from '../components/ListOfCategories';

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
};
