import React from 'react';

import Dropzone from 'react-dropzone';


export default class FileUpload extends React.Component {

  constructor() {
    super();
  }

  // Read the contents of a file.
  // http://demos.mattwest.io/drag-and-drop/
  readTextFile(file) {
    var reader = new FileReader();

    reader.onloadend = (e) => {
      if (e.target.readyState == FileReader.DONE) {
        var content = reader.result;
        this.props.add(file.name, content);
      }
    };

    reader.readAsBinaryString(file);
  }


  onDrop(files) {
    files.forEach((file) => this.readTextFile(file));
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
    );
  }
}

FileUpload.propTypes = {
  add: React.PropTypes.func
};
