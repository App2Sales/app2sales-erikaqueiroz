import React, { useEffect } from 'react';
import { Layout, Avatar, Typography, Spin, Badge  } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { clientesRequest } from '../../store/modules/clientes/actions';
import { StoreState } from '../../store/createStore';
import { UserOutlined } from '@ant-design/icons';
import './Clientes.scss';
import Title from 'antd/lib/typography/Title';

const { Content } = Layout;
const { Text } = Typography;

type ClientesProps = {
  filtro?: string;
};

const Clientes = ({ filtro = '' }: ClientesProps) => {
  const dispatch = useDispatch();
  const { clientes, loadingClientes, error } = useSelector(
    (state: StoreState) => state.clientes
  );

  const clientesFiltrados = clientes.filter((cliente) => {
    const nomeCliente = cliente.nome.toLowerCase();
    const filtroCliente = filtro.toLowerCase();
    return nomeCliente.indexOf(filtroCliente) >= 0;
  });

  useEffect(() => {
    dispatch(clientesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingClientes) {
    return <Spin />;
  }
  if (error) {
    return <span>Não foi possível carregar os clientes</span>;
  }
  if (clientesFiltrados.length <= 0) {
    return <></>;
  }
  return (
    <Content>
      {filtro && <Title level={2}>Pessoas</Title>}
      <div className='lista-clientes'>
        {clientesFiltrados.map((cliente) => {
          return (
            <div className='cliente'>
              <Badge status={Math.random() > 0.5 ? 'success' : 'error'}>
                <Avatar
                  shape='square'
                  size={50}
                  icon={<UserOutlined />}
                  src={cliente.urlFoto}
                />
              </Badge>
              <div className='detalhes'>
                <Text>{cliente.nome}</Text>
                <Text type='secondary'>{cliente.celular}</Text>
              </div>
            </div>
          );
        })}
      </div>
    </Content>
  );
};

export default Clientes;
