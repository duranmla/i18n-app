import React from 'react';
import TranslationsHelper from './hocs/TranslationsHelper';

const Text = ({ text, translations }) => {
  console.log('rendering <Text>');
  return (<h2>{ translations.t(text) }</h2>)
};

export default TranslationsHelper(Text, { force: true });