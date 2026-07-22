import React from 'react';
import skillsData from '../data/skills.json';

function Skills() {
  const categories = Object.entries(skillsData);

  return (
    <section id="skills">
      <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">SKILLS</h2>
      <div className="columns is-multiline is-0-mobile is-1-tablet is-2-desktop is-3-widescreen">
        {categories.map(([category, items]) => (
          <div
            key={category}
            className="skillset column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
          >
            <div className="skill">
              <h3 className="has-text-weight-bold is-size-3-desktop is-size-4-touch">{category}</h3>
              <hr />
              <ul>
                {items.map((item) => (
                  <li key={item} className="is-size-6-touch">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
