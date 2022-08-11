import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <h1>Counter component Counts {count}</h1>
      </>
    );
  }
}

export default Counter;
