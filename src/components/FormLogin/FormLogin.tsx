import React, { useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './FormLogin.scss';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';
import { useHistory } from 'react-router-dom';

const FormLogin = () => {
  let history = useHistory();
  const {
    loadingSignInRequest,
    error,
    errorMsg,
    token,
    fieldErrors,
  } = useSelector((state: StoreState) => state.auth);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  if (token) {
    history.replace({ pathname: '/minhaconta' });
  }

  const onFinish = async (credenciais: { usuario: string; password: string }) => {
    const { usuario, password } = credenciais;
    dispatch(
      signInRequest({
        username: usuario,
        password,
      })
    );
  };

  useEffect(() => {
    if(fieldErrors?.length) {
      form.validateFields();
    }
  }, [fieldErrors, form])

  const validateField = async (field: string, value: string) => {
    console.log('field',field)
    const error = fieldErrors?.find((error) => error.param === field);
    console.log('error',error)
    if (error && value === error.value) {
      return Promise.reject(error.msg);
    }
    return Promise.resolve();
  };

  return (
    <div className='form-container'>
      <Form form={form} name='login' className='form-login' onFinish={onFinish}>
        {error && errorMsg && <Alert type='error' message={errorMsg} />}
        <Form.Item
          name='usuario'
          rules={[
            { required: true, message: 'Informe seu usuário!' },
            {
              validator: (_, value) => validateField('usuario', value),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Usuário'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            { required: true, message: 'Informe uma senha' },
            {
              validator: (_, value) => validateField('password', value),
            },
          ]}
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
