import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetailPage.css';
import ott from '../assets/ott.png';
import weather from '../assets/weather.png';
import works from '../assets/works.png';

// Projects array
const projects = [
  {
    id: 1,
    name: 'OTT PLATFORM',
    description: (
      <p>
        A full-stack Movie App! 🎬🍿 <br />
        <strong className="backend">Backend (Java Spring Boot + SQL):</strong>
        <ul>
          <li>📦 RESTful APIs for movies, genres, and user management.</li>
          <li>🔒 Secure login/registration with SQL integration for efficient data handling.</li>
          <li>⚡️ Fast endpoints for searching and filtering movies.</li>
          <li>🛠️ Thoroughly tested APIs using Postman.</li>
        </ul>
        <strong className="frontend">Frontend (React + Redux):</strong>
        <ul>
          <li>🎨 Interactive UI with genre filtering, movie search, and detailed pages.</li>
          <li>📂 State management via Redux for smooth data flow.</li>
          <li>💬 Login/registration dialogs for user personalization.</li>
        </ul>
        A rewarding project combining Java's backend power with React's frontend flexibility! 🚀
      </p>
    ),
    githubFrontend: 'https://github.com/fayazshaik515/MovieFrontend',
    githubBackend: 'https://github.com/fayazshaik515/MovieBackend',
    liveDemo: '', // Removed live demo for OTT
    image: ott,
  },
  {
    id: 2,
    name: 'WEATHER APP',
    description: <p>
  A real-time Weather App! 🌦️🌍 <br />
  <strong className="backend">Backend (OpenWeather API):</strong>
  <ul>
    <li>📦 Fetches real-time weather data using the OpenWeather API.</li>
    <li>🔒 Secure API calls with proper data handling and error management.</li>
    <li>⚡️ Fast and efficient API responses for dynamic weather updates.</li>
  </ul>
  <strong className="frontend">Frontend (React + Redux + Axios):</strong>
  <ul>
    <li>🌆 Search functionality for any city with real-time weather updates.</li>
    <li>📱 Fully responsive design for a seamless experience on all devices.</li>
    <li>🔄 Efficient state management with Redux for smooth data handling.</li>
    <li>💬 API calls made using Axios for fetching data in real-time.</li>
  </ul>
  A practical project showcasing real-time weather data fetching with an intuitive UI! 🚀
</p>,
    liveDemo: 'https://weatherapp515.netlify.app/',
    image: weather,
  },
  {
    id: 3,
    name: 'MR ENGINEERING WORKS',
    description: <p>
    A custom Welding Service Website! 🛠️💥 <br />
    <strong className="frontend">Frontend (HTML, CSS, React, JavaScript):</strong>
    <ul>
      <li>🎨 Dynamic and responsive user interface for a seamless experience.</li>
      <li>📸 Image gallery showcasing high-quality project images for potential customers.</li>
      <li>📱 Contact options integrated for quick communication via email and WhatsApp.</li>
    </ul>
    <strong className="backend">Backend (Spring Boot + MongoDB):</strong>
    <ul>
      <li>⚙️ Robust data management using MongoDB for project and user data.</li>
      <li>📧 Email functionality for capturing inquiries and sending them directly to the client’s email.</li>
    </ul>
    A project combining technology with craftsmanship to elevate a traditional service industry! 🚀
  </p>
  ,
    githubFrontend: 'https://github.com/fayazshaik515/MRengineerworksfrontend',
    githubBackend: 'https://github.com/fayazshaik515/MREngineerworksBackend',
    liveDemo: 'https://mrengineeringworks.netlify.app/',
    image: works,
  },
];

const ProjectDetailPage = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projects.find((proj) => proj.id === parseInt(id)); // Find the project by ID

  if (!project) {
    return <p>Project not found!</p>; // Handle invalid IDs
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>{project.description}</p>
      <div>
        {project.githubFrontend && (
          <a
            href={project.githubFrontend}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            GitHub (Frontend)
          </a>
        )}
        {project.githubBackend && (
          <a
            href={project.githubBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            GitHub (Backend)
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
