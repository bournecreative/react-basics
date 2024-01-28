import React, { useContext } from "react";
import { UserContext } from "../../App";

export const Index = () => {
  const testContext = useContext(UserContext);

  return (
    <div>
      <h1>Home page for react basics.</h1>
      <p>
        See tips and tricks for using the various React hooks and learn how to
        build your own custom hooks from these various examples.
      </p>
      <div>{testContext}</div>
    </div>
  );
};
