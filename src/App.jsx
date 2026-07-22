import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ProjectCategoryPage from './components/ProjectCategoryPage';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import './styles/bulma_version.css';

function HomePage() {
  return (
    <main>
      <Hero />
      <Projects mode="home" />
      <hr className="my-6 mx-auto section-divider" />
      <div className="container" id="experience-section">
        <Experience />
      </div>
      <hr className="my-6 mx-auto section-divider" />
      <div className="container" id="skills-section">
        <Skills />
      </div>
      <hr className="my-6 mx-auto section-divider" />
      <div className="container" id="education-section">
        <Education />
      </div>
      <hr className="my-6 mx-auto section-divider" />
      <div className="container" id="certifications-section">
        <Certifications />
      </div>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main>
      <Projects mode="page" />
    </main>
  );
}

function App() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:categorySlug" element={<ProjectCategoryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <footer>
          <Contact />
          <Copyright year={currentYear} />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
