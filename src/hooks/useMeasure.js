import { useState, useLayoutEffect } from "react";

export const useMeasure = (ref, deps) => {
  const [size, setSize] = useState({});

  useLayoutEffect(() => {
    setSize(ref.current.getBoundingClientRect());
  }, [deps]);

  return size;
};
