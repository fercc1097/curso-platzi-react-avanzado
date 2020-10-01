import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { UserForm } from '../../components/UserForm/index';

describe('<SubmitButton />', () => {
  test('Render del componente Footer ', () => {
    const userForm = mount(<UserForm />);
    expect(userForm.length).toEqual(1);
  });
});

describe('FavButton Snapshot', () => {
  test('Comprobar la Ui del componente Footer', () => {
    const userForm = create(<UserForm />).toJSON();
    expect(userForm).toMatchSnapshot();
  });
});
