import React from 'react';
import QuickContact from './QuickContact';
import ResumeDownloads from './ResumeDownloads';

function Hero() {
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
            <p className="project-page-kicker has-text-weight-bold">Elliot Gong</p>
            {/*
              Headline options (swap one in below):
              1. I build where code meets craft: software and AI, 3D and games, backed by IT and systems.
              2. Engineer by training, artist by instinct: software, AI, 3D, and the systems behind them.
              3. From AI tools to 3D characters, I build things that are well engineered and well made.
            */}
            <h1 className="has-text-weight-bold is-size-2-desktop is-size-4-touch hero-headline">
              I build where code meets craft: software and AI, 3D and games, backed by IT and systems.
            </h1>

            <h3 className="has-text-weight-bold is-size-3-desktop is-size-5-touch">About Me</h3>
            <p className="is-size-6-touch">
              I'm a Computer Science master's student at Cal State LA with a bachelor's in Game Design and Development
              from RIT, and I most recently interned in IT at Copy Solutions, where I was promoted to supervise the
              intern program. Outside of work, I create 3D models and digital illustrations, read, watch TV, game, and
              play badminton.
            </p>
            <h3 className="has-text-weight-bold is-size-3-desktop is-size-5-touch">Objective</h3>
            <p className="is-size-6-touch">
              A creative technologist looking for roles that combine engineering and artistry, whether that means
              building software and AI tools, producing 3D and game content, or keeping the systems behind them
              running. Available full-time from June 2027.
            </p>
            <a
              className="has-text-weight-bold is-size-2-desktop is-size-3-touch"
              id="contactForm"
              href="https://formsubmit.co/el/waguyo"
            >
              Get in Touch!
            </a>
            <QuickContact />
            <ResumeDownloads />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
