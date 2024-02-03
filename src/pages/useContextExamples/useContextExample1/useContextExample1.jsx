import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { Card, Col, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import { exampleCode } from "./exampleCode";
import { exampleCode1 } from "./exampleCode";
import { exampleCode2 } from "./exampleCode";
export const UseContextExample1 = () => {
  const { contextValue, setContextValue } = useContext(UserContext);

  const home = window.location.hostname === "localhost" ? "/" : "react-basics/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const el = e.target;
    const elData = new FormData(el);
    const value = elData.get("new-context");
    setContextValue(value);
    el.reset();
  };
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            createContext / useContext <Tag color="slategrey">useRef</Tag>
          </h2>
          <p>
            We can easily share values across our component tree regardless of
            the hierarchy. In this example the context is sharing a current
            state value and a function to update it.
          </p>
          <form onSubmit={handleSubmit}>
            <input placeholder="Change context value" name="new-context" />
            <button type="submit">Update Context</button>
          </form>
          <div style={{ margin: "12px 0" }}>
            Context value is: {contextValue}
          </div>
          <Link to={home}>Go to Index page to see context value</Link>
        </Card>
        <Card bordered={false}>
          <p>
            Setting up useContext is pretty straigh forward. First we create a
            context with an initial value. This can be created in a context
            folder for organization.
          </p>
          <pre>
            <code>{exampleCode}</code>
          </pre>
          <p>
            Now we go to the top of our component tree to wrap our application
            in ContextProvider and pass the value we would like to share across
            the application. In this example we set up a state hook and pass the
            current state and the function to update the state.
          </p>
          <pre>
            <code>{exampleCode1}</code>
          </pre>
          <p>
            We can now make use of the context shared across our application
            using useContext. In this example we destructure the current state
            value we have shared across our application.
          </p>
          <pre>
            <code>{exampleCode2}</code>
          </pre>
        </Card>
      </Col>
    </Row>
  );
};
