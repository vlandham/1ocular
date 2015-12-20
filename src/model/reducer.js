
import Immutable from 'immutable';

import { ADD_TEXT,
         REMOVE_TEXT,
         CREATE_TOKENS,
         SET_REMOVE_PUNCTUATION
       } from './actions';

import { removePunctuation, stringToWords } from '../util/string_utility';

export var INITIAL_STATE = Immutable.fromJS({
  texts: {},
  tokens: {},
  tokenizeOptions: {
    "removePunctuation" : true,
    "split": "words"
  }
});

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TEXT:
      return state.updateIn(['texts', action.textId], () => action.text);
    case REMOVE_TEXT:
      return state.deleteIn(['texts', action.textId]);
    case CREATE_TOKENS:
      var tokens = createTokens(state.get('texts'), state.get('tokenizeOptions'));
      return state.set('tokens', tokens);
    case SET_REMOVE_PUNCTUATION:
      return state.updateIn(['tokenizeOptions', 'removePunctuation'], () => action.value);
    default:
      return state;
  }
}

function createTokens(texts, options) {
  return texts.map((v) => {
    var text = v;
    if(options.get('removePunctuation')) {
      text = removePunctuation(text);
    }
    switch (options.get('split')) {
      case 'words':
        text = stringToWords(text);
      default:
        text = text;
    }
    return text;
  });
}
