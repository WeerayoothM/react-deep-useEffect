import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function showAlert() {
    setTimeout(() => {
      alert(count);
    }, 3000);
  }

  return (
    <div>
      <code>mental model</code>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={showAlert}>Show count</button>
    </div>
  );
}

export default Counter;
