import { useReducer } from "react";
import { Button, Card, Col, Row, Tag } from "antd";
import { exampleCode } from "./exampleCode";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export const UseReducerExample1 = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            useReducer an Alternative for useState
            <Tag color="lime">useCallback</Tag>
          </h2>
          <p>
            useReducer is an alternative to useState. Although more complex in
            setup, its allows you to easy maintain multiple edge cases for
            state.
          </p>
          <pre>
            <code>{exampleCode}</code>
          </pre>
          <Button onClick={() => dispatch({ type: "increment" })}>
            increment++
          </Button>
          <Button onClick={() => dispatch({ type: "decrement" })}>
            decrement++
          </Button>
          <p style={{ margin: "12px 0" }}>
            We can manage both increment and decrement of a counter with
            useReducer rather then using useState with a seperate increment
            handler and decrement handler.
          </p>
          <Tag color="lime">
            <strong>Count:</strong> {count}
          </Tag>
        </Card>
      </Col>
    </Row>
  );
};
