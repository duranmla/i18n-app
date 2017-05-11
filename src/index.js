import React, { Component, PropTypes, Children } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import TranslationsProvider from './providers/TranslationsProvider';

const translations = {
  welcome_message: 'Hello World!'
};

ReactDOM.render(
  <TranslationsProvider translations={translations}>
    <App />
  </TranslationsProvider>,
  document.getElementById('root')
);
