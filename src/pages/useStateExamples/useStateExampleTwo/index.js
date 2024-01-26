import { useState } from "react";
import { Tag } from "antd";
export const UseStateExampleTwo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>
        Updater Function <Tag color="blue">useState</Tag>
      </h2>
      <p>
        Using an updater function helps avoid raised conditions (two updates
        happening at the same time). Again we have a counter here in the UI to
        demonstrate the technique.
      </p>
      <pre>
        <code>setCount((c) => c+1)</code>
      </pre>
      <div>
        <span>Count:{count}</span>
        <div>
          <button onClick={() => setCount((c) => c + 1)}>Add 1</button>{" "}
          <button onClick={() => setCount((c) => c - 1)}>Minus 1</button>
        </div>
      </div>
    </div>
  );
};
