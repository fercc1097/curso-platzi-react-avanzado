import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { SubmitButton } from '../../components/SubmitButton/index';

describe('<SubmitButton />', () => {
  test('Render del componente Footer ', () => {
    const submitButton = mount(<SubmitButton />);
    expect(submitButton.length).toEqual(1);
  });
});

describe('FavButton Snapshot', () => {
  test('Comprobar la Ui del componente Footer', () => {
    const submitButton = create(<SubmitButton />).toJSON();
    expect(submitButton).toMatchSnapshot();
  });
});
