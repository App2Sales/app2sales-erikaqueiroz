import React from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './FormLogin.scss';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';
import { useHistory } from 'react-router-dom';

const FormLogin = () => {

  let history = useHistory();
  const { loadingSignInRequest, error, errorMsg, isSignedIn } = useSelector(
    (state: StoreState) => state.auth
  );
  const dispatch = useDispatch();

  if (isSignedIn) {
    history.replace({ pathname: '/minhaconta' })
  }

  const onFinish = (credenciais: {
    usuario: string;
    password: string;
  }) => {
    const { usuario, password } = credenciais;
    dispatch(signInRequest({
      username: usuario,
      password
    }));
  };

  return (
    <div className='form-container'>
      <Form name='login' className='form-login' onFinish={onFinish}>
        {error && errorMsg && <Alert type='error' message={errorMsg} />}
        <Form.Item
          name='usuario'
          rules={[{ required: true, message: 'Informe seu usuário!' }]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Usuário'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Informe uma senha' }]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <a className='login-form-forgot' href='/recuperarsenha'>
            Esqueci minha senha
          </a>
        </Form.Item>

        <Form.Item>
          <a href='/cadastrar'>cadastre-se</a>
          &nbsp;ou&nbsp;
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            loading={loadingSignInRequest}
          >
            Entre
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
