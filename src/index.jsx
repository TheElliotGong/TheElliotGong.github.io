import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const redirectPath = sessionStorage.getItem('redirect-path');

if (redirectPath) {
  sessionStorage.removeItem('redirect-path');
  window.history.replaceState(null, '', redirectPath);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
