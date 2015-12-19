
import Immutable from 'immutable';
import { ADD_TEXT, REMOVE_TEXT } from './actions';

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
    default:
      return state;
  }
}
