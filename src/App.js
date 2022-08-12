import React, { Component } from "react";
import Counter from "./Components/Counter";
import './App.css'
class App extends Component {
  state = {
    heading:'Counter component props'
  };
  render() {
    const {heading} = this.state;
    return (
      <>
        <h1>Learning react js by class component</h1>
        <Counter heading={heading} />
      </>
    );
  }
}

export default App;
