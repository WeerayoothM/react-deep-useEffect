import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      console.log("count: ", count, ", scrollY: ", window.scrollY);
    }
    console.log("run effect at count ", count);
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("cleanup effect at count ", count);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <code>cleanup</code>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
