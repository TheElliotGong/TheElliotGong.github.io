import React from 'react';

function Footer({ year }) {
  return (
    <div className="footer-copyright">
      <h2 className="has-text-centered has-text-weight-bold is-size-4">
        &copy; Elliot Gong <span id="year">{year}</span>
      </h2>
    </div>
  );
}

export default Footer;
