import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { NavBar } from '../../components/NavBar/index';

describe('<NavBar />', () => {
  test('Render del componente Footer ', () => {
    const navBar = mount(<NavBar />);
    expect(navBar.length).toEqual(1);
  });
});

describe('FavButton Snapshot', () => {
  test('Comprobar la Ui del componente Footer', () => {
    const navBar = create(<NavBar />).toJSON();
    expect(navBar).toMatchSnapshot();
  });
});
