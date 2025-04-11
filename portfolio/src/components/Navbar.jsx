import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    // Only toggle if on mobile
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Prachi Katkar</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Mobile popup nav links */}
      {isOpen && window.innerWidth <= 768 && (
        <ul className={`nav-links open`} ref={menuRef} style={{
          position: 'absolute',
          top: '60px',
          right: '20px',
          backgroundColor: '#0f172a',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 100,
        }}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}

      {/* Desktop nav-links (shown by CSS only) */}
      <ul className="nav-links">
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>

      <div className="nav-icons">
        <a href="https://linkedin.com/in/prachi-katkar" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="mailto:prachikatkar116@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope-fill"></i></a>
        <a href="https://github.com/PrachiKatkar16" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
