import React, { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const ref = useRef(count)
  function showAlert() {
    setTimeout(() => {
      alert(ref.current);
    }, 3000);
  }
  return (
    <div>
      <code>function ref</code>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1)
        ref.current = count + 1
      }}>Click me</button>
      <button onClick={showAlert}>Show count</button>
    </div>
  );
}

export default Counter;
