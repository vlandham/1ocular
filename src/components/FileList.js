
import React from 'react';

export default class FileList extends React.Component {
  constructor() {
    super();
  }

  renderText(key) {

    return (
      <li key={key}>{key}</li>
    );
  }

  render() {

    return (
      <ul>
        {Object.keys(this.props.texts).map(this.renderText)}
      </ul>
    );
  }
}
