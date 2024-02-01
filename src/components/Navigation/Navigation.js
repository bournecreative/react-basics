import { useState, useEffect } from "react";
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
} from "@ant-design/icons";

export const Navigation = () => {
  const [current, setCurrent] = useState("home");

  const [home, setHome] = useState("/");

  useEffect(() => {
    const isDevServer = window.location.hostname;

    if (isDevServer !== "localhost") {
      setHome("react-basics/");
    } else {
      setHome("/");
    }
  }, []);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: (
        <Link to={home}>
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
            <Link to="/useState1">Expensive initial state computation</Link>
          ),
          key: "state1",
        },
        {
          label: <Link to="/useState2">Updater function</Link>,
          key: "state2",
        },
        {
          label: <Link to="/useState3">useState object</Link>,
          key: "state3",
        },
        {
          label: <Link to="/useState4">Custom hook</Link>,
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
          label: <Link to="/useEffect1">Clean up functions</Link>,
          key: "effect1",
        },
        {
          label: <Link to="/useEffect2">API call</Link>,
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
          label: <Link to="/useRef1">Reference elements</Link>,
          key: "ref1",
        },
        {
          label: <Link to="/useRef2">Counting renders</Link>,
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
          label: <Link to="/useLayout1">DOM Updates</Link>,
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
          label: <Link to="/useCallback1">Callback with Memo</Link>,
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
          label: <Link to="/useMemo1">useMemo and Expensive functions</Link>,
          key: "memo1",
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
