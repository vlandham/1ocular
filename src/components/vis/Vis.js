
import React from 'react';
import ConcordanceChart from './ConcordanceChart';

export default class Vis extends React.Component {
  constructor() {
    super();
  }

  renderConcordance(key) {
    return (
      <div key={key}>
        <h4>{key}</h4>
        <ConcordanceChart key={key} data={this.props.tokens[key]} search={this.props.options.searchToken}/>
      </div>
    );
  }

  renderConcordances() {
    return (
      <div>
        <input type="text" value={this.props.options.searchToken} onChange={this.updateSearch.bind(this)} />
        {Object.keys(this.props.tokens).map(this.renderConcordance.bind(this))}
      </div>
    );
  }

  updateSearch(event) {
    this.props.updateVisOptions('searchToken', event.target.value);
  }

  render() {
    switch(this.props.options.displayVis) {
      case 'concordance':
        return this.renderConcordances();
      default:
        return (<div></div>);

    }
  }
}
