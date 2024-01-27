import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Index } from "./pages/Index/index";
import { UseStateExampleOne } from "../src/pages/useStateExamples/useStateExampleOne";
import { UseStateExampleTwo } from "./pages/useStateExamples/useStateExampleTwo";
import { UseStateExampleThree } from "./pages/useStateExamples/useStateExampleThree";
import { UseStateExampleFour } from "./pages/useStateExamples/useStateExampleFour";
import { ReactRef } from "./pages/React-ref/index";
import { ReactState } from "./pages/React-state/index";
import { ReactUseEffect } from "./pages/React-useEffect";
import { CustomHooks } from "./pages/Custom-hooks/index";
import { ReactUseCallBack } from "./pages/React-use-call-back";
import { Navigation } from "./components/Navigation/Navigation";
import "antd/dist/antd.min.css";
import "./pages/style.module.css";
export const UserContext = createContext();

export const App = () => {
  const [home, setHome] = useState("/");

  useEffect(() => {
    const isDevServer = window.location.hostname;

    if (isDevServer !== "localhost:3000") {
      setHome("react-basics/");
    }
  }, []);

  return (
    <div className="main">
      <Navigation />
      <UserContext.Provider value="hellow from content">
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/useState1" element={<UseStateExampleOne />}></Route>
          <Route path="/useState2" element={<UseStateExampleTwo />}></Route>
          <Route path="/useState3" element={<UseStateExampleThree />}></Route>
          <Route path="/useState4" element={<UseStateExampleFour />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
};
