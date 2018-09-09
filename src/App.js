import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    textLength: "poop"
  };

  lengthOfTextTypedHandler = event => {
    this.setState({
      textLength: event.target.value.length
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <input
          type="text"
          onChange={event => this.lengthOfTextTypedHandler(event)}
        />
        <ValidationComponent length={this.state.textLength} />
      </div>
    );
  }
}

export default App;
