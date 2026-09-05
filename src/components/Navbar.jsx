import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
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
  const navRef = useRef(null);

  // Publish the fixed navbar's height so sections can offset their scroll
  // anchors by it (see --navbar-height usage in bulma_version.css). Measured in
  // a layout effect so the offset is correct before the first paint.
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // While the burger menu is expanded the nav grows to fit the links, which
    // is not the height that overlaps the page content.
    if (isMenuActive) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty('--navbar-height', `${nav.offsetHeight}px`);
    };

    updateHeight();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }

    const observer = new ResizeObserver(updateHeight);
    observer.observe(nav);

    return () => observer.disconnect();
  }, [isMenuActive]);

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
      <nav className="navbar has-shadow is-fixed-top" ref={navRef}>
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
            <Link to="/#about" className="navbar-item is-size-3-fullhd" onClick={closeMenu}>
              About
            </Link>

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
            
            <Link to="/#experience" className="navbar-item is-size-3-fullhd" onClick={closeMenu}>
              Experience
            </Link>

            <Link to="/#skills" className="navbar-item is-size-3-fullhd" onClick={closeMenu}>
              Skills
            </Link>
            <Link to="/#education" className="navbar-item is-size-3-fullhd" onClick={closeMenu}>
              Education
            </Link>

            <Link to="/#certifications" className="navbar-item is-size-3-fullhd" onClick={closeMenu}>
              Certifications
            </Link>

            <Link to="/#contact" className="navbar-item is-size-3-fullhd" onClick={closeMenu}>
              Contact
            </Link>
            
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
