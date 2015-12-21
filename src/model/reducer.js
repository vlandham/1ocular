
import Immutable from 'immutable';

import { ADD_TEXT,
         REMOVE_TEXT,
         CREATE_TOKENS,
         UPDATE_TOKEN_OPTIONS,
         UPDATE_VIS_OPTIONS,
       } from './actions';

import { createTokens } from '../util/tokenizer';

export var INITIAL_STATE = Immutable.fromJS({
  rawTexts: {},
  texts: {},
  tokens: {},
  tokenizeOptions: {
    "splitWords": {"enabled": true, "title": "Split on words"},
    "splitSentences": {"enabled": false, "title": "Split on Sentences"},
    "removePunctuation": {"enabled": true, "title": "Remove Punctuation"},
    "removeStopWords": {"enabled": true, "title": "Remove Stopwords"},
    "lowerCase": {"enabled": true, "title": "Lowercase All Words"},
  },
  visOptions: {
    "displayVis": "",
    "allVis": ["concordance", "wordcloud"],
    "searchToken": "lost",
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
    case UPDATE_TOKEN_OPTIONS:
      return state.updateIn(['tokenizeOptions', action.key, "enabled"], () => action.enabled);
    case UPDATE_VIS_OPTIONS:
      return state.updateIn(['visOptions', action.key], () => action.value);
    default:
      return state;
  }
}
