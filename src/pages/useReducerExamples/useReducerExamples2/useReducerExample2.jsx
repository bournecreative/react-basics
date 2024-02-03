import { useReducer } from "react";
import { Card, Col, Row, Tag } from "antd";
import { exampleCode } from "./exampleCode";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case "status":
      return {
        todos: state.todos.map((item) => {
          if (item.text === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
}

export const UseReducerExample2 = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
    const el = e.target;
    const elData = new FormData(el);
    const value = elData.get("todoItem");
    dispatch({ type: "add", payload: value });
    el.reset();
  };

  const toggleStatus = (target) => {
    dispatch({ type: "status", payload: target });
  };

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            todolist with useReducer
            <Tag color="salmon">useCallback</Tag>
          </h2>
          <p>A more complex usecase of useReducer instead of useState</p>
        </Card>
      </Col>
      <Col span={12}>
        <Card bordered={false}>
          <form onSubmit={handleSubmit}>
            <input placeholder="Enter todo" type="text" name="todoItem" />
            <button type="submit" style={{ margin: "12px 0" }}>
              Add Todo
            </button>
          </form>
        </Card>
        <Card bordered={false}>
          {todos.length
            ? todos.map((item, i) => {
                return (
                  <div
                    style={{
                      textDecoration: `${
                        item.completed ? "line-through" : "none"
                      }`,
                    }}
                    onClick={() => toggleStatus(item.text)}
                    key={item + i}
                  >
                    {item.text}
                  </div>
                );
              })
            : "No todos - go outside and enjoy the outdoors"}
        </Card>
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <pre>
            <code>{exampleCode}</code>
          </pre>
        </Card>
      </Col>
    </Row>
  );
};
