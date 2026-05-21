import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { projectCategories } from '../data/projectCategories';

function Projects({ mode = 'home' }) {
  const isLandingPage = mode === 'page';

  return (
    <section id="projects" className="projects-overview">
      <div className="container">
        <div className="project-page-header">
          <h1 className="has-text-weight-bold is-size-1-desktop is-size-3-touch">
            {isLandingPage ? 'Browse by category' : "Come check out what I've made!"}
          </h1>
          
        </div>

        <div className="columns is-multiline rows project-category-grid">
          {projectCategories.map((category) => {
            const projects = projectsData[category.key] || [];

            return (
              <Link to={`/projects/${category.slug}`} className="button is-link has-text-weight-bold is-size-2-desktop is-size-3-touch" key={category.key}>
                 {category.label}</Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
