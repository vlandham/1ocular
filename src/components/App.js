import React from 'react';

import makeStore from '../model/store';
import { INITIAL_STATE } from '../model/reducer';

import { addText, removeText, createTokens } from '../model/actions';

import FileUpload from './FileUpload';
import FileList from './FileList';
import TokenSets from './TokenSets';
import TokenOptions from './TokenOptions';

/**
* Main App for tool
*/
export default class App extends React.Component {

  constructor() {
    super();

    this.state = INITIAL_STATE.toJS();

    this.store = makeStore();

    this.store.subscribe(() => {
      this.setState(this.store.getState().toJS());
    });
  }

  addTextToStore(textId, text) {
    this.store.dispatch(addText(textId, text));
    this.store.dispatch(createTokens());
  }

  removeTextFromStore(textId) {
    this.store.dispatch(removeText(textId));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>Upload Your Text Files</h2>
            <FileUpload add={this.addTextToStore.bind(this)}/>
          </div>
          <div className="col-md-6">
            <h2>Current Tokens</h2>
            <TokenSets sets={this.state.tokens}/>
          </div>
        </div>
        <h3>Files Loaded:</h3>
        <FileList texts={this.state.texts} remove={this.removeTextFromStore.bind(this)}/>
        <h2>Transform Your Text</h2>
        <h3>Split Documents</h3>
        <h3>Tokenize</h3>
        <TokenOptions store={this.store} options={this.state.tokenizeOptions} />
      </div>
    );
  }
}
