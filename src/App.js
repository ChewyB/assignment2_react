import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    userInput: ''
  };

  //We just need this function to set the user's input string to our global userInput variable
  userInputHandler = event => {
    this.setState({
      userInput: event.target.value
      //texString: event.target.value //I think this didn't work because of the merge that happens between states?
    });

  };

deleteCharHandler = (index) => {
  const newArray = this.state.userInput.split('');
  newArray.splice(index, 1);
  const updatedArray = newArray.join('');
  this.setState({userInput: updatedArray});
}

  render() {

    const charList = this.state.userInput.split('').map((char, index) => {
     return (<CharComponent
      character={char}
      key={index}
      click={() => this.deleteCharHandler(index)}
      />)
    })

    return (



      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <input
          type="text"
          onChange={(event) => this.userInputHandler(event)}
          value={this.state.userInput}
        />
        <ValidationComponent length={this.state.userInput.length} />
        {charList}
        
  
        
      </div>
    );
  }
}

export default App;
