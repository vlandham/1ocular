import React from 'react';

import Dropzone from 'react-dropzone';

export default class FileUpload extends React.Component {

  constructor() {
    super();
  }

  onDrop(files) {
    this.setState({
      files: files
    });
  }

  onOpenClick() {
    this.refs.dropzone.open();
  }

  render() {
    return (
      <div>
        <Dropzone ref="dropzone" onDrop={this.onDrop.bind(this)} >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <button type="button" onClick={this.onOpenClick.bind(this)}>
          Open Dropzone
        </button>
      </div>
    )
  }

}
