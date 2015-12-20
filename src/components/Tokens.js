
import React from 'react';
import '../../scss/components/tokens.scss';

export default class Tokens extends React.Component {
  constructor() {
    super();
  }

  renderToken(token, i) {
    return (
      <span className="token" key={i}>{token}</span>
    );
  }

  render() {
    var firstTokens = this.props.tokens.slice(0,50);

    return (
      <div className="tokens" key={this.props.id}>
        <p>{this.props.id} - <span className="token-count">{this.props.tokens.length} tokens</span></p>
        {firstTokens.map(this.renderToken.bind(this))}
      </div>
    );
  }
}
