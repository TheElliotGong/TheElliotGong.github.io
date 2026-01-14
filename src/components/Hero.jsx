import React, { useState, useEffect } from 'react';

function Hero() {
  const [decodedEmail, setDecodedEmail] = useState('');

  useEffect(() => {
    const encodedEmail = 'dGhlZWxsaW90Z29uZ0Bob3RtYWlsLmNvbQ==';
    setDecodedEmail(atob(encodedEmail));
  }, []);

  return (
    <section>
      <div id="about"></div>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-one-third" id="photo">
            <figure className="image is-4by5 has-ratio" id="headshot">
              <img className="is-rounded" src="media/images/face.jpg" alt="Elliot Gong Headshot" />
            </figure>
          </div>
          <div className="column">
            <h1 className="has-text-weight-bold is-size-1-desktop is-size-3-touch">Hi, I'm Elliot Gong!</h1>
            <h2 className="has-text-weight-bold is-size-2-desktop is-size-4-touch">
              Game/Software/UX Developer
            </h2>

            <h3 className="has-text-weight-bold is-size-3-desktop is-size-5-touch">About Me</h3>
            <p className="is-size-6-touch">
              I'm a current masters student studying computer science with experience in AI, full-stack development, UX
              design, game design/development, and 3D modeling. In my free time, I like to create 3D models and digital
              illustrations, read, watch tv, play videogames and play badminton.
            </p>
            <a
              className="has-text-weight-bold is-size-2-desktop is-size-3-touch"
              id="contactForm"
              href="https://formsubmit.co/el/waguyo"
            >
              Get in Touch
            </a>
            <div id="quickContact" className="columns is-1 is-mobile">
              <a className="column" href="https://github.com/TheElliotGong" target="_blank" rel="noopener noreferrer">
                <img
                  className="socialMedia"
                  width="50"
                  src="media/images/logos_and_icons/github.png"
                  alt="GitHub"
                />
              </a>
              <a
                className="column email-link"
                href={decodedEmail ? `mailto:${decodedEmail}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="socialMedia"
                  width="50"
                  src="media/images/logos_and_icons/email_2.png"
                  alt="Email"
                />
              </a>
              <a
                className="column"
                href="https://www.linkedin.com/in/elliot-gong/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="socialMedia"
                  width="50"
                  src="media/images/logos_and_icons/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
              <a className="column" href="https://sketchfab.com/Taterblock17" target="_blank" rel="noopener noreferrer">
                <img
                  className="socialMedia"
                  width="50"
                  src="media/images/logos_and_icons/sketchfab.png"
                  alt="Sketchfab"
                />
              </a>
              <a
                className="column"
                href="https://www.artstation.com/elliot_gong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="socialMedia"
                  width="50"
                  src="media/images/logos_and_icons/artstation.png"
                  alt="ArtStation"
                />
              </a>
              <a
                className="column"
                href="https://www.figma.com/@elliotgong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="socialMedia" height="50" width="50" src="media/images/logos_and_icons/Figma.png" alt="Figma" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
