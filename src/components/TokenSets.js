
import React from 'react';

import Tokens from './Tokens';

export default class TokenSets extends React.Component {
  constructor() {
    super();
  }

  renderTokens(key) {
    var tokens = this.props.sets[key];
    var firstTokens = tokens.slice(0,20);
    return (
      <Tokens key={key} id={key} tokens={firstTokens} />
    );
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.sets).map(this.renderTokens.bind(this))}
      </div>
    );
  }

}
