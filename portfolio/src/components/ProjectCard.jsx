import React from 'react';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
        <div className="image-container">
        {project.image ? (
            <img src={project.image} alt={project.title} />
        ) : (
            <div className="image-placeholder">📷</div>
        )}
        </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              title="View Code on GitHub"
            >
              <FaGithub className="github-icon" />
              <span>Code</span>
            </a>
          )}

          {/* {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="live-btn"
            >
              View Live
            </a>
          )}

          {project.label && (
            <span className="label">{project.label}</span>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
