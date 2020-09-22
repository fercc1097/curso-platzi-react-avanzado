/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link, Nav } from './styles';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

const SIZE = '32px';

export const NavBar = () => (
  <Nav>
    <Link to='/'>
      <MdHome size={SIZE} />
    </Link>
    <Link to='/favs'>
      <MdFavoriteBorder size={SIZE} />
    </Link>
    <Link to='/user'>
      <MdPersonOutline size={SIZE} />
    </Link>
  </Nav>
);
