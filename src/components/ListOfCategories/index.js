/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Category } from '../Category';

import { List, Item } from './styles';

// eslint-disable-next-line import/prefer-default-export
export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await window.fetch(
        'https://petgram-server-fernando-bt7tt9d9u.vercel.app/categories'
      );
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
