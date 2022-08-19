import { useState, useEffect } from "react";

const FunctionalCounter = ({ heading }) => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
  console.log("functional count mount");
  },[]);

  useEffect(()=>{
    if(count > 0) console.log("count update useEffect");
    },[count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  //   const { heading } = props;
  return (
    <>
      <h2>Functional Counter</h2>
      <h3>prop------ {heading}</h3>
      <h3>count------ {count}</h3>
      <button onClick={handleIncrement}>Click functional</button>
    </>
  );
};

export default FunctionalCounter;
