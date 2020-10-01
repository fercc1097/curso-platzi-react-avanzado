import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { Category } from '../../components/Category/index';

describe('<Category />', () => {
  test('Render del componente Footer ', () => {
    const category = mount(<Category />);
    expect(category.length).toEqual(1);
  });
});

describe('FavButton Snapshot', () => {
  test('Comprobar la Ui del componente Footer', () => {
    const category = create(<Category />).toJSON();
    expect(category).toMatchSnapshot();
  });
});
