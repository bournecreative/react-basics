import { useReducer } from "react";
import { Card, Col, Row, Select, Tag } from "antd";

function reducer(state, action) {
  switch (action.type) {
    case "mountains":
      return {
        activity: "",
        place: "mountains",
        activities: [
          { value: "hiking", lablel: "hiking" },
          { value: "backpacking", lablel: "backpacking" },
          { value: "mountain climbing", lable: "mountain climbing" },
        ],
      };
    case "ocean":
      return {
        activity: "",
        place: "ocean",
        activities: [
          { value: "surfing", lablel: "surfing" },
          { value: "snorkeling", lablel: "snorkeling" },
          { value: "scuba diving", lable: "scuba diving" },
        ],
      };
    case "river":
      return {
        activity: "",
        place: "river",
        activities: [
          { value: "kayaking", lablel: "kayaking" },
          { value: "fishing", lablel: "fishing" },
          { value: "boating", lable: "boating" },
        ],
      };
    case "activityType":
      return {
        ...state,
        activity: action.payload,
      };
    default:
      return state;
  }
}

export const UseReducerExample3 = () => {
  const [{ place, activities, activity }, dispatch] = useReducer(reducer, {
    place: "",
    activities: [],
  });

  const onChange = (value) => {
    dispatch({ type: `${value}` });
  };

  const onActivityChange = (value) => {
    dispatch({ type: "activityType", payload: `${value}` });
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
      <Col span={8}>
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
            onChange={onActivityChange}
            options={activities}
          />
          <div>Selected Location: {place}</div>
          <div>Selected Activity: {activity}</div>
        </Card>
      </Col>
    </Row>
  );
};
