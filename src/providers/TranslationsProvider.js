import React, { Component, PropTypes, Children } from 'react';
import { connect } from 'react-redux';
import locale from '../locales/locale';
import Polyglot from 'node-polyglot';

class TranslationsProvider extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    translations: PropTypes.object.isRequired,
  }

  getChildContext() {
    const { language } = this.props;

    let translations = new Polyglot();
    translations.extend(locale[language]);

    return { translations };
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