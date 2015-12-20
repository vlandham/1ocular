


export function removePunctuation(string) {
  return string.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g," ").replace(/\s{2,}/g," ");
}

export function stringToWords(string) {
  //http://blog.tompawlak.org/split-string-into-tokens-javascript
  return string.match(/\S+/g);
}
