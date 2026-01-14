import React, { useState } from 'react';

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header>
      <nav className="navbar has-shadow is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img width="40" style={{ maxHeight: '5rem' }} src="media/images/logos_and_icons/personal logo.png" alt="Logo" />
          </a>
          <a
            role="button"
            className={`navbar-burger ${isMenuActive ? 'is-active' : ''}`}
            id="burger"
            onClick={toggleMenu}
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`} id="nav-links">
          <div className="navbar-end">
            <a href="#about" className="navbar-item is-size-3-fullhd">
              About
            </a>
            <a href="#projects" className="navbar-item is-size-3-fullhd">
              Projects
            </a>
            <a href="#experience" className="navbar-item is-size-3-fullhd">
              Experience
            </a>
            <a href="#contact" className="navbar-item is-size-3-fullhd">
              Contact
            </a>
            <a
              href="/media/resumes/Software-Engineering-resume-Elliot-Gong.pdf"
              className="navbar-item is-size-3-fullhd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
