import { useState } from "react";
import { Button, Card, Col, Row, Tag } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { useFetch } from "../../../hooks/useFetch";

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

export const UseEffectExample2 = () => {
  const [triviaCount, setTriviaCount] = useState(1);

  const { data, loading } = useFetch(
    `https://api.adviceslip.com/advice/${triviaCount}`
  );

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            Calling APIs with useEffects
            <Tag color="green">useEffect</Tag>
          </h2>
          <p>
            Get some timely advice with the button below. Each click will make a
            call to "https://api.adviceslip.com/advice/".
          </p>
          <div>
            <Button
              style={{ marginBottom: "12px" }}
              onClick={() => setTriviaCount(randomNumber())}
            >
              Get Advice
            </Button>
            <div>
              {data?.slip?.advice ? (
                <Tag
                  icon={loading ? <SyncOutlined spin /> : ""}
                  color="processing"
                >
                  {data.slip.advice ? data.slip.advice : ""}
                </Tag>
              ) : (
                <Tag color="red">{`Running low on advie to give - ${data.message.type} : ${data.message.text}`}</Tag>
              )}
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
