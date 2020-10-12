import React, { useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

type FiltroBuscaProps = {
  // Flag de ativação para controlar o estado e
  // alternar entre botão e input com cancelar
  ativo: boolean;
  setFiltroAtivo: (ativo: boolean) => void;

  // Função para atualizar o filtro caso ele esteja
  // sendo utilizado por um componente externo
  updateFiltro?: (filtro: string) => void;
};

const FiltroBusca = ({ ativo, setFiltroAtivo, updateFiltro }: FiltroBuscaProps) => {
  const [filtro, setFiltro] = useState('');

  const onChangeFiltro = (filtro: string) => {
    setFiltro(filtro);
    if(updateFiltro) {
      updateFiltro(filtro);
    }
  }

  if (ativo) {
    return (
      <Row gutter={1} justify='space-between'>
        <Col flex={1}>
          <Input
            placeholder='Pesquisar por itens ou clientes'
            prefix={<SearchOutlined />}
            value={filtro}
            onChange={(e) => onChangeFiltro(e.target.value)}
          />
        </Col>
        <Col>
          <Button type='text' onClick={() => setFiltroAtivo(false)}>
            Cancelar
          </Button>
        </Col>
      </Row>
    );
  }
  return (
    <Button
      type='text'
      icon={<SearchOutlined />}
      onClick={() => setFiltroAtivo(true)}
    />
  );
};

export default FiltroBusca;
