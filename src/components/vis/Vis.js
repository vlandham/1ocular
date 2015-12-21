
import React from 'react';
import ConcordanceChart from './ConcordanceChart';

export default class Vis extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "alice"
    };
  }

  renderConcordance(key) {
    return (
      <ConcordanceChart key={key} data={this.props.tokens[key]} search={this.state.search}/>
    );
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        {Object.keys(this.props.tokens).map(this.renderConcordance.bind(this))}
      </div>
    );
  }
}
