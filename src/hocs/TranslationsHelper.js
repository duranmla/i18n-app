import React, { Component } from "react";
import PropTypes from 'prop-types';
import EventEmitter from '../EventEmitter';

const defaultOptions = { force: false };

const TranslationsHelper = (ComponentToWrap, { force } = defaultOptions) => {
  return class TranslationsHelperComponent extends Component {
    static contextTypes = {
      translations: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this._unsubscribe = () => null;

      /*
        Use `force: true` only if a parent of the component with the text is preventing
        the tree of elements to update otherwise it will lead to a double rendering.

        If option force is set to true then we will force the update using
        onTranslationsChange method and this will ensure that the ComponentToWrap
        will update its text even if a parent is preventing the update on the elements tree,
        otherwise we will depend on the fact that any parent of the child with the Text
        is not preventing the tree to update.
       */
      if (force) {
        this._unsubscribe = EventEmitter.subscribe(this.onTranslationsChange.bind(this));
      }
    }

    componentWillUnmount() {
      this._unsubscribe();
    }

    onTranslationsChange() {
      /*
        Make sure the component will re-render to load the
        right locale values
       */
      this.setState({});
    }

    render() {
      const { translations } = this.context;

      /*
        what we do is basically rendering `ComponentToWrap`
        with an added `translations` prop, like a hook
       */
      return (
        <ComponentToWrap {...this.props} translations={translations} />
      )
    }
  }
}

export default TranslationsHelper;
