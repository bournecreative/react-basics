import { useState, useMemo, useCallback } from "react";
import { Button } from "antd";
import { useFetch } from "../../../hooks/useFetch";

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
    <div>
      <p>Count: {count}</p>
      <div>{memoLongestWord}</div>
      <Button onClick={() => setCount((c) => c + 1)}>Increment++</Button>
    </div>
  );
};
