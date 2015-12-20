
import React from 'react';

import Tokens from './Tokens';

export default class TokenSets extends React.Component {
  constructor() {
    super();
  }

  renderTokens(key) {
    var tokens = this.props.sets[key];
    return (
      <Tokens key={key} id={key} tokens={tokens} />
    );
  }

  render() {
    return (
      <div>
        <p>Document Count: {Object.keys(this.props.sets).length}</p>
        {Object.keys(this.props.sets).map(this.renderTokens.bind(this))}
      </div>
    );
  }

}
