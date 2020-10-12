import React, { FunctionComponent, ReactComponentElement, useState } from 'react';
import { Tabs, PageHeader } from 'antd';
import MinhaConta from './MinhaConta';
import Itens from './Itens';
import { Layout } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './AreaInterna.scss';
import Clientes from './Clientes';
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca';

const { TabPane } = Tabs;

type PropsMenuItem = {
  icone: ReactComponentElement<any>;
  texto: string;
};

const MenuItem: FunctionComponent<PropsMenuItem> = ({ icone, texto }) => {
  return (
    <div className='menu-item'>
      <span className='icone'>{icone}</span>
      <span className='texto'>{texto}</span>
    </div>
  );
};

export const AreaInterna: FunctionComponent = () => {
  const [titulo, setTitulo] = useState('Itens');
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [filtro, setFiltro] = useState('');

  const changeTab = (activeIndex: string) => {
    switch (activeIndex) {
      case 'pessoas':
        setTitulo('Pessoas');
        break;
      case 'config':
        setTitulo('Configurações');
        break;
      case 'inicio':
      default:
        setTitulo('Itens');
    }
  }

  if(filtroAtivo && filtro) {
    return (
      <Layout className='area-interna'>
        <PageHeader
          className={filtroAtivo ? 'filtroativo' : ''}
          title={filtroAtivo ? '' : titulo}
          extra={
            <FiltroBusca
              ativo={filtroAtivo}
              setFiltroAtivo={setFiltroAtivo}
              updateFiltro={setFiltro}
            />
          }
        />
        <Itens filtro={filtro} />
        <Clientes filtro={filtro} />
      </Layout>
    );
  }

  return (
    <Layout className='area-interna'>
      <PageHeader
        className={filtroAtivo ? 'filtroativo' : ''}
        title={filtroAtivo ? '' : titulo}
        extra={
          <FiltroBusca
            ativo={filtroAtivo}
            setFiltroAtivo={setFiltroAtivo}
            updateFiltro={setFiltro}
          />
        }
      />
      <Tabs tabPosition='bottom' onChange={changeTab}>
        <TabPane
          tab={<MenuItem texto='Início' icone={<HomeOutlined />} />}
          key='inicio'
        >
          <Itens />
        </TabPane>
        <TabPane
          tab={<MenuItem texto='Pessoas' icone={<UserOutlined />} />}
          key='pessoas'
        >
          <Clientes />
        </TabPane>
        <TabPane
          tab={<MenuItem texto='Configuração' icone={<SettingOutlined />} />}
          key='config'
        >
          <MinhaConta />
        </TabPane>
      </Tabs>
    </Layout>
  );
}
