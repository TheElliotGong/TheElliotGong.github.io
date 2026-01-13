import React from 'react';

function ProjectCard({ project }) {
  const getThumbnail = () => {
    if (project.videoEmbed) {
      return (
        <iframe
          className="youtube"
          src={project.videoEmbed}
          title={project.name}
          allowFullScreen
        ></iframe>
      );
    } else if (project.image) {
      const img = (
        <img src={project.image.src} alt={project.image.alt || project.name} />
      );
      if (project.link) {
        return (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {img}
          </a>
        );
      }
      return img;
    } else if (project.link) {
      return (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
      );
    }
    return null;
  };

  return (
    <div className="project column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
      <h4 className="has-text-weight-bold is-size-4">
        {project.name}
        {project.year && ` (${project.year})`}
      </h4>
      {getThumbnail()}
      <ul>
        {project.link && !project.videoEmbed && (
          <li>
            <strong>Link:</strong>{' '}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        )}
        {project.workshopPage && (
          <li>
            <strong>Workshop:</strong>{' '}
            <a href={project.workshopPage} target="_blank" rel="noopener noreferrer">
              Workshop Page
            </a>
          </li>
        )}
        {project.artstationLink && (
          <li>
            <strong>Link:</strong>{' '}
            <a href={project.artstationLink} target="_blank" rel="noopener noreferrer">
              ArtStation
            </a>
          </li>
        )}
        {project.description?.about && (
          <li>
            <strong>About:</strong> {project.description.about}
          </li>
        )}
        {project.description?.whatIDid && (
          <li>
            <strong>What I did:</strong> {project.description.whatIDid}
          </li>
        )}
        {project.description?.teamSize && (
          <li>
            <strong>Team Size:</strong> {project.description.teamSize}
          </li>
        )}
        {project.description?.projectLength && (
          <li>
            <strong>Project Length:</strong> {project.description.projectLength}
          </li>
        )}
        {project.description?.tools && (
          <li>
            <strong>Tools:</strong> {project.description.tools}
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProjectCard;
