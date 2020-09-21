/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { ImgWrapper, Img, Button } from './styles';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={src} alt='an animal' />
      </ImgWrapper>
    </a>
    <Button type='button'>
      {' '}
      <MdFavoriteBorder size='32px' /> {likes} likes!{' '}
    </Button>
  </article>
);
