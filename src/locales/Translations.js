import locale from './locale';
import Polyglot from 'node-polyglot';

/**
 * Translations will be responsable to be able
 * to return the translated strings and handle
 * them as gets needed
 */
class Translations {
  static _stringHandler = null;

  static _getStringHandler() {
    return this._stringHandler;
  }

  static t(...args) {
    return this._getStringHandler().t(...args);
  }

  static locale(...args) {
    return this._getStringHandler().locale(...args);
  }

  static _extend(...args) {
    return this._getStringHandler().extend(...args);
  }

  static _unset(...args) {
    return this._getStringHandler().unset(...args);
  }

  static loadTranslations(language) {
    this._stringHandler = new Polyglot({
      locale: language,
      phrases: locale[language]
    });
  }
}

export default Translations;