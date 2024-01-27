import { useState } from "react";
import { Button, Card, Col, Row, Tag } from "antd";
import { FollowAlong } from "../../../components/FollowAlong/index";

export const UseEffectExample1 = () => {
  const [toggle, setToggle] = useState(true);
  const [mountMsg, setMountMsg] = useState("");

  const exampleCode = `
  useEffect(() => {
    setMsg("FollowAlong component mounted. Mousemove event listener added!")
    window.addEventListener("mousemove", trackCursor)

    return () => {
      setMsg("FollowAlong component un-mounted!! Remove any event listeners added by this component.")
      window.removeEventListener("mousemove", trackCursor)
    }
  }, [])`;
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            Cleaning up useEffects
            <Tag color="green">useEffect</Tag>
          </h2>
          <p>
            In this example we demonstrate how we can add and remove event
            listeners when components mount. Upon page load, the FollowAlong
            child component is mounted. It added a red dot that follows your
            cursor. We can remove the child component via the toggle button.
            More importantly however, the eventListener added to the window is
            also removed when the component mounts.
          </p>
          <pre>
            <code>{exampleCode}</code>
          </pre>
          <Button onClick={() => setToggle(!toggle)}>Toggle red dot</Button>
          <br />
          <br />
          {toggle && <FollowAlong setMsg={setMountMsg} />}

          <p>{mountMsg}</p>
        </Card>
      </Col>
    </Row>
  );
};
