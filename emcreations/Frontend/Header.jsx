import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="Headermaintextlogo">EM CREATIONS</div>
        <div className="Headerrightside">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className={`slide-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About Us</Link>
      </div>
    </div>
  );
}

export default Header;
