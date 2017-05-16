import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';
import Text from './Text';

class App extends Component {
  shouldComponentUpdate() {
    /*
      This will force us to delivery a prototype that
      actually prevent the translations from stop working
      if a parent element stop the update tree from been updated
      after a props or state changed
     */
    return false;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Text text="welcome_message" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button language="es" />
        <Button language="en" />
      </div>
    );
  }
}

export default App;
