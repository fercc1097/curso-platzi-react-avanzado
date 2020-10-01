import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { FavButton } from '../../components/FavButton/index';

describe('<FavButton />', () => {
  test('Render del componente Footer ', () => {
    const favButton = mount(<FavButton />);
    expect(favButton.length).toEqual(1);
  });
});

describe('FavButton Snapshot', () => {
  test('Comprobar la Ui del componente Footer', () => {
    const favButton = create(<FavButton />).toJSON();
    expect(favButton).toMatchSnapshot();
  });
});
