import React from "react";
import "./About.css";
import profileImage from '../assets/Mypic.jpg'; // Replace with your actual image path
import resumeFile from '../assets/FayazShaik515 (1).pdf'; // Replace with your actual resume path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-profile">
        <img src={profileImage} alt="Profile" className="profile-img" />
      </div>
      <div className="about-content">
        <h2>ABOUT ME</h2>
        <p>
          I’m Fayaz Shaik, a passionate Java Fullstack Developer dedicated to crafting seamless, high-performance applications. With expertise in Java, Spring Boot, and React, I build scalable solutions that solve real-world problems.
           I’m driven by the challenge of transforming ideas into intuitive, user-friendly experiences while ensuring robust backend functionality. Always learning, always improving—my goal is to deliver clean, efficient code that drives results. Let’s create something extraordinary together!
        </p>
        {/* Open CV Button */}
        <a href={resumeFile} target="_blank" rel="noopener noreferrer">
          <button className="download-button">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default About;
