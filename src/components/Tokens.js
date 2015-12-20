
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
    return (
      <div key={this.props.id}>
        <p>{this.props.id}</p>
        {this.props.tokens.map(this.renderToken.bind(this))}
      </div>
    );
  }
}
