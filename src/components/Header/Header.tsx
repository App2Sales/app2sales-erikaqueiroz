import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo192.png';
import './Header.scss';


const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <div className='container'>
      {!menuAberto && (
        <div className='mobile-menu'>
          <Link to="/">
            <img src={logo} alt="Nome" className='img-logo'/>
          </Link>
          <div
            onClick={() => setMenuAberto(true)}
            className='mobile-open-button'
          >
            Menu
          </div>
        </div>
      )}
      <ul className={menuAberto ? 'menu-aberto' : 'menu'}>
        {menuAberto && (
          <div
            onClick={() => setMenuAberto(false)}
            className='close-button'
          >
            X
          </div>
        )}
        <li className='itemlogo'>
          <Link to="/">
            <img src={logo} alt="Nome" className='img-logo'/>
          </Link>
        </li>
        <li>
          <Link to="/">Tela Inicial</Link>
        </li>
        <li>
          <Link to="/minhaconta">Minha Conta</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </div>
  )
}
export default Cabecalho;
