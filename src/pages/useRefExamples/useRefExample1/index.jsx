import { useRef } from "react";
import { Button, Card, Col, Input, Row, Tag } from "antd";

export const UseRefExample1 = () => {
  const targetInput = useRef(null);

  const handleFocus = () => {
    targetInput.current.focus();
  };

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            Target Elements
            <Tag color="red">useRef</Tag>
          </h2>
          <p>
            useRef can be used to target specific HTML elements. In this example
            we will focus the input when this button is "clicked"
          </p>
          <Tag style={{ marginBottom: "16px" }} color="blue">
            Updating a useRef value will not trigger the component to rerender
          </Tag>
          <Input ref={targetInput} type="text" placeholder="target input" />
          <div>
            <Button style={{ marginTop: "16px" }} onClick={handleFocus}>
              Focus Input
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
