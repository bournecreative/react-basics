import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [result, setResult] = useState({ data: null, loading: true });

  useEffect(() => {
    setResult((c) => ({ data: c.data, loading: true }));
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResult({ data: data.slip.advice, loading: false });
      });
  }, [url]);

  return result;
};
