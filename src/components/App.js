import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="ball">
        <h1
          className="count"
          ondoubleclick={() => {
            alert("cant edit it");
          }}
        >
          {count}
        </h1>
        <button class="increment-button" onClick={increase}>
          Increment
        </button>
      </div>
    </>
  );
};

export default App;
