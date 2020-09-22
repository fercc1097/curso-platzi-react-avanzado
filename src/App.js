/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <Logo />
      <GlobalStyle />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={3} />
        </>
      )}
    </div>
  );
};
