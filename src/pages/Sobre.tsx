import React, { Component } from 'react';
import { Layout, Card } from 'antd';

const { Content } = Layout;

class Sobre extends Component {

  render() {
    return (
      <Content>
        <Card title='Sobre o Boilerplate' style={{ maxWidth: 300, margin: '0 auto' }}>
          <p>
            O Boilerplate tem como objetivo facilitar a implementação de
            projetos futuros utilizando funcionalidades que se repetem ao longo
            do desenvolvimento dos projeto pelo Grupo Tesseract <span role='img' aria-label='marca registrada'>®</span> ️
          </p>
        </Card>
      </Content>
    );
  }
}

export default Sobre;
