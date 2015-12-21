
import { removeAllPunctuation,
         stringsToWords,
         stringsToSentences,
         removeStopWords,
         toLowerCase } from './string_utility';

export function createTokens(texts, options) {
  return texts.map((v) => {
    var tokens = [v];
    var enabledOptions =  options.filter((v) => v.get('enabled')).keySeq();
    enabledOptions.forEach((name) => {
      switch (name) {
        case 'removePunctuation':
          tokens = removeAllPunctuation(tokens);
          break;
        case 'splitWords':
          tokens = stringsToWords(tokens);
          break;
        case 'splitSentences':
          tokens = stringsToSentences(tokens);
          break;
        case 'removeStopWords':
          tokens = removeStopWords(tokens);
          break;
        case 'lowerCase':
          tokens = toLowerCase(tokens);
          break;
      }
    });

    return tokens;
  });
}
