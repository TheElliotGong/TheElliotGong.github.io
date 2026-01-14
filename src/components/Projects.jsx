import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

function Projects() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const contentRefs = useRef({});

  const categories = [
    { key: 'web-apps', label: 'Web Applications' },
    { key: 'games', label: 'Games and Levels' },
    { key: 'ux', label: 'UX/UI' },
    { key: '3d-models', label: '3D Assets' },
  ];

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 1023) {
      // On desktop, expand all
      categories.forEach((cat) => {
        if (contentRefs.current[cat.key]) {
          contentRefs.current[cat.key].style.maxHeight = contentRefs.current[cat.key].scrollHeight + 'px';
        }
      });
    } else {
      // On mobile, collapse all
      categories.forEach((cat) => {
        if (contentRefs.current[cat.key]) {
          contentRefs.current[cat.key].style.maxHeight = '0';
        }
      });
      setExpandedCategory(null);
    }
  };

  const toggleCategory = (categoryKey) => {
    if (window.innerWidth <= 1023) {
      if (expandedCategory === categoryKey) {
        setExpandedCategory(null);
        if (contentRefs.current[categoryKey]) {
          contentRefs.current[categoryKey].style.maxHeight = '0';
        }
      } else {
        // Close previous if exists
        if (expandedCategory && contentRefs.current[expandedCategory]) {
          contentRefs.current[expandedCategory].style.maxHeight = '0';
        }
        setExpandedCategory(categoryKey);
        if (contentRefs.current[categoryKey]) {
          contentRefs.current[categoryKey].style.maxHeight = contentRefs.current[categoryKey].scrollHeight + 'px';
        }
      }
    }
  };

  return (
    <section>
      <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">PROJECTS</h2>

      {categories.map((category) => (
        <div key={category.key}>
          <button
            className={`collapsible has-text-weight-bold is-size-3-desktop is-size-4-touch ${
              expandedCategory === category.key && window.innerWidth <= 1023 ? 'active' : ''
            }`}
            onClick={() => toggleCategory(category.key)}
          >
            {category.label}
          </button>
          <div
            ref={(el) => (contentRefs.current[category.key] = el)}
            className="content"
            style={{
              maxHeight: window.innerWidth > 1023 ? 'none' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.5s ease-out',
            }}
          >
            <div className="columns is-multiline rows projectContent">
              {projectsData[category.key] && projectsData[category.key].length > 0 ? (
                projectsData[category.key].map((project, index) => (
                  <ProjectCard key={`${category.key}-${index}`} project={project} />
                ))
              ) : (
                <p className="column is-full">No projects in this category yet.</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
