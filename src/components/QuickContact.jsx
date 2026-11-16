import React, { useEffect, useState } from 'react';

const CONTACTS = {
  github: {
    href: 'https://github.com/TheElliotGong',
    alt: 'GITHUB',
  },
  email: {
    alt: 'EMAIL',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/elliot-gong/',
    alt: 'LINKEDIN',
  },
  sketchfab: {
    href: 'https://sketchfab.com/ElliotGong',
    alt: 'SKETCHFAB',
  },
  artstation: {
    href: 'https://elliot_gong.artstation.com',
    alt: 'ARTSTATION',
  },
  figma: {
    href: 'https://www.figma.com/@elliotgong',
    alt: 'FIGMA',
  },
};

const ALL = ['github', 'email', 'linkedin', 'sketchfab', 'artstation', 'figma'];

function QuickContact({ include = ALL }) {
  const [decodedEmail, setDecodedEmail] = useState('');

  useEffect(() => {
    const encodedEmail = 'dGhlZWxsaW90Z29uZ0Bob3RtYWlsLmNvbQ==';
    setDecodedEmail(atob(encodedEmail));
  }, []);

  return (
    <div id="quickContact" className="columns is-1 is-mobile">
      {include.map((key) => {
        const contact = CONTACTS[key];
        if (!contact) return null;
        const href = key === 'email' ? (decodedEmail ? `mailto:${decodedEmail}` : '#') : contact.href;

        return (
          <a
            key={key}
            className={`column button is-link has-text-weight-bold profile-link${key === 'email' ? ' email-link' : ''}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialCaption">{contact.alt}</span>
          </a>
        );
      })}
    </div>
  );
}

export default QuickContact;
