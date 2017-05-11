import React, { Component, PropTypes, Children } from "react"

class TranslationsProvider extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    translations: PropTypes.object.isRequired,
  }

  getChildContext() {
    const { translations } = this.props
    return { translations }
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children)
  }
}

export default TranslationsProvider;