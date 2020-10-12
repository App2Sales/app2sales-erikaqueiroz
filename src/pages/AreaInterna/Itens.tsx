import React, { useEffect }  from 'react';
import { Layout, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { itensRequest } from '../../store/modules/itens/actions';
import { StoreState } from '../../store/createStore';
import './Itens.scss';
import Title from 'antd/lib/typography/Title';

const { Content } = Layout;

type ItensProps = {
  filtro?: string;
};

const Itens = ({ filtro = '' }: ItensProps) => {
  const dispatch = useDispatch();
  const { itens, loadingItens, error } = useSelector(
    (state: StoreState) => state.itens
  );

  const itensFiltrados = itens.filter((item) => {
    const tituloItem = item.titulo.toLowerCase();
    const filtroItem = filtro.toLowerCase();
    return tituloItem.indexOf(filtroItem) >= 0;
  });


  useEffect(() => {
    dispatch(itensRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingItens) {
    return <Spin />
  }
  if (error) {
    return <span>Não foi possível carregar os itens</span>
  }
  if (itensFiltrados.length <= 0) {
    return <></>;
  }
  return (
    <Content>
      {filtro && <Title level={2}>Itens</Title>}
      {itensFiltrados
        .map((item) => {
          return (
            <div
              className='item-foto'
              key={item.id}
              style={{ backgroundImage: `url('${item.urlFoto}')` }}
            >
              <span>{item.titulo}</span>
            </div>
          );
        })}
    </Content>
  );
}

export default Itens;
