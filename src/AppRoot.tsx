import React from 'react';
import './App.scss';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

function AppRoot() {
  return (
    <BrowserRouter>
      <Layout className='App'>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoot;
