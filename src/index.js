import React, { Component, PropTypes, Children } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class ThemeProvider extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  }
  // you must specify what you’re adding to the context
  static childContextTypes = {
    theme: PropTypes.object.isRequired,
  }

  getChildContext() {
   const { theme } = this.props
   return { theme }
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children)
  }
}

const theme = {
  color: "#cc3300",
  fontFamily: "Georgia",
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
