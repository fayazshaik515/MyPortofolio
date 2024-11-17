import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import About from './components/About.js';
import Skills from './components/Skills.js';
import ProjectsPage from './components/ProjectPage.js';
import ProjectDetailPage from './components/ProjectDetailPage.js';
import ContactSection from './components/ContactSection.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactSection />} />  {/* Add the Contact page route */}

      </Routes>
    </Router>
  );
}

export default App;
