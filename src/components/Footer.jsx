import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
return (
  <footer>
    <div className="nomes">
      <Link to="/sobre_nos">Sobre nós</Link>
      <Link to="/ajuda">Ajuda</Link>
      <Link to="/nossos_servicos">Nossos Serviços</Link>
    </div>
  </footer>
);
}

export default Footer;
