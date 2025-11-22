import React from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>💪 Rahma Service</h1>
        </div>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <a href="#home">Accueil</a>
          <a href="#about">À Propos</a>
          <a href="#services">Services</a>
          <a href="#pricing">Tarifs</a>
          <a href="#contact">Contact</a>
        </nav>
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
