import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Views/App';
import Home from './Views/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
