import React from 'react';

import  makeStore from '../model/store';


import FileUpload from './FileUpload';

export default class App extends React.Component {

  constructor() {
    super();

    this.store = makeStore();

    this.store.subscribe(() => {
      this.setState(this.store.getState().toJS());
    });
  }

  render() {
    return (
      <div>
        <h2>Upload Your Text Files</h2>
        <FileUpload />
        <h2>Transform Your Text</h2>
      </div>
    );
  }
}
