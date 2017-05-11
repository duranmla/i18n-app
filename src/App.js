import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

import Translations from './hocs/Translations'

class App extends Component {
  render() {
    const { translations } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{ translations.t('welcome_message') }</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Translations(App);
