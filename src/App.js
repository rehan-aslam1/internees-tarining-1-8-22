import React, { Component } from "react";
// import Counter from "./Components/Counter";
import FunctionalCounter from "./Components/FunctionalCounter";
import { Routes, Route } from "react-router-dom";
// import LoginClass from "./Components/LoginClass";
import "./App.css";
import ChildrenProp from "./Components/ChildrenProp";
import LoginFunctional from "./Components/LoginFunctional";
import PostClass from "./Components/PostClass";

class App extends Component {
  state = {
    heading: "Counter component props",
  };
  render() {
    // const {heading} = this.state;
    return (
      <>
          <Routes>
            {/* <Route path="/" element={<LoginClass />} /> */}
             {/* <Route path="/" element={<LoginFunctional />} /> */}
            {/* <Route path="/child-prop" element={<ChildrenProp><h1>this is paragraph</h1></ChildrenProp>} /> */}
            {/* <Route path="/child-prop" element={<ChildrenProp><FunctionalCounter/></ChildrenProp>} /> */}
            <Route path="/child-prop" element={<PostClass/>} />
          </Routes>
        {/* <h1>Learning react js by class component</h1>
        <Counter heading={heading} />
        <FunctionalCounter  heading={heading}/> */}
      </>
    );
  }
}

export default App;
