
import './style.js';
import '../html/index.html';

import React from 'react';
import ReactDOM from "react-dom";


class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>HELLO</div>
    )

  }

}

ReactDOM.render(<App />, document.querySelector("#main"));
