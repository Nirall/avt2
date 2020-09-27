import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context("./favicon", true, /\.(ico|png|xml|svg)$/i));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

