/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`;

export const ToggleLikeMutation = ({ children }) => (
  <Mutation mutation={LIKE_PHOTO}>
    {children}
  </Mutation>
);
