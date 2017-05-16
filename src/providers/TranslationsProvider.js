import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventEmitter from '../EventEmitter';
import Translations from '../locales/Translations';

class TranslationsProvider extends Component {
  static childContextTypes = {
    translations: PropTypes.func.isRequired,
  }

  getChildContext() {
    /*
      Everytime the props or state change we will update
      the translations by updating the stringHandler within the
      Translations class
     */
    Translations.loadTranslations(this.props.language);

    /*
      Send the "Translations" class as an immutable entity in the
      child context to be able to get the last locale within the children
     */
    return { translations: Translations };
  }

  componentDidUpdate(prevProps) {
    /*
      Update the elements with translations only if the language
      has actually changed.
     */
    if (this.props.language !== prevProps.language) {
      EventEmitter.trigger();
    }
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children);
  }
}

const mapStateToProps = (state, ownProps) => {
  const { language } = state;

  return {
    language
  };
};

export default connect(
  mapStateToProps
)(TranslationsProvider);
