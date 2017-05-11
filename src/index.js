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
import TranslationsProvider from './providers/TranslationsProvider';

ReactDOM.render(
  <Provider store={store}>
    <TranslationsProvider>
      <App />
    </TranslationsProvider>
  </Provider>,
  document.getElementById('root')
);
