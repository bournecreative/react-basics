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
        Using an updater function helps ensure the correct state is reflected
        for UI's using counters. Again we have a counter here in the
        UI...nothing special. What's special is how we update state using
        'setCount'.
      </p>
      <pre>setCount((c) ={">"} c+1)</pre>
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
