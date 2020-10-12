import React from 'react';
import { shallow } from '../../setupEnzyme';
import Login from '../../pages/Login'

const wrapper = shallow(<Login />);

describe('AcompanhamentoCadastro component', () => {
  it('renderiza o formulário de login', () => {
    expect(wrapper.find('FormLogin').exists()).toBeTruthy();
  });
});
