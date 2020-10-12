import React from 'react';
import { Layout, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signInFailure } from '../../store/modules/auth/actions';

const { Content } = Layout;

const MinhaConta = () => {
  const dispatch = useDispatch();

  return (
    <Content>
      <Button
        onClick={() => {
          dispatch(signInFailure({}))
        }}
      >
        Sair
      </Button>
    </Content>
  );
}

export default MinhaConta;
