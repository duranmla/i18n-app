import React, { Component, PropTypes, Children } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import i18nApp from './reducers';

const store = createStore(
  i18nApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// translations
import Polyglot from 'node-polyglot';
import locale from './locales/locale';
import TranslationsProvider from './providers/TranslationsProvider';

let translations = new Polyglot();
translations.extend(locale.en);

ReactDOM.render(
  <Provider store={store}>
    <TranslationsProvider translations={translations}>
      <App />
    </TranslationsProvider>
  </Provider>,
  document.getElementById('root')
);
