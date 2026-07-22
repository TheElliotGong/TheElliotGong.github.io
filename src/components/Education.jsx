import React from 'react';
import credentials from '../data/credentials.json';

function Education() {
  const { education } = credentials;

  return (
    <section id="education">
      <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">EDUCATION</h2>
      <div className="columns is-multiline">
        {education.map((item) => (
          <div key={item.degree} className="column is-full-mobile is-half-tablet">
            <div className="education">
              <h3 className="has-text-weight-bold is-size-3-desktop is-size-4-touch">{item.degree}</h3>
              <h4 className="has-text-weight-bold is-size-4-desktop is-size-5-touch">{item.school}</h4>
              <p className="is-size-6-touch">{item.detail}</p>
              <p className="is-size-6-touch">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;