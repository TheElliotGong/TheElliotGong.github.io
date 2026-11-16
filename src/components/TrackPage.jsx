import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import Experience from './Experience';
import Skills from './Skills';
import Recommendations from './Recommendations';
import QuickContact from './QuickContact';
import ResumeDownloads from './ResumeDownloads';
import projectsData from '../data/projects.json';
import { projectCategories } from '../data/projectCategories';
import { tracks } from '../data/tracks';

const allProjects = Object.values(projectsData).flat();

function TrackPage({ track }) {
  useEffect(() => {
    document.title = track.pageTitle;
    return () => {
      document.title = 'Elliot Gong - Portfolio';
    };
  }, [track]);

  const featured = track.featuredProjects
    .map((name) => allProjects.find((project) => project.name === name))
    .filter(Boolean);

  const moreCategories = track.moreCategories
    .map((key) => projectCategories.find((category) => category.key === key))
    .filter(Boolean);

  const otherTracks = tracks.filter((other) => other.slug !== track.slug);

  return (
    <main className="track-page">
      <section id="about" className="track-hero">
        <div className="container">
          <p className="project-page-kicker has-text-weight-bold">Elliot Gong &middot; {track.navLabel}</p>
          <h1 className="has-text-weight-bold is-size-1-desktop is-size-3-touch">{track.headline}</h1>
          <p className="track-hero__tagline is-size-5-desktop is-size-6-touch">{track.tagline}</p>
          <p className="track-hero__objective is-size-6-touch">
            <strong>Objective:</strong> {track.objective}
          </p>
          <div className="project-page-links">
            <a className="button is-link has-text-weight-bold" href="https://formsubmit.co/el/waguyo">
              Get in Touch
            </a>
            <Link className="button is-link has-text-weight-bold" to="/">
              See all my work
            </Link>
          </div>
          <QuickContact include={track.contacts} />
          <ResumeDownloads only={[track.slug]} title="Download my resume" />
        </div>
      </section>

      <hr className="my-6 mx-auto section-divider" />

      <section id="projects">
        <div className="container">
          <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">FEATURED PROJECTS</h2>
          <div className="columns is-multiline rows projectContent">
            {featured.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div className="project-page-links track-more">
            <span className="has-text-weight-bold">More in this area:</span>
            {moreCategories.map((category) => (
              <Link key={category.slug} to={`/projects/${category.slug}`} className="button is-link is-outlined">
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-6 mx-auto section-divider" />
      <div className="container" id="experience-section">
        <Experience only={track.experience} />
        <p className="track-full-link">
          <Link to="/#experience">See my full work history</Link>
        </p>
      </div>

      <hr className="my-6 mx-auto section-divider" />
      <div className="container" id="skills-section">
        <Skills only={track.skills} />
      </div>

      <hr className="my-6 mx-auto section-divider" />
      <div className="container" id="recommendations-section">
        <Recommendations />
      </div>

      <hr className="my-6 mx-auto section-divider" />
      <div className="container track-other">
        <p className="has-text-weight-bold">Hiring for something else?</p>
        <div className="project-page-links">
          {otherTracks.map((other) => (
            <Link key={other.slug} to={`/${other.slug}`} className="button is-link is-outlined">
              {other.navLabel}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default TrackPage;
