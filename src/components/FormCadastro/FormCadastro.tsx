import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import './FormCadastro.scss';

const FormCadastro = () => {
  return (
    <>
      <h1 className='form-cadastro-titulo'>Crie sua conta</h1>

      <div className='form-cadastro-container'>
        <Form name='cadastro' className='form-cadastro'>

          <Form.Item
            name='Nome'
            rules={[{ required: true, message: 'Informe seu nome' }]}
          >
            <Input
              prefix={<UserOutlined />}
              type='nome'
              placeholder=' Nome'
            />
          </Form.Item>

          <Form.Item
            name='E-mail'
            rules={[{ required: true, message: 'Informe seu e-mail' }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder=' E-mail'
            />
          </Form.Item>

          <Form.Item
            name='Senha'
            rules={[{ required: true, message: 'Informe uma senha' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type='senha'
              placeholder=' Senha'
            />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
            >
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormCadastro;
