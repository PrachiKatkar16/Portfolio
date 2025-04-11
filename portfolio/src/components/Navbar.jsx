import React, { useState } from 'react';
import { Link } from "react-router-dom"; // ← Import Link
import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">Prachi Katkar</div>
     
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>


      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
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
