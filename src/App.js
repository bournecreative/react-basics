import { Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import { UseCallbackExample1 } from "./pages/useCallbackExamples/useCallbackExample1";
import { Navigation } from "./components/Navigation/Navigation";
import { UseMemoExample1 } from "./pages/useMemoExamples/useMemoExample1/useMemoExample1";
import { UseReducerExample1 } from "./pages/useReducerExamples/useReducerExamples1/useReducerExample1";
import { UseReducerExample2 } from "./pages/useReducerExamples/useReducerExamples2/useReducerExample2";
import { UseContextExample1 } from "./pages/useContextExamples/useContextExample1/useContextExample1";
import { UserContext } from "./context/userContext";
import "antd/dist/antd.min.css";
import "./pages/style.module.css";

function getPath() {
  if (window.location.origin === "https://bournecreative.github.io") {
    console.log("match", window.location.origin);
    return "/react-basics";
  }
}

export const App = () => {
  const [contextValue, setContextValue] = useState(
    "initial context value. Nano - Nano"
  );

  const [prodUrl, setProdUrl] = useState(() => getPath());

  return (
    <div className="main">
      <Navigation />
      <UserContext.Provider value={{ contextValue, setContextValue }}>
        <Routes>
          <Route
            path={`${prodUrl ? prodUrl : "/"}`}
            element={<Index />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useState1" : "/useState1"}`}
            element={<UseStateExample1 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useState2" : "/useState2"}`}
            element={<UseStateExample2 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useState3" : "/useState3"}`}
            element={<UseStateExample3 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useState4" : "/useState4"}`}
            element={<UseStateExample4 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useEffect1" : "/useEffect1"}`}
            element={<UseEffectExample1 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useEffect2" : "/useEffect2"}`}
            element={<UseEffectExample2 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useRef1" : "/useRef1"}`}
            element={<UseRefExample1 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useRef2" : "/useRef2"}`}
            element={<UseRefExample2 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useLayout1" : "/useLayout1"}`}
            element={<UseLayoutExample1 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useCallback1" : "/useCallback1"}`}
            element={<UseCallbackExample1 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useMemo1" : "/useMemo1"}`}
            element={<UseMemoExample1 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useReducer1" : "/useReducer1"}`}
            element={<UseReducerExample1 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useReducer2" : "/useReducer2"}`}
            element={<UseReducerExample2 />}
          ></Route>
          <Route
            path={`${prodUrl ? prodUrl + "/useContext1" : "/useContext1"}`}
            element={<UseContextExample1 />}
          ></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
};
