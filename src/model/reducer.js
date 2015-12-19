
import Immutable from 'immutable';
import { ADD_TEXT, REMOVE_TEXT } from './actions';

export var INITIAL_STATE = Immutable.fromJS({
  texts: {},
  tokens: {},
  options: {}
});

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TEXT:
      console.log(action.textId);
      return state.updateIn(['texts', action.textId], () => action.text);
    case REMOVE_TEXT:
      return state;
    default:
      return state;
  }
}
