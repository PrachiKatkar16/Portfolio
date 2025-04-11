import React from "react";
import "./About.css";
import { FaGraduationCap, FaCode, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>
      <p className="about-subtitle">Learn more about my background, skills, and what drives me as a developer.</p>

      <div className="about-grid">
        <div className="about-card">
          <div className="card-header">
            <FaGraduationCap className="icon violet" />
            <h3>Education</h3>
          </div>
          <div className="card-text">
            <p><strong>Bachelor of Computer Engineering</strong></p>
            <p>Savitribai Phule Pune University</p>
            <p>2021 - 2024</p>
            <p style={{ color: "violet" }}>CGPA: 9.25</p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-header">
            <FaCode className="icon violet" />
            <h3>Skills</h3>
          </div>
          <div className="skills-list">
            <span>React.js</span>
            <span>Node.js</span>
            <span>JavaScript</span>
            <span>HTML/CSS</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Express</span>
            <span>Bootstrap</span>
            <span>Chakra UI</span>
          </div>
        </div>
      </div>

      <div className="about-card full">
        <div className="card-header">
          <FaHeart className="icon violet" />
          <h3>About Me</h3>
        </div>
        <div className="card-text">
          <p>I'm Prachi Katkar, a passionate full-stack developer with a focus on creating exceptional web experiences. I specialize in building modern, responsive web applications using technologies like React, Node.js, and MongoDB.</p>
          <p>My journey in web development began during my Computer Engineering degree, where I discovered my love for creating interactive user interfaces and solving complex problems with elegant code solutions.</p>
          <p>I'm particularly interested in user experience design, performance optimization, and creating accessible web applications that deliver value to both users and businesses.</p>
          <p>When I'm not coding, I enjoy reading about emerging technologies, contributing to open source projects, and continuously expanding my skillset.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
