import React, { Component, PropTypes } from "react";

const i18n = (ComponentToWrap) => {
  return class i18nComponent extends Component {
    static contextTypes = {
      translations: PropTypes.object.isRequired,
    }
    render() {
      const { translations } = this.context
      // what we do is basically rendering `ComponentToWrap`
      // with an added `i18n` prop, like a hook
      return (
        <ComponentToWrap {...this.props} translations={translations} />
      )
    }
  }
}

export default i18n;