import { useState } from "react";
import { Button, Card, Col, Row, Tag } from "antd";

export const UseStateExample2 = () => {
  const [count, setCount] = useState(0);

  const codeExample = `setCount((c) => c+1)`;
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            Updater Function
            <Tag color="blue">useState</Tag>
          </h2>
          <p>
            Using an updater function helps avoid raised conditions (two updates
            happening at the same time). Again we have a counter here in the UI
            for the purpose of state change.
          </p>
          <pre>{codeExample}</pre>
          <div>
            <span>Count:{count}</span>
            <div>
              <Button onClick={() => setCount((c) => c + 1)}>Add 1</Button>
              <Button onClick={() => setCount((c) => c - 1)}>Minus 1</Button>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
