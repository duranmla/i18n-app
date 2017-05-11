import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from './actions';

class Button extends Component {
  render() {
    const { language, onClickButton } = this.props;

    return (
      <button onClick={() => onClickButton(language)}>{language}</button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickButton: (language) => {
      dispatch(changeLanguage(language))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Button);