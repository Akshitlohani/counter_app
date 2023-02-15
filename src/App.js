import React, { useState } from 'react';
import './App.css';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let color = 'green';
  if (count >= 5 && count <= 9) {
    color = 'blue';
  } else if (count === 10) {
    color = 'red';
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
