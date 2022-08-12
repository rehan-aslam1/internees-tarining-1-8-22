import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({
      count:this.state.count + 1
    });
  }
  render() {
    const style ={marginLeft:"50px", backgroundColor:'blue',color:'white'};
    const { count } = this.state;
    const { heading  } = this.props;
    return (
      <>
        <h1>{heading} {count}</h1><br/>
        <button className="btn-style" onClick={this.handleClick}>Click count</button>
      </>
    );
  }
}

export default Counter;
