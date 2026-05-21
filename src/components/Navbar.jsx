import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectCategories } from '../data/projectCategories';

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isProjectsDropdownActive, setIsProjectsDropdownActive] = useState(false);
  const resolveAssetPath = (assetPath) => {
    if (!assetPath || /^(?:https?:)?\/\//.test(assetPath) || assetPath.startsWith('data:')) {
      return assetPath;
    }

    return `${import.meta.env.BASE_URL}${assetPath.replace(/^\/?/, '')}`;
  };
  
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownActive(!isProjectsDropdownActive);
  };

  const closeProjectsDropdown = () => {
    setIsProjectsDropdownActive(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if dropdown is active and click is outside
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsProjectsDropdownActive(false);
      }
    }

    // Only attach listeners when dropdown is active
    if (isProjectsDropdownActive) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchend', handleClickOutside);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchend', handleClickOutside);
      };
    }
  }, [isProjectsDropdownActive]);

  // Handle Escape key to close dropdown
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape' && isProjectsDropdownActive) {
        setIsProjectsDropdownActive(false);
      }
    }

    if (isProjectsDropdownActive) {
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isProjectsDropdownActive]);

  return (
    <header>
      <nav className="navbar has-shadow is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" onClick={closeMenu}>
            <img width="40" style={{ maxHeight: '5rem' }} src={resolveAssetPath('media/images/logos_and_icons/personal.png')} alt="Logo" />
          </Link>
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
            <a href="/#about" className="navbar-item is-size-3-fullhd" onClick={closeMenu}>
              About
            </a>

            <div ref={dropdownRef} className={`navbar-item has-dropdown ${isProjectsDropdownActive ? 'is-active' : ''}`}>
              <a 
                className="navbar-link is-size-3-fullhd"
                onClick={(e) => {
                  e.preventDefault();
                  toggleProjectsDropdown();
                }}
              >
                Projects
              </a>
              <div className="navbar-dropdown">
                
                {projectCategories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/projects/${category.slug}`}
                    className="navbar-item is-size-4-fullhd"
                    onClick={() => {
                      closeMenu();
                      closeProjectsDropdown();
                    }}
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <a href="/#contact" className="navbar-item is-size-3-fullhd" onClick={closeMenu}>
              Contact
            </a>
            
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
