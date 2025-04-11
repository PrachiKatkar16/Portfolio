import React from "react";
import "./Footer.css";
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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/contact">Contact</a></li>
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
