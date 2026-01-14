import React from 'react';

function Copyright({ year }) {
  return (

      <h2 className="has-text-centered has-text-weight-bold is-size-4">
        &copy; Elliot Gong <span id="year">{year}</span>
      </h2>

  );
}

export default Copyright;
