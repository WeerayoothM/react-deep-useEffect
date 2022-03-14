/* eslint-disable */
import React, { useState, useEffect, useCallback } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

// Example 1
// function Counter() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     return () => {
//       console.log("cleanup");
//       clearInterval(id);
//     };
//   }, [count]);

//   return <h1>{count}</h1>;
// }

// Example 2 : object
function Counter() {
  const [count, setCount] = useState(0);
  const [params, setParams] = useState({ params: "test" });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <Child query={[params]} />
    </div>
  );
}

function Child({ query }) {
  useEffect(() => {
    console.log("I should see this once!", query);
  }, [query]); // Object.is
  return null;
}

// Example 3 : function
// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>increase count</button>
//       <Child query={{ params: "test" }} />
//     </div>
//   );
// }

// const useDeepCompareCallback = () => {}

// function Child({ query }) {
//   const fetchData = useCallback(() => {
//     console.log("Api called with", query);
//   }, [query]); // Object.is
//   useEffect(() => {
//     fetchData();
//   }, [fetchData]); // this is correct
//   return null;
// }

export default Counter;
