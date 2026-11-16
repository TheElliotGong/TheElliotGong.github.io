import React from 'react';

function ProjectCard({ project }) {
  const resolveAssetPath = (assetPath) => {
    if (!assetPath || /^(?:https?:)?\/\//.test(assetPath) || assetPath.startsWith('data:')) {
      return assetPath;
    }

    return `${import.meta.env.BASE_URL}${assetPath.replace(/^\/?/, '')}`;
  };

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
        <img src={resolveAssetPath(project.image.src)} alt={project.image.alt || project.name} />
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

  const thumbnail = getThumbnail();
  // Private work (no image, video or link) renders as a text-only case-study
  // card instead of leaving an empty thumbnail slot.
  const isTextOnly = !thumbnail;

  return (
    <div
      className={`project column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen${
        isTextOnly ? ' project--text-only' : ''
      }`}
    >
      <div className="project__inner">
        <h4 className="has-text-weight-bold is-size-4">
          {project.name}
          {project.year && ` (${project.year})`}
        </h4>
        {isTextOnly && <p className="project__private-note">Private work &middot; no public link</p>}
        {thumbnail}
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
          {project.additionalLinks?.map((extra) => (
            <li key={extra.url}>
              <strong>{extra.label}:</strong>{' '}
              <a href={extra.url} target="_blank" rel="noopener noreferrer">
                {extra.text || 'View'}
              </a>
            </li>
          ))}
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
          {project.description?.impact && (
            <li>
              <strong>Impact:</strong> {project.description.impact}
            </li>
          )}
          {project.description?.learned && (
            <li>
              <strong>What I learned:</strong> {project.description.learned}
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
    </div>
  );
}

export default ProjectCard;
