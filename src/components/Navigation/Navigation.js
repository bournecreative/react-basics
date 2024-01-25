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
          label: <Link to="/about">Example 1</Link>,
          key: "state1",
        },
        {
          label: <Link to="/about">Example2</Link>,
          key: "state2",
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
