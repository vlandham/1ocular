import React from 'react';

import makeStore from '../model/store';
import { INITIAL_STATE } from '../model/reducer';

import { addText } from '../model/actions';

import FileUpload from './FileUpload';
import FileList from './FileList';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = INITIAL_STATE.toJS();
    console.log(this.state);

    this.store = makeStore();

    this.store.subscribe(() => {
      this.setState(this.store.getState().toJS());
    });
  }

  addTextToStore(textId, text) {
    this.store.dispatch(addText(textId, text));
  }

  render() {
    return (
      <div>
        <h2>Upload Your Text Files</h2>
        <FileUpload add={this.addTextToStore.bind(this)}/>
        <FileList texts={this.state.texts} />
        <h2>Transform Your Text</h2>
      </div>
    );
  }
}
