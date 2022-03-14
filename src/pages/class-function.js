import React, { Component, useEffect, useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(`You clicked ${count} times`);
//     }, 3000);
//   });

//   return (
//     <div>
//       <code>class-function</code>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`);
    }, 3000);
  }
  componentDidUpdate() {
    const count = this.state.count
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
