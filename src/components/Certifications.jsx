import React from 'react';
import credentials from '../data/credentials.json';

function Certifications() {
  const { certifications } = credentials;

  return (
    <section id="certifications">
      <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">CERTIFICATIONS</h2>
      <div className="columns is-multiline is-0-mobile is-1-tablet is-2-desktop is-3-widescreen">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="skillset column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
          >
            <div className="skill certification">
              <h3 className="has-text-weight-bold is-size-4-desktop is-size-5-touch">{cert.name}</h3>
              <hr />
              <p className="is-size-6-touch">{cert.issuer}</p>
              <p className="is-size-6-touch">{cert.date}</p>
              {cert.url && (
                <p className="is-size-6-touch">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    Verify
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
