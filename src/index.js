import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Root from 'views/Root.js';
import { worker } from 'mocks/browser';
import AppProviders from 'providers/AppProviders.js';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
