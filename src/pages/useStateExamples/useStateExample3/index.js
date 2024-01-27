import { useState } from "react";
import { Card, Col, Row, Tag, Button } from "antd";

export const UseStateExample3 = () => {
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });
  const codeExample = `const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });
...code

<Button type="primary" onClick={() => setCount((c) => ({ ...c, count1: c.count1 + 1 }))}>+1</Button>`;
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            useState Objects <Tag color="blue">useState</Tag>
          </h2>
          <p>
            We can manage multiple state values using numerous useState hooks,
            but we can also combine states into a single useState object if it
            makes sense.
          </p>
          <h3>Example</h3>
          <p>
            Here we have destructured our state into 2 properties, setting them
            with different initial values. Depending on our end-goal we can
            choose to update both state properties or just one as we have
            demonstrated here.
          </p>
          <pre>{codeExample}</pre>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Count1" bordered={false}>
          <span>Count1: {count1}</span>
          <div>
            <Button
              type="primary"
              onClick={() => setCount((c) => ({ ...c, count1: c.count1 + 1 }))}
            >
              +1
            </Button>
          </div>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Count2" bordered={false}>
          <span>Count2: {count2}</span>
        </Card>
      </Col>
    </Row>
  );
};
