
import React from 'react';

export default class FileList extends React.Component {
  constructor() {
    super();
  }

  renderText(key) {
    return (
      <li key={key}>{key}
        <span className="remove-text">  <a key={key} onClick={this.removeText.bind(this, key)}>x</a></span>
      </li>
    );
  }

  removeText(key) {
    this.props.remove(key);
  }

  render() {
    return (
      <ul>
        {Object.keys(this.props.texts).map(this.renderText.bind(this))}
      </ul>
    );
  }
}

FileList.propTypes = {
  texts: React.PropTypes.object,
  remove: React.PropTypes.func.isRequired
};
