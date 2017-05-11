import React, { Component, PropTypes, Children } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Polyglot from 'node-polyglot';
import locale from './locales/locale';
import TranslationsProvider from './providers/TranslationsProvider';

let translations = new Polyglot();
translations.extend(locale.en);

ReactDOM.render(
  <TranslationsProvider translations={translations}>
    <App />
  </TranslationsProvider>,
  document.getElementById('root')
);
