import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  function handleDecrement() {
    setValue((prev) => prev - 1);
  }
  function handleIncrement() {
    setValue((prev) => prev + 1);
  }
  function handleReset() {
    setValue(0);
  }

  return (
    <div className="App">
      <div className="counter-container">
        <button onClick={handleIncrement}>+</button>
        <h1 className="value">{value}</h1>
        <button onClick={handleDecrement}>-</button>
      </div>
      <button className="reset" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default App;
