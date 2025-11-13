import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Name and About */}
        <div className="footer-section about">
          <h2 className="footer-name">
            <span className="gradient-text">Prachi Katkar</span>
          </h2>
          <p>
            A passionate full-stack developer focused on creating exceptional web
            experiences with modern technologies.
          </p>
          <div className="footer-icons">
            <a href="https://github.com/PrachiKatkar16" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/prachi-katkar" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:prachikatkar116@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
           <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <FaEnvelope /> prachikatkar116@gmail.com
            </li>
            <li>
              <FaGithub /> github.com/PrachiKatkar16
            </li>
            <li>
              <FaLinkedin /> linkedin.com/in/prachi-katkar
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">© 2025 Prachi Katkar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
