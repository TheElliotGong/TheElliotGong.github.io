import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { projectCategories } from '../data/projectCategories';
import { featuredProjects } from '../data/featuredProjects';

const resolveAssetPath = (assetPath) =>
  /^(?:https?:)?\/\//.test(assetPath) ? assetPath : `${import.meta.env.BASE_URL}${assetPath.replace(/^\/?/, '')}`;

// First sentence of the project's "about" text, used as the card blurb.
const firstSentence = (text = '') => {
  const match = text.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : text;
};

function FeaturedWork() {
  const items = featuredProjects
    .map(({ category, name }) => {
      const project = (projectsData[category] || []).find((entry) => entry.name === name);
      const meta = projectCategories.find((entry) => entry.key === category);
      return project && meta ? { project, meta } : null;
    })
    .filter(Boolean);

  return (
    <section id="projects" className="featured-work">
      <div className="container">
        <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">SELECTED WORK</h2>
        <div className="columns is-multiline">
          {items.map(({ project, meta }) => (
            <div key={project.name} className="column is-full-mobile is-half-tablet is-one-third-desktop">
              <Link to={`/projects/${meta.slug}`} className="featured-card">
                {project.image ? (
                  <div className="featured-card__media">
                    <img src={resolveAssetPath(project.image.src)} alt={project.image.alt || project.name} />
                  </div>
                ) : (
                  <div className="featured-card__media featured-card__media--text">
                    <span>{meta.label}</span>
                  </div>
                )}
                <div className="featured-card__body">
                  <p className="featured-card__category">{meta.label}</p>
                  <h3 className="has-text-weight-bold is-size-5">{project.name}</h3>
                  <p className="featured-card__blurb">{firstSentence(project.description?.about)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="featured-work__more">
          <Link to="/projects" className="button is-link has-text-weight-bold">
            See all projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
