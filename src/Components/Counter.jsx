import React, { Component } from "react";

class Counter extends Component {
  // constructor(props){
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this)   
  // }
  state = {
    count: 0,
  };

  handleClick = () => {
  //  this.state.count +=1;
  this.setState({
    count:this.state.count + 1
  },() => {
    // Api call pagination
  });
  // Api call with pagination
  // const {count} = this.state;
  // this.setState({
  //   count:count + 1
  // });
  // this.setState(prevState =>{
  //   return{
  //     count:prevState.count + 1
  //   } 
  // });
  }

  handleArgumant = (name) => {
    console.log("name",name);
   }

  render() {
    // const style ={marginLeft:"50px", backgroundColor:'blue',color:'white'};
    const { count } = this.state;
    const { heading  } = this.props;
    return (
      <>
        <h1>{heading} {count===0 ? 'zero': count }</h1><br/> 
        <button className="btn-style" onClick={this.handleClick}>Click count</button>
        <button className="btn-style" onClick={()=>this.handleArgumant('Rehan')}>Click Argumant</button>
      </>
    );
  }
}

export default Counter;
