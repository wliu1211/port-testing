import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="header">
        <div className="name-init-container">
            <h4>Will Liu</h4>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
        <div className={`header-item-container ${menuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Experience/Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
    </nav>
  )
}

export default Header