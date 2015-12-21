
import _ from 'lodash';
import stopwords from './stopwords.js';

export function removeAllPunctuation(words) {
  return _.compact(words).map((word) => _.trim(removePunctuation(word))).filter((word) => word.length > 0);
}

export function removePunctuation(string) {
  return string.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g," ").replace(/\s{2,}/g," ");
}

export function stringsToWords(strings) {
  //http://blog.tompawlak.org/split-string-into-tokens-javascript
  return _.compact(_.flatten(strings.map((string) => stringToWords(string))));
}

export function stringToWords(string) {
  //http://blog.tompawlak.org/split-string-into-tokens-javascript
  return string.match(/\S+/g);
}

export function stringsToSentences(strings) {
  return _.compact(_.flatten(strings.map((string) => stringToSentences(string))));
}

export function stringToSentences(string) {
  //http://stackoverflow.com/questions/11761563/javascript-regexp-for-splitting-text-into-sentences-and-keeping-the-delimiter
  return string.match(/[^\.!\?]+[\.!\?]+/g);

}

export function removeStopWords(words) {
  return _.filter(words, (word) => !_.contains(stopwords, word));
}

export function toLowerCase(words) {
  return _.map(words, (word) => word.toLowerCase());
}
