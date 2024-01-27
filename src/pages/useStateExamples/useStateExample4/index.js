import { Card, Col, Row, Tag, Input } from "antd";
import { useForm } from "../../../hooks/useForm";

export const UseStateExample4 = () => {
  const [values, handleChange] = useForm({ firstName: "", lastName: "" });

  const exampleHook = `
  export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    return [
      values,
      (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      }
    ];
  }`;

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            Hooks <Tag color="blue">useState</Tag>
          </h2>
          <p>
            We can multiple state values using numerous useState hooks. But we
            can also combine states into a single useState object if it makes
            sense.
          </p>
          <h3>useForm Hook</h3>
          <p>
            <pre>{exampleHook}</pre>
          </p>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Example" bordered={false}>
          <p>
            Rather then creating controlled components with seperate useState
            hook declarations, we use our useForm hook.
          </p>
          <form>
            <Input
              style={{ width: "40%" }}
              type="text"
              name="firstName"
              placeholder="enter first name"
              value={values.firstName}
              onChange={handleChange}
            />
            <Input
              style={{ width: "40%" }}
              type="text"
              name="lastName"
              placeholder="enter last name"
              value={values.lastName}
              onChange={handleChange}
            />
          </form>
        </Card>
      </Col>
    </Row>
  );
};
