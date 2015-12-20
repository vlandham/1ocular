
import Immutable from 'immutable';

import { ADD_TEXT,
         REMOVE_TEXT,
         CREATE_TOKENS,
         SET_REMOVE_PUNCTUATION
       } from './actions';

import { removeAllPunctuation,
         stringToWords,
         stringToSentences } from '../util/string_utility';

export var INITIAL_STATE = Immutable.fromJS({
  rawTexts: {},
  texts: {},
  tokens: {},
  tokenizeOptions: {
    "removePunctuation" : true,
    "split": "words",
    "splitOptions": ["words", "sentences"]
  }
});

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TEXT:
      return state.updateIn(['rawTexts', action.textId], () => action.text);
    case REMOVE_TEXT:
      return state.deleteIn(['rawTexts', action.textId]);
    case CREATE_TOKENS:
      var tokens = createTokens(state.get('rawTexts'), state.get('tokenizeOptions'));
      return state.set('tokens', tokens);
    case SET_REMOVE_PUNCTUATION:
      return state.updateIn(['tokenizeOptions', 'removePunctuation'], () => action.value);
    default:
      return state;
  }
}

function createTokens(texts, options) {
  return texts.map((v) => {
    var tokens = v;
    switch (options.get('split')) {
      case 'words':
        tokens = stringToWords(tokens);
        break;
      case 'sentences':
        tokens = stringToSentences(tokens);
        break;
      default:
        tokens = tokens;
    }

    if(options.get('removePunctuation')) {
      tokens = removeAllPunctuation(tokens);
    }
    return tokens;
  });
}
