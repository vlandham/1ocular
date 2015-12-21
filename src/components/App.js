import React from 'react';

import makeStore from '../model/store';
import { INITIAL_STATE } from '../model/reducer';

import { addText, removeText, createTokens, updateTokenizationOptions, updateVisOptions } from '../model/actions';

import FileUpload from './FileUpload';
import FileList from './FileList';
import TokenSets from './TokenSets';
import TokenOptions from './TokenOptions';

import Vis from './vis/Vis';
import VisSelect from './vis/VisSelect';

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
    this.store.dispatch(createTokens());
  }

  updateTokenizationOptionsInStore(key, enabled) {
    this.store.dispatch(updateTokenizationOptions(key, enabled));
    this.store.dispatch(createTokens());
  }

  updateVisOptionsInStore(option, value) {
    this.store.dispatch(updateVisOptions(option, value));
  }


  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="col-md-6">
            <h2>Upload Your Text Files</h2>
            <FileUpload add={this.addTextToStore.bind(this)}/>
          </div>
          <div className="col-md-4 col-md-offset-6 fixed">
            <h2>Documents &amp; Tokens</h2>
            <TokenSets sets={this.state.tokens}/>
          </div>
        </div>
        <h3>Files Loaded:</h3>
        <FileList texts={this.state.rawTexts} remove={this.removeTextFromStore.bind(this)}/>
        <h2>Transform Your Text</h2>
        <h3>Tokenize</h3>
        <TokenOptions options={this.state.tokenizeOptions} updateTokenOptions={this.updateTokenizationOptionsInStore.bind(this)}/>
        <h3>Visualize</h3>
        <VisSelect options={this.state.visOptions} updateVisOptions={this.updateVisOptionsInStore.bind(this)} />
        <Vis tokens={this.state.tokens} options={this.state.visOptions} updateVisOptions={this.updateVisOptionsInStore.bind(this)} />
      </div>
    );
  }
}
