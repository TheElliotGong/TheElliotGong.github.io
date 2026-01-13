import React from 'react';
import employmentData from '../data/employment.json';

function Experience() {
  return (
    <section>
      <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">EXPERIENCE</h2>
      {employmentData.map((job, index) => (
        <div key={index} className="employment block">
          <div className="employmentInfo block">
            <h2 className="has-text-weight-bold is-size-3-desktop is-size-5-touch">
              {job.jobTitle}
            </h2>
            <div className="jobInfo">
              <h3 className="has-text-weight-bold is-size-4-desktop is-size-6-touch">
                {job.company}
              </h3>
              <h3 className="has-text-weight-bold is-size-4-desktop is-size-6-touch">
                {job.duration}
              </h3>
            </div>
          </div>
          {job.duties && job.duties.length > 0 && (
            <ul>
              {job.duties.map((duty, dutyIndex) => (
                <li key={dutyIndex} className="is-size-6-touch">
                  {duty}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

export default Experience;
