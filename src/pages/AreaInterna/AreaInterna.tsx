import React, { FunctionComponent, ReactComponentElement, useState } from 'react';
import { Tabs, PageHeader } from 'antd';
import MinhaConta from './MinhaConta';
import Itens from './Itens';
import { Layout } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import './AreaInterna.scss';
import Clientes from './Clientes';
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca';
import logo from '../../assets/eqlogodark.png';

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
  const [titulo, setTitulo] = useState('Projetos');
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [filtro, setFiltro] = useState('');

  const changeTab = (activeIndex: string) => {
    switch (activeIndex) {
      case 'pessoas':
        setTitulo('Pessoas');
        break;
      case 'chat':
        setTitulo('Chat');
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
        <div className='header-preto'>
          <img src={logo} alt='erika queiroz' />
        </div>
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
      <div className='header-preto'>
        <img src={logo} alt='erika queiroz' />
      </div>
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
          tab={<MenuItem texto='Projetos' icone={<HomeOutlined />} />}
          key='inicio'
        >
          <Itens />
        </TabPane>
        <TabPane
          tab={<MenuItem texto='Chat' icone={<MessageOutlined />} />}
          key='chat'
        >
          <span> Chat em construção</span>
        </TabPane>
        <TabPane
          tab={<MenuItem texto='Clientes' icone={<UserOutlined />} />}
          key='pessoas'
        >
          <Clientes />
        </TabPane>
        <TabPane
          tab={<MenuItem texto='Configurações' icone={<SettingOutlined />} />}
          key='config'
        >
          <MinhaConta />
        </TabPane>
      </Tabs>
    </Layout>
  );
}
