import React, { useEffect, useState } from 'react';
import resumes from '../data/resumes.json';

// Resume PDFs live in public/media/resumes/ and are listed in
// src/data/resumes.json. A button only appears once its PDF actually exists:
// each file is probed with a HEAD request, and anything that is missing
// (GitHub Pages returns 404; the Vite dev server falls back to index.html)
// is hidden.
const resolveAssetPath = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\/?/, '')}`;

async function fileExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
    const type = response.headers.get('content-type') || '';
    return response.ok && type.includes('pdf');
  } catch {
    return false;
  }
}

function ResumeDownloads({ only, title = 'Download Resume' }) {
  const [available, setAvailable] = useState([]);
  // A string key keeps the effect from re-running when callers pass a new array.
  const onlyKey = only ? only.join(',') : '';

  useEffect(() => {
    let cancelled = false;
    const tracks = onlyKey ? onlyKey.split(',') : null;
    const candidates = tracks ? resumes.filter((resume) => tracks.includes(resume.track)) : resumes;

    Promise.all(
      candidates.map(async (resume) => ((await fileExists(resolveAssetPath(resume.file))) ? resume : null))
    ).then((results) => {
      if (!cancelled) setAvailable(results.filter(Boolean));
    });

    return () => {
      cancelled = true;
    };
  }, [onlyKey]);

  if (available.length === 0) return null;

  return (
    <div className="resume-downloads">
      <h3 className="has-text-weight-bold is-size-5-desktop is-size-6-touch">{title}</h3>
      <div className="resume-downloads__buttons">
        {available.map((resume) => (
          <a
            key={resume.track}
            className="button is-link has-text-weight-bold"
            href={resolveAssetPath(resume.file)}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            {resume.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ResumeDownloads;
