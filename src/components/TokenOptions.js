
import React from 'react';

import { setRemovePunctuation, createTokens } from '../model/actions';

export default class TokenOptions extends React.Component {
  constructor() {
    super();
  }

  updateRemovePunctuation(event) {
    this.props.store.dispatch(setRemovePunctuation(event.target.checked));
    this.props.store.dispatch(createTokens());
  }

  render() {
    var options = this.props.options;
    return (
      <div>
        <label>Create Tokens From</label>
        <label>Remove Punctuation</label>
        <input type="checkbox"
          checked={options.removePunctuation}
          onChange={this.updateRemovePunctuation.bind(this)} />
      </div>
    );
  }
}

TokenOptions.propTypes = {
  store: React.PropTypes.object,
  options: React.PropTypes.object
};
