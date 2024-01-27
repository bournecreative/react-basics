import { useState, useRef } from "react";
import { Button, Card, Col, Row, Tag, Tooltip } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

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

export const UseStateExample1 = () => {
  const [fibonacci, setFibonacci] = useState(() => fib(12));
  const fibRef = useRef(0);

  const codeExample = `const [fibonacci, setFibonacci] = useState(() => fib(12))`;

  const codeExample2 = `function fib(n) {
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
  console.log('Call to doSomething took' + t1 - t0 " 'milliseconds.');
  return f;
}`;

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            Set initial State via expensive computation{" "}
            <Tag color="blue">useState</Tag>
          </h2>
          <p>
            In this contrived example we illustrate a pattern to avoid
            unnecessarily computing an expensive initial state. By defining this
            component outside of our component, we can ensure it runs only once
            even when the component is re-rendered.
          </p>
          <p>
            Checkout out the console log to verify the fib function only runs on
            initial render.
          </p>
          <pre>
            <code>
              {codeExample}
              <br />
              <br />
              {codeExample2}
            </code>
          </pre>
          <p>
            <strong>
              Count:
              <Tooltip title='Initial count is set by our "Expensive function - fib"'>
                <QuestionCircleFilled />
              </Tooltip>
            </strong>{" "}
            {fibonacci}
          </p>
          <Button onClick={() => setFibonacci((c) => c + 1)}>Increment</Button>
        </Card>
      </Col>
    </Row>
  );
};
