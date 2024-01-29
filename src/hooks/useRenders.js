import { useRef } from "react";

export const useRenders = () => {
  let renderCount = useRef(0);
  console.log("component has rendered ", renderCount.current++);
  return renderCount;
};
