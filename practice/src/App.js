import React, { Component } from 'react';
import './App.css';

function Display(props) {
  return (
    <p className="display-4">{props.input}</p>
  )
}

class App extends Component {

  state = {
    input: ""
  }

  render() {
    return (
      <>
        <div className="jumbotron">
          <p className="display-4">L1</p>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => { this.setState({ input: e.target.value }) }} />
          <Display input={this.state.input} />
        </div>

      </>
    )
  }
}

export default App;
