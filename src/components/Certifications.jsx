import React, { useState } from 'react';
import credentials from '../data/credentials.json';

function CertificationCard({ cert }) {
  return (
    <div className="skillset column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
      <div className="skill certification">
        <h3 className="has-text-weight-bold is-size-4-desktop is-size-5-touch">{cert.name}</h3>
        <hr />
        <p className="is-size-6-touch">{cert.issuer}</p>
        <p className="is-size-6-touch">{cert.date}</p>
        {cert.skills && (
          <p className="is-size-6-touch certSkills">
            <strong>Covers:</strong> {cert.skills}
          </p>
        )}
        {cert.url && (
          <p className="is-size-6-touch">
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              {cert.linkLabel || 'Verify'}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

function Certifications() {
  const { certifications } = credentials;
  const [showMore, setShowMore] = useState(false);

  // Certifications flagged `featured` in credentials.json are always shown;
  // the remaining short courses sit behind an in-place toggle.
  const featured = certifications.filter((cert) => cert.featured);
  const more = certifications.filter((cert) => !cert.featured);

  return (
    <section id="certifications">
      <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">CERTIFICATIONS</h2>
      <div className="columns is-multiline is-0-mobile is-1-tablet is-2-desktop is-3-widescreen">
        {featured.map((cert) => (
          <CertificationCard key={cert.name} cert={cert} />
        ))}
      </div>

      {more.length > 0 && (
        <>
          <button
            type="button"
            className="cert-toggle has-text-weight-bold"
            aria-expanded={showMore}
            aria-controls="more-certifications"
            onClick={() => setShowMore((open) => !open)}
          >
            {showMore ? 'Hide' : 'More'} AI coursework ({more.length}) {showMore ? '▴' : '▾'}
          </button>
          <div
            id="more-certifications"
            className="columns is-multiline is-0-mobile is-1-tablet is-2-desktop is-3-widescreen"
            hidden={!showMore}
          >
            {more.map((cert) => (
              <CertificationCard key={cert.name} cert={cert} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Certifications;
