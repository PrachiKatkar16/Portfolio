import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import bookClubImage from '../assets/book-club.png'
import spacImage from '../assets/spac.jpg'
import pharmEasy from '../assets/pharmEasy.jpg'
import { FaGithub } from 'react-icons/fa';

const projectData = [
  {
    title: 'Book Club',
    description: 'An interactive online book store for purchasing books online',
    category: 'Web',
    tags: ['React', 'JavaScript', 'API', 'Redux','HTML5','CSS3'],
    code: 'https://github.com/PrachiKatkar16/Book-Club',
    live: '#',
    image:bookClubImage
  },
  {
    title: 'Smart Plate Access Control',
    description: 'Developed an advanced parking access control system using IOT',
    category: 'IoT',
    tags: ['Python', 'OCR', 'Arduino', 'IOT'],
    code: 'https://github.com/PrachiKatkar16/SmartPlateAccessControl',
    live: null,
    label: 'Research',
    image:spacImage
  },
  {
    title: 'PharmEasy Clone',
    description: 'Developed a PharmEasy Clone with responsive web design',
    category: 'Web',
    tags: ['HTML5', 'JavaScript', 'React', 'Redux'],
    code: 'https://github.com/PrachiKatkar16/PharmEasy-Clone-App',
    live: '#',
    image:pharmEasy
  },
];

const tabs = ['All', 'Web', 'IoT'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects =
    activeTab === 'All'
      ? projectData
      : projectData.filter((project) => project.category === activeTab);

  return (
    <section className="projects-section">
      <h2>
        <span className="white">Featured </span>
        <span className="gradient">Projects</span>
      </h2>
      <p className="description">
        Explore my recent projects showcasing my skills and experience in web development, including e-commerce platforms, interactive applications, and innovative solutions.
      </p>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'tab active' : 'tab'}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
