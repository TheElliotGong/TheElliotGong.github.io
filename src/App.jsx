import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/bulma_version.css';

function App() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <hr id="projects" className="my-6 mx-auto" style={{ width: '90%' }} />
        <Projects />
        <hr id="experience" className="my-6 mx-auto" style={{ width: '90%' }} />
        <Experience />
      </main>
      <Contact />
      <Footer year={currentYear} />
    </div>
  );
}

export default App;
