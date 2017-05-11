import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

const theme = (ComponentToWrap) => {
  return class ThemeComponent extends Component {
    // let’s define what’s needed from the `context`
    static contextTypes = {
      theme: PropTypes.object.isRequired,
    }
    render() {
      const { theme } = this.context
      // what we do is basically rendering `ComponentToWrap`
      // with an added `theme` prop, like a hook
      return (
        <ComponentToWrap {...this.props} theme={theme} />
      )
    }
  }
}


class App extends Component {
  render() {
    const { theme } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={{ color: theme.color }}>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default theme(App);
