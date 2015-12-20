

export function removeAllPunctuation(words) {
  return words.map((word) => removePunctuation(word));
}

export function removePunctuation(string) {
  return string.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g," ").replace(/\s{2,}/g," ");
}

export function stringToWords(string) {
  //http://blog.tompawlak.org/split-string-into-tokens-javascript
  return string.match(/\S+/g);
}

export function stringToSentences(string) {
  //http://stackoverflow.com/questions/11761563/javascript-regexp-for-splitting-text-into-sentences-and-keeping-the-delimiter
  return string.match( /[^\.!\?]+[\.!\?]+/g );

}
