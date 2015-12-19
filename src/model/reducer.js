
import Immutable from 'immutable';
import { ADD_TEXT, REMOVE_TEXT } from './actions';

export var INITIAL_STATE = Immutable.fromJS({
  sourceTexts: {},
  tokens: {},
  options: {}
});

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TEXT:
      return state;
    case REMOVE_TEXT:
      return state;
    default:
      return state;
  }
}
