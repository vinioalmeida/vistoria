import React from 'react';
import { Link } from 'react-router-dom';
import '../routes/Home/home.css'

function Header() {
  return (
    <header id="header__primario">
      <img className="logo__img" src="./img/logo_porto.png" alt="logo da porto" />
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/chat_bot">Chat Online</Link>
        <Link to="/perguntas_frequentes">Perguntas Frequentes</Link>
        <Link to="/login" className='botao__login'>Login</Link>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
