import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Tag } from "antd";
import { SyncOutlined } from "@ant-design/icons";

export const UseEffectExample2 = () => {
  const [trivia, setTrivia] = useState({ info: "", loading: true });
  const [triviaCount, setTriviaCount] = useState(0);

  useEffect(() => {
    setTrivia((currentState) => ({
      ...currentState,
      loading: true,
    }));

    const randomNumber = Math.floor(Math.random() * 100);
    // fetch(`http://numbersapi.com/${randomNumber}/trivia`)
    fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setTrivia({ info: data.slip["advice"], loading: false });
      });
  }, [triviaCount]);

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
              primary
              onClick={() => setTriviaCount(triviaCount + 1)}
            >
              Get Advice
            </Button>
            <div>
              <Tag
                icon={trivia.loading ? <SyncOutlined spin /> : ""}
                color="processing"
              >
                {trivia.info}
              </Tag>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
