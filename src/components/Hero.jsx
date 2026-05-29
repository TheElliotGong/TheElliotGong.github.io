import React, { useState, useEffect } from 'react';

function Hero() {
  const [decodedEmail, setDecodedEmail] = useState('');

  useEffect(() => {
    const encodedEmail = 'dGhlZWxsaW90Z29uZ0Bob3RtYWlsLmNvbQ==';
    setDecodedEmail(atob(encodedEmail));
  }, []);

  return (
    <section id="about">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-one-third" id="photo">
            <figure className="image is-4by5 has-ratio" id="headshot">
              <img className="is-rounded" src="media/images/face.jpg" alt="Elliot Gong Headshot" />
            </figure>
          </div>
          <div className="column">
            <h1 className="has-text-weight-bold is-size-1-desktop is-size-3-touch">Hi, I'm Elliot Gong!
              <br/>And welcome to my Portfolio!
            </h1>

            <h3 className="has-text-weight-bold is-size-3-desktop is-size-5-touch">About Me</h3>
            <p className="is-size-6-touch">
              I'm a current masters student studying computer science with experience in full-stack development, UX
              design, and game development. After completing my bachelors in game design, I decided to return to school to further my knowledge in topics such as AI, cybersecurity, and operating systems. In my free time, I like to create 3D models, make digital 
              illustrations, read, watch tv, game, and play badminton.
            </p>
            <h3 className="has-text-weight-bold is-size-3-desktop is-size-5-touch">Objective</h3>
            <p className="is-size-6-touch">
              Seeking opportunities to apply my skills in software engineering, web development, AI, UX/UI, and project management.
            </p>
            <a
              className="has-text-weight-bold is-size-2-desktop is-size-3-touch"
              id="contactForm"
              href="https://formsubmit.co/el/waguyo"
            >
              Get in Touch!
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
              <a className="column" href="https://sketchfab.com/ElliotGong" target="_blank" rel="noopener noreferrer">
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
                <img className="socialMedia"width="50" src="media/images/logos_and_icons/Figma.png" alt="Figma" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
