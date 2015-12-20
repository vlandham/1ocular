
import React from 'react';

import { updateTokenizationOptions, createTokens } from '../model/actions';

export default class TokenOptions extends React.Component {
  constructor() {
    super();
  }

  updateRemovePunctuation(event) {
    this.props.store.dispatch(updateTokenizationOptions('removePunctuation', event.target.checked));
    this.props.store.dispatch(createTokens());
  }

  updateOptions(key, event) {
    this.props.store.dispatch(updateTokenizationOptions(key, event.target.checked));
    this.props.store.dispatch(createTokens());
  }

  renderCheckBox(key) {
    var enabled = this.props.options[key].enabled;
    var title = this.props.options[key].title;

    return (
      <div key={key} className="checkbox">
        <label>
          <input type="checkbox"
            checked={enabled}
            onChange={this.updateOptions.bind(this, key)} />
          {title}</label>
      </div>
    );

  }

  render() {
    var options = this.props.options;
    return (
      <form>
        {Object.keys(options).map(this.renderCheckBox.bind(this))}
      </form>
    );
  }
}

TokenOptions.propTypes = {
  store: React.PropTypes.object,
  options: React.PropTypes.object
};
