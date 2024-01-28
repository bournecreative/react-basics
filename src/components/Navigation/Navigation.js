import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  SaveOutlined,
  FilterFilled,
  RightSquareFilled,
} from "@ant-design/icons";

export const Navigation = () => {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: (
        <Link to="/">
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
