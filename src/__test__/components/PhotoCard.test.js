import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { PhotoCard } from '../../components/PhotoCard/index';

describe('<PhotoCard />', () => {
  test('Render del componente Footer ', () => {
    const photoCard = mount(<PhotoCard />);
    expect(photoCard.length).toEqual(1);
  });
});

describe('FavButton Snapshot', () => {
  test('Comprobar la Ui del componente Footer', () => {
    const photoCard = create(<PhotoCard />).toJSON();
    expect(photoCard).toMatchSnapshot();
  });
});
