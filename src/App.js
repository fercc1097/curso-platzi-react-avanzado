/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);
