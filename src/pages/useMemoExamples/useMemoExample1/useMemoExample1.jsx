import { useState, useMemo, useCallback } from "react";
import { Button, Card, Col, Row, Tag } from "antd";
import { useFetch } from "../../../hooks/useFetch";
import "./exampleCode";
import { exampleCode } from "./exampleCode";

export const UseMemoExample1 = () => {
  const [count, setCount] = useState(0);
  const [longestWord, setLongestWord] = useState(null);

  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }
    let longestWord = "";
    arr.forEach((sentence) => {
      sentence.split(" ").forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    });
    console.log("Check, Did computelongestWord run", longestWord);
    return longestWord;
  }, []);

  const memoLongestWord = useMemo(
    () => computeLongestWord(data),
    [computeLongestWord, data]
  );

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            useMemo for expensive functions <Tag color="cyan">useState</Tag>
          </h2>
          <p>
            In this contrived example we use useMemo to prevent
            "computeLongestWord" from running each time the component is
            rendered. We have a counter implemented to trigger a component
            re-render.
          </p>
          <p>
            With useMemo and useCallback implemented we can verify that
            computeLongestWord is only ran once on inital component render - see
            console log printed. This implementation will ensure that
            "computeLongestWord" will only be ran again if computeLongestWord
            changes or is argument.
          </p>
          <ol>
            <li>
              useMemo returns the target functions. In this example it has 2
              dependencies, the function and functions argument.
            </li>
            <li>
              We must also wrap the function declaration in a useCallback as the
              function will be re-created each component rendered.
            </li>
          </ol>
          <pre>
            <code>{exampleCode}</code>
          </pre>
          <div>
            <p>Count: {count}</p>
            <div>{memoLongestWord}</div>
            <Button onClick={() => setCount((c) => c + 1)}>Increment++</Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
