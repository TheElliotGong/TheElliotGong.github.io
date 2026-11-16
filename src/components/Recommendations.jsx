import React from 'react';
import recommendations from '../data/recommendations.json';

function Recommendations() {
  return (
    <section id="recommendations">
      <h2 className="has-text-weight-bold is-size-2-desktop is-size-3-touch">RECOMMENDATIONS</h2>
      <div className="columns is-multiline">
        {recommendations.map((rec) => (
          <div key={rec.name} className="column is-full-mobile is-half-tablet">
            <blockquote className="recommendation">
              {rec.quote.split('\n').map((paragraph, index) => (
                <p key={index} className="is-size-6-touch">
                  {index === 0 ? '\u201C' : ''}
                  {paragraph}
                  {index === rec.quote.split('\n').length - 1 ? '\u201D' : ''}
                </p>
              ))}
              <p className="recommendationAuthor is-size-6-touch">
                <strong>{rec.name}</strong>
                <br />
                {rec.title}
                <br />
                {rec.relationship}, {rec.date}
              </p>
            </blockquote>
          </div>
        ))}
      </div>
      <p className="recommendationLink is-size-6-touch">
        <a href="https://www.linkedin.com/in/elliot-gong/" target="_blank" rel="noopener noreferrer">
          Read the full recommendations on LinkedIn
        </a>
      </p>
    </section>
  );
}

export default Recommendations;
