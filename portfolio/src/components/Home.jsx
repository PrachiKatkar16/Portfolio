import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleGitHubClick = () => {
    window.open('https://github.com/PrachiKatkar16', '_blank');
  };

  const handleViewWorkClick = () => {
    navigate('/projects');
  };

  return (
    <section className="home-container">
      <div className="intro">
        <p className="role">Full Stack Developer</p>
        <h1><span className='greeting'>Hi, I'm </span>
          <span className="name">Prachi Katkar</span></h1>
        <p>I build exceptional and accessible digital experiences for the web with modern technologies.</p>
        <div className="buttons">
          <button className="purple-btn" onClick={handleViewWorkClick}>View My Work</button>
          <button className="border-btn" onClick={handleGitHubClick}>GitHub</button>
        </div>
        <div className="tech-stack">
          <p>TECH STACK</p>
          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>JavaScript</span>
            <span>HTML/CSS</span>
            <span>MongoDB</span>
            <span>Chakra UI</span>
            <span>Bootstrap</span>
          </div>
        </div>
      </div>

      <div className="code-box">
<pre>{`// About me
const prachi = {
  education: {
    degree: "Bachelor of Computer Engineering",
    university: "Savitribai Phule Pune University",
    year: "2024",
    achievement: "CGPA: 9.25"
  },
  skills: [
    "Java","React.js", "Node.js", "JavaScript",
    "HTML/CSS", "MongoDB", "MySQL",
    "Express", "Bootstrap", "Chakra UI"
  ],
  experience: [
    {
      role: "Web Developer Intern",
      company: "KanakDigitex Platinum Pvt. Ltd.",
      period: "Mar 2023 - May 2023",
      achievements: [
        "Delivered two e-commerce platforms",
        "Enhanced user presence with TapFinder",
        "Maintained websites with CMS"
      ]
    }
  ]
}`}</pre>
      </div>
    </section>
  );
}
