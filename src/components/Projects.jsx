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
          <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">
            {isLandingPage ? 'Browse by category' : "Check out what I've made!"}
          </h2>
          
        </div>

        <div className="columns is-multiline rows project-category-grid">
          {projectCategories.map((category) => {
            const projects = projectsData[category.key] || [];

            return (
              <Link to={`/projects/${category.slug}`} className="button is-link is-light" key={category.key}>
                 <h3 className="has-text-weight-bold is-size-4-desktop is-size-5-touch">{category.label}</h3></Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
