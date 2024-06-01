import React, { useState } from "react";
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter">
        <button className="button" onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button className="button" onClick={increment}>+</button>
      </div>
      <button className="resetButton" onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
