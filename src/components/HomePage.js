import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/projects');
  };

  return (
    <div className="container">
      {/* Intro Section */}
      <div className="intro">
        <p className="intro-text">WELCOME TO MY WORLD</p>
        <h1>
          Hi, I’m <span className="highlight">Fayaz Shaik</span>
          <br /> Java FullStack Developer
        </h1>
        <p className="description">
          I specialize in building robust backend systems and dynamic web applications using Java, Spring Boot, React, and more.
        </p>
        <button className="explore-button" onClick={handleExploreClick}>
          Explore My Work
        </button>
      </div>
    </div>
  );
};

export default HomePage;
