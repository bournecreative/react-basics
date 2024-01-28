import { useRef, useLayoutEffect, useState } from "react";
import { Button, Card, Col, Input, Row, Tag } from "antd";
import styles from "./style.module.css";

export const UseLayoutExample1 = () => {
  const el = useRef(null);
  const [width, setWidth] = useState(
    Math.floor(Math.random() * (1000 - 200) + 200)
  );
  const [size, setSize] = useState({});
  console.log(width);
  useLayoutEffect(() => {
    setSize(el.current.getBoundingClientRect());
  }, [width]);

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            DOM mutations <Tag color="yellow">useState</Tag>
          </h2>
          <p>
            Read layout from the DOM and synchronously re-render. Updates are
            scheduled inside of useLayoutoutEffect will be flushed synchronously
            before the browser has a chance to paint.
            <strong>Fires synchronously after all DOM mutations!</strong>
          </p>
          <div
            ref={el}
            style={{ width: `${width}px` }}
            className={styles["container"]}
          >
            <pre>{JSON.stringify(size, null, 2)}</pre>
          </div>
          <Button
            style={{ margin: "12px 0" }}
            onClick={() =>
              setWidth(Math.floor(Math.random() * (1000 - 200) + 200))
            }
          >
            Set Width
          </Button>
        </Card>
      </Col>
    </Row>
  );
};
