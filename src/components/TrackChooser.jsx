import React from 'react';
import { Link } from 'react-router-dom';
import { tracks } from '../data/tracks';

function TrackChooser() {
  return (
    <div className="track-chooser">
      <h3 className="has-text-weight-bold is-size-3-desktop is-size-5-touch">What are you hiring for?</h3>
      <div className="columns is-multiline">
        {tracks.map((track) => (
          <div key={track.slug} className="column is-full-mobile is-one-third-tablet">
            <Link to={`/${track.slug}`} className="track-door box">
              <span className="track-door__label has-text-weight-bold is-size-4-desktop is-size-5-touch">
                {track.doorLabel} &rarr;
              </span>
              <span className="track-door__blurb">{track.doorBlurb}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackChooser;
