import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Sweet Balance</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/recetas">Recetas Saludables</Link></li>
        <li><Link to="/tiendas">Tiendas Cercanas</Link></li>
        <li><Link to="/consejos">Consejos Nutricionales</Link></li>
        <li><Link to="/testimonio">Testimonios</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
