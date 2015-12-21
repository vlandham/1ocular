
import React from 'react';

export default class VisSelect extends React.Component {
  constructor() {
    super();
  }

  onClick(event) {
    this.props.updateVisOptions('displayVis', event.target.value);
  }

  renderOption(key) {
    var selected = (this.props.options.displayVis === key) ? "active" : null;
    return (
      <button key={key} value={key} className={"btn " + "btn-default " + selected} onClick={this.onClick.bind(this)}>{key}</button>
    );
  }

  render() {
    return (
      <div>
        <div className="btn-group" >
          {this.props.options.allVis.map(this.renderOption.bind(this))}
        </div>
      </div>
    );
  }
}
