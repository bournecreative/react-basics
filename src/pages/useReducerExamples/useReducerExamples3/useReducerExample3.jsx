import { useReducer } from "react";
import { Card, Col, Row, Select, Tag } from "antd";

function reducer(state, action) {
  switch (action.type) {
    case "mountains":
      return {
        place: "mountains",
        activities: [1, 2, 3],
      };
    case "ocean":
      return {
        place: "ocean",
        activities: ["a", "b", "c"],
      };
    case "river":
      return {
        place: "river",
        activities: ["A", "B", "C"],
      };
    default:
      return state;
  }
}

export const UseReducerExample3 = () => {
  const [{ place, activities }, dispatch] = useReducer(reducer, {
    place: "",
    activities: [],
  });

  const onChange = (value) => {
    dispatch({ type: `${value}` });
  };

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            When to use useReducer instead of useState
            <Tag color="aqua">UseReducer</Tag>
          </h2>
          <div>
            Use useReducer when...
            <ul>
              <li>State is complex</li>
              <li>State properties rely on one another.</li>
              <li>
                When an action occurs and you want to change the state of
                multiple values that correlate in some way with one another.
              </li>
            </ul>
          </div>
        </Card>
      </Col>
      <Col span={4}>
        <Card bordered={false}>
          <Select
            style={{ width: "100%" }}
            showSearch
            placeholder="Select a place"
            optionFilterProp="children"
            onChange={onChange}
            options={[
              {
                value: "mountains",
                label: "Mountains",
              },
              {
                value: "ocean",
                label: "Ocean",
              },
              {
                value: "river",
                label: "River",
              },
            ]}
          />
          <Select
            style={{ width: "100%", margin: "12px 0" }}
            showSearch
            placeholder="Pick an activity"
            optionFilterProp="children"
            onChange={onChange}
            options={activities}
          />
        </Card>
      </Col>
    </Row>
  );
};
