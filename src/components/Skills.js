import React from 'react';
import './Skills.css'; // Importing the new CSS file
import javaImage from '../assets/java.png';
import react from '../assets/react.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import redux from '../assets/redux.png';
import springboot from '../assets/springboot.png';
import rest from '../assets/rest.png';
import sql from '../assets/sql.png';
import mongo from '../assets/mongo.png';
import dsa from '../assets/dsa.png';
import aws from '../assets/aws.png';
import git from '../assets/git.png';
import gitt from '../assets/gitt.png';
import doc from '../assets/doc.png';









const skills = [
{ name: 'Java', image: javaImage },
{ name: 'React', image: react },
{ name: 'HTML', image: html},
{ name: 'CSS', image: css },
  { name: 'Redux', image: redux },
  { name: 'Spring Boot', image:springboot },
  { name: 'RESTful API', image: rest },
  { name: 'MySQL', image: sql },
  { name: 'MongoDB', image: mongo },
  { name: 'Data Structures & Algorithms', image: dsa },
  { name: 'AWS', image: aws },
  { name: 'Git', image: git },
  { name: 'GitHub', image: gitt },
  { name: 'Docker', image: doc },

];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-box">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
