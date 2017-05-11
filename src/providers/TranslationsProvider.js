import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import locale from '../locales/locale';
import Polyglot from 'node-polyglot';

class TranslationsProvider extends Component {
  static childContextTypes = {
    translations: PropTypes.object.isRequired,
  }

  getChildContext() {
    const { language } = this.props;

    const translations = new Polyglot({
      locale: language,
      phrases: locale[language]
    });

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