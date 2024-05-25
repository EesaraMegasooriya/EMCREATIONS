import React, { useState } from 'react';
import './Header.css';
import Logo from '../src/assets/E-tra.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="headermaincon">
        <div className="headerlogo">
          <img src={Logo} className='Headerlogoclass' alt="Logo" />
        </div>
        <div className="Headermaintextlogo">EMCREATIONS</div>
        <div className="Headerrightside">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className={`slide-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About Us</a>
      </div>
    </div>
  );
}

export default Header;
