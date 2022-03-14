import React, { useState, useEffect, useReducer } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(c => c + 1);
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);

//   return <h1>{count}</h1>;
// }

// const initialState = {
//   count: 0,
//   step: 1
// };

// function Counter() {
//   // dispatch, setState, ref
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { count, step } = state;

//   useEffect(() => {
//     const id = setInterval(() => {
//       dispatch({ type: "tick" });
//     }, 1000);
//     return () => clearInterval(id);
//   }, [dispatch]);

//   return (
//     <>
//       <h1>{count}</h1>
//       <input
//         value={step}
//         onChange={e => dispatch({ type: "step", step: Number(e.target.value) })}
//       />
//     </>
//   );
// }

// function reducer(state, action) {
//   const { count, step } = state;
//   if (action.type === "tick") {
//     return { count: count + step, step };
//   } else if (action.type === "step") {
//     return { count, step: action.step };
//   } else {
//     throw new Error();
//   }
// }

function Counter({ step = 1 }) {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === "tick") {
      return state + step;
    } else {
      throw new Error();
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <h1>{count}</h1>;
}

export default Counter;
