import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { Logo } from '../../components/Logo/index';

describe('<Logo />', () => {
  test('Render del componente Footer ', () => {
    const logo = mount(<Logo />);
    expect(logo.length).toEqual(1);
  });
});

describe('FavButton Snapshot', () => {
  test('Comprobar la Ui del componente Footer', () => {
    const logo = create(<Logo />).toJSON();
    expect(logo).toMatchSnapshot();
  });
});
