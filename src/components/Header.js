import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <a href="#home">
              <span className="logo-text">{'Aliya Conteh'}</span>
            </a>
          </div>
          
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="nav-actions">
            <button 
              className="theme-toggle" 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            
            <button 
              className="menu-toggle" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
      
      <style jsx="true">{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background-color: var(--light-color);
          box-shadow: var(--box-shadow);
          z-index: 1000;
          transition: var(--transition);
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: var(--header-height);
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }
        
        .nav-links {
          display: flex;
          gap: 30px;
        }
        
        .nav-links a {
          text-decoration: none;
          color: var(--dark-color);
          font-weight: 600;
          transition: var(--transition);
          position: relative;
        }
        
        .nav-links a:hover {
          color: var(--primary-color);
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: var(--transition);
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .theme-toggle, .menu-toggle {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--dark-color);
          cursor: pointer;
          transition: var(--transition);
        }
        
        .theme-toggle:hover {
          color: var(--primary-color);
          transform: rotate(15deg);
        }
        
        .menu-toggle {
          display: none;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: var(--header-height);
            left: 0;
            width: 100%;
            background-color: var(--light-color);
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            gap: 20px;
            box-shadow: var(--box-shadow);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
          }
          
          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;