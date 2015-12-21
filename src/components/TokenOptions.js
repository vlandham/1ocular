
import React from 'react';

export default class TokenOptions extends React.Component {
  constructor() {
    super();
  }

  updateOptions(key, event) {
    this.props.updateTokenOptions(key, event.target.checked);
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
  options: React.PropTypes.object,
  updateTokenOptions: React.PropTypes.func
};
