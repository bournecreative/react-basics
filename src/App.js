import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Index } from "./pages/Index/index";
import { UseStateExample1 } from "../src/pages/useStateExamples/useStateExample1";
import { UseStateExample2 } from "./pages/useStateExamples/useStateExample2";
import { UseStateExample3 } from "./pages/useStateExamples/useStateExample3";
import { UseStateExample4 } from "./pages/useStateExamples/useStateExample4";
import { UseEffectExample1 } from "./pages/useEffectExamples/useEffectExample1";
import { UseEffectExample2 } from "./pages/useEffectExamples/useEffectExample2";
import { UseRefExample1 } from "./pages/useRefExamples/useRefExample1";
import { UseRefExample2 } from "./pages/useRefExamples/useRefExample2";
import { UseLayoutExample1 } from "./pages/useLayOutEffectExample/useLayOutEffectExample1";
import { CustomHooks } from "./pages/Custom-hooks/index";
import { Navigation } from "./components/Navigation/Navigation";
import "antd/dist/antd.min.css";
import "./pages/style.module.css";

export const UserContext = createContext();
export const App = () => {
  const [home, setHome] = useState("/");

  useEffect(() => {
    const isDevServer = window.location.hostname;

    if (isDevServer !== "localhost") {
      setHome("react-basics/");
    }
  }, []);

  return (
    <div className="main">
      <Navigation />
      <UserContext.Provider value="hellow from content">
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/useState1" element={<UseStateExample1 />}></Route>
          <Route path="/useState2" element={<UseStateExample2 />}></Route>
          <Route path="/useState3" element={<UseStateExample3 />}></Route>
          <Route path="/useState4" element={<UseStateExample4 />}></Route>
          <Route path="/useEffect1" element={<UseEffectExample1 />}></Route>
          <Route path="/useEffect2" element={<UseEffectExample2 />}></Route>
          <Route path="/useRef1" element={<UseRefExample1 />}></Route>
          <Route path="/useRef2" element={<UseRefExample2 />}></Route>
          <Route path="/useLayout1" element={<UseLayoutExample1 />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
};
