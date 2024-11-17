// ContactSection.js
import React from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css"; // CSS for styling
import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    { icon: <FaLinkedin />, title: "LINKEDIN", text: "Connect With Me", link: "https://www.linkedin.com/in/fayaz-shaik-82b2a9321/" },
    { icon: <FaWhatsapp />, title: "WHATSAPP", text: "Connect With Me", link: "https://wa.me/9014720938" },
    { icon: <FaEnvelope />, title: "EMAIL ADDRESS", text: "Connect With Me", link: "mailto:fayazshaik2551@gmail.com" },
    { icon: <FaInstagram />, title: "INSTAGRAM", text: "Connect With Me", link: "https://www.instagram.com/fayaz____25____/?next=%2F" },
  ];

  return (
    <>
      <section className="contact-section">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">Let's connect and create something amazing together!</p>
        <div className="contact-container">
          {contacts.map((contact, index) => (
            <div className="contact-item" key={index}>
              <div className="contact-icon">{contact.icon}</div>
              <h3>{contact.title}</h3>
              {contact.link ? (
                <p>
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.text}</a>
                </p>
              ) : (
                <p>{contact.text}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-section">
            <h3>About Me</h3>
            <p>
              "I'm a dedicated developer with a knack for turning concepts into interactive digital experiences. 
              Skilled in modern web technologies and driven by creativity. Reach out, and let's create together!"
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="footer-icons">
              <a href="https://www.instagram.com/fayaz____25____/?next=%2F" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/fayaz-shaik-82b2a9321/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Phone: +919014720938</p>
            <p>Email: <a href="mailto:fayazshaik2551@gmail.com">fayazshaik2551@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} </p>
          <p>Designed by Fayaz</p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
