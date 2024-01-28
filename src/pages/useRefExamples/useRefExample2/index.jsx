import { useRef, useState } from "react";
import { Button, Card, Col, Row, Tag } from "antd";

export const UseRefExample2 = () => {
  const [inputText, setInputText] = useState("");
  const targetInput = useRef(0);
  let renders = targetInput.current++;
  console.log(targetInput.current);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            Track component renders
            <Tag color="red">useRef</Tag>
          </h2>
          <p>
            As mentioned in "UseRefExample1" updating the value of useRef does
            not cause a component rerender. Thus we can track the total times a
            component is rendered.
          </p>
          <input value={inputText} onChange={handleChange} />
          Total Renders{targetInput.current}
        </Card>
      </Col>
    </Row>
  );
};
