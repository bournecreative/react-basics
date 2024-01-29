import { useCallback, useState } from "react";
import { Card, Col, Row, Tag } from "antd";
import { ChildComponent } from "./childComponent";
import { exampleCode } from "./exampleCode";

export const UseCallbackExample1 = () => {
  const [selected, setSelected] = useState(1);

  const getTarget = useCallback(
    (id) => {
      setSelected(id);
    },
    [setSelected]
  );

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            useCallback + React memo
            <Tag color="orange">useCallback</Tag>
          </h2>
          <p>
            There are times Lambda functions are passed down to child
            components. The function passed down to the child component does not
            ever change, but because a function is being passed down it causes
            the child component to re-render. We can avoid re-rendering child
            components unnecessarily using a combinations of React memo and
            useCallback.
          </p>
          <Tag color="orange">
            UseCallback takes 2 arguments, the callback and a dependency
          </Tag>
          <pre>
            <code>{exampleCode}</code>
          </pre>
        </Card>
        <Card title="Example" bordered={false}>
          <p>
            In this example our child component consists of 3 nodes, 1, 2 and 3.
            The function passed down to this child will update the "selected
            state" of our parent component when clicked. Without our useCallback
            and React memo strategy in place, this child component would
            re-render each time a new node is selected. See console.log for the
            count of renders. There will only be 1 log for the initial component
            render.
          </p>
          <div>
            <span>Current child Node selected:</span>
            <Tag color="green">{selected}</Tag>
          </div>
          <ChildComponent getTarget={getTarget} />
        </Card>
      </Col>
    </Row>
  );
};
