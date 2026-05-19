import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectCategoryPage from './components/ProjectCategoryPage';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import './styles/bulma_version.css';

function HomePage() {
  return (
    <main>
      <Hero />
      <Projects mode="home" />
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
