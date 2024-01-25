import { useState, useRef } from "react";

function fib(n) {
  const t0 = performance.now();
  console.log("fibonacci ran", n);
  let f;
  if (n <= 0) return 0;
  if (n <= 2) {
    f = 1;
  } else {
    f = fib(n - 1) + fib(n - 2);
  }
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
  return f;
}

export const UseStateExampleOne = () => {
  const [fibonacci, setFibonacci] = useState(() => fib(12));
  const [count, setCount] = useState(0);
  const fibRef = useRef(0);
  return (
    <div>
      <h1>useState Example One</h1>
      <p>
        In this example we illustrate a pattern if our initial state value is an
        expense computation. Rather then re-running this computation on every
        render we can run it once by computing the values outside of our
        component and referring to it within our useState initial value as
        demonstrated.
      </p>
      <div>
        <p>
          <strong>
            Initial State set from expensive function: {fibonacci}
          </strong>
        </p>
        <p>
          The count is here simply to re-render the component. Here, we can
          update the component state to re-render the component. Notice that the
          expensive computation only runs on initial component render and never
          again. See the console and look for "fibonacci ran". It prints every
          time the recursive function is called during the initial render but
          not after.
        </p>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
    </div>
  );
};
