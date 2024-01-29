import React from "react";
import { Button } from "antd";
import { useRenders } from "../../../hooks/useRenders";

export const ChildComponent = React.memo(({ getTarget }) => {
  useRenders();
  return (
    <div style={{ marginTop: "12px" }}>
      <div style={{ margin: "12px 0" }}>
        Child Component 1 <Button onClick={() => getTarget(1)}>Select</Button>
      </div>
      <div style={{ margin: "12px 0" }}>
        Child Component 2 <Button onClick={() => getTarget(2)}>Select</Button>
      </div>
      <div style={{ margin: "12px 0" }}>
        Child Component 3 <Button onClick={() => getTarget(3)}>Select</Button>
      </div>
    </div>
  );
});
