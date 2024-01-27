import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, SaveOutlined } from "@ant-design/icons";

export const Navigation = () => {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
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
