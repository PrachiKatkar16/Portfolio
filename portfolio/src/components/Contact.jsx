// Contact.jsx
import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>
        <span className='get-in'>Get in</span><span className='touch-name'>Touch</span></h1>
      <p className="contact-subtitle">
        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
      </p>

      <div className="contact-info">
        <div className="info-card">
          <FaEnvelope className="icon" />
          <div>
            <h3>Email</h3>
            <p>prachikatkar116@gmail.com</p>
          </div>
        </div>

        <div className="info-card">
          <FaPhoneAlt className="icon" />
          <div>
            <h3>Phone</h3>
            <p>+91 9370730131</p>
          </div>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h3>Location</h3>
            <p>Pune, Maharashtra, India</p>
          </div>
        </div>
      </div>

      <h2>Connect With Me</h2>
      <div className="social-icons">
        <a href="https://github.com/PrachiKatkar16" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/prachi-katkar" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
