import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';
import { getProjectCategoryBySlug } from '../data/projectCategories';

function ProjectCategoryPage() {
  const { categorySlug } = useParams();
  const category = getProjectCategoryBySlug(categorySlug);

  if (!category) {
    return <Navigate to="/projects" replace />;
  }

  const projects = projectsData[category.key] || [];

  return (
    <main className="project-page">
      <section className="project-page-header project-page-header--full">
        <div className="container">
          
          <h1 className="has-text-weight-bold is-size-1-desktop is-size-3-touch">{category.label}</h1>
          
        </div>
      </section>

      <section>
        <div className="container">
          <div className="columns is-multiline rows projectContent">
            {projects.length > 0 ? (
              projects.map((project, index) => <ProjectCard key={`${category.key}-${index}`} project={project} />)
            ) : (
              <p className="column is-full">No projects in this category yet.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectCategoryPage;