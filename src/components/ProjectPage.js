import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';
import ott from '../assets/ott.png';
import weather from '../assets/weather.png';
import works from '../assets/works.png';

const projects = [
  {
    id: 1,
    name: 'OTT PLATFORM',
    description: 'A full-stack Movie App with secure login, fast search, and filtering features!',
    github: 'https://github.com/fayazshaik515/MovieFrontend',
    liveDemo: 'https://yourliveprojectone.com',
    image: ott,
  },
  {
    id: 2,
    name: 'WEATHER APP',
    description: 'A real-time weather app with real-time city weather updates using OpenWeather API!',
    github: 'https://github.com/yourusername/project-two',
    liveDemo: 'https://yourliveprojecttwo.com',
    image: weather,
  },
  {
    id: 3,
    name: 'MR ENGINEERING WORKS',
    description: 'A custom welding service website to showcase work and contact options.',
    github: 'https://github.com/yourusername/project-two',
    liveDemo: 'https://yourliveprojecttwo.com',
    image: works,
  },
];

const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item" onClick={() => openModal(project)}>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <Link to={`/project/${project.id}`}>View Details</Link>
          </div>
        ))}
      </div>

      {showModal && currentProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{currentProject.name}</h2>
            <img src={currentProject.image} alt={currentProject.name} />
            <p>{currentProject.description}</p>
            <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="button">
              GitHub (Frontend)
            </a>
            <a href={currentProject.liveDemo} target="_blank" rel="noopener noreferrer" className="button">
              Live Demo
            </a>
            <button onClick={closeModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
