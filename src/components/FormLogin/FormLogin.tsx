import React, { useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import './FormLogin.scss';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/eqlogo.png';

const FormLogin = () => {
  let history = useHistory();
  const {
    loadingSignInRequest,
    error,
    errorMsg,
    isSignedIn,
    fieldErrors,
  } = useSelector((state: StoreState) => state.auth);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  if (isSignedIn) {
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
        <img src={logo} alt='erika queiroz'/>
        <span className='faca-login'>Faça login para começar</span>
        <Form.Item
          name='usuario'
          rules={[
            { required: true, message: 'Informe um email ou telefone.' },
            {
              validator: (_, value) => validateField('usuario', value),
            },
          ]}
        >
          <Input
            placeholder='E-mail ou telefone'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            { required: true, message: 'Informe uma senha.' },
            {
              validator: (_, value) => validateField('password', value),
            },
          ]}
        >
          <Input
            type='password'
            placeholder='Senha'
          />
        </Form.Item>
        <Form.Item>
          <a className='login-form-forgot' href='/recuperarsenha'>
            Esqueceu a senha?
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            loading={loadingSignInRequest}
          >
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
