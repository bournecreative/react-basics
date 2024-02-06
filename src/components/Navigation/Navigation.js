import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  SaveOutlined,
  FilterFilled,
  RightSquareFilled,
  LayoutFilled,
  PhoneFilled,
  HistoryOutlined,
  ControlOutlined,
  PushpinOutlined,
} from "@ant-design/icons";

function getPath() {
  if (window.location.origin === "https://bournecreative.github.io") {
    console.log("match", window.location.origin);
    return "/react-basics";
  }
}

export const Navigation = () => {
  const [current, setCurrent] = useState("home");

  const [prodUrl, setProdUrl] = useState(() => getPath());

  const handleMenuChange = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: (
        <Link to={`${prodUrl ? prodUrl : "/"}`}>
          <HomeOutlined />
        </Link>
      ),
      key: "home",
    },
    {
      label: "useState Examples",
      key: "state",
      icon: <SaveOutlined />,
      children: [
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useState1" : "/useState1"}`}>
              Expensive initial state computation
            </Link>
          ),
          key: "state1",
        },
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useState2" : "/useState2"}`}>
              Updater function
            </Link>
          ),
          key: "state2",
        },
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useState3" : "/useState3"}`}>
              useState object
            </Link>
          ),
          key: "state3",
        },
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useState4" : "/useState4"}`}>
              Custom hook
            </Link>
          ),
          key: "state4",
        },
      ],
    },
    {
      label: "useEffect Examples",
      key: "effect",
      icon: <FilterFilled />,
      children: [
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useEffect1" : "/useEffect1"}`}>
              Clean up functions
            </Link>
          ),
          key: "effect1",
        },
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useEffect2" : "/useEffect2"}`}>
              API call
            </Link>
          ),
          key: "effect2",
        },
      ],
    },
    {
      label: "useRef Examples",
      key: "ref",
      icon: <RightSquareFilled />,
      children: [
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useRef1" : "/useRef1"}`}>
              Reference elements
            </Link>
          ),
          key: "ref1",
        },
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useRef2" : "/useRef2"}`}>
              Counting renders
            </Link>
          ),
          key: "ref2",
        },
      ],
    },
    {
      label: "useLayoutEffect Examples",
      key: "layout",
      icon: <LayoutFilled />,
      children: [
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useLayout1" : "/useLayout1"}`}>
              DOM Updates
            </Link>
          ),
          key: "layout1",
        },
      ],
    },
    {
      label: "useCallBack Examples",
      key: "callback",
      icon: <PhoneFilled />,
      children: [
        {
          label: (
            <Link
              to={`${prodUrl ? prodUrl + "/useCallback1" : "/useCallback1"}`}
            >
              Callback with Memo
            </Link>
          ),
          key: "callback1",
        },
      ],
    },
    {
      label: "useMemo Examples",
      key: "memo",
      icon: <HistoryOutlined />,
      children: [
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useMemo1" : "/useMemo1"}`}>
              useMemo and Expensive functions
            </Link>
          ),
          key: "memo1",
        },
      ],
    },
    {
      label: "useReducer Examples",
      key: "reducer",
      icon: <ControlOutlined />,
      children: [
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useReducer1" : "/useReducer1"}`}>
              A useState Alternative
            </Link>
          ),
          key: "reducer1",
        },
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useReducer2" : "/useReducer2"}`}>
              todo with useReducer
            </Link>
          ),
          key: "reducer2",
        },
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useReducer3" : "/useReducer3"}`}>
              When to use UseReducer
            </Link>
          ),
          key: "reducer3",
        },
      ],
    },
    {
      label: "useContext Examples",
      key: "context",
      icon: <PushpinOutlined />,
      children: [
        {
          label: (
            <Link to={`${prodUrl ? prodUrl + "/useContext1" : "/useContext1"}`}>
              Global State
            </Link>
          ),
          key: "context1",
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={handleMenuChange}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
