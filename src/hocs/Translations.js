import React, { Component } from "react";
import PropTypes from 'prop-types';

const Translations = (ComponentToWrap) => {
  return class TranslationsComponent extends Component {
    static contextTypes = {
      translations: PropTypes.object.isRequired,
    }
    render() {
      const { translations } = this.context
      // what we do is basically rendering `ComponentToWrap`
      // with an added `translations` prop, like a hook
      return (
        <ComponentToWrap {...this.props} translations={translations} />
      )
    }
  }
}

export default Translations;