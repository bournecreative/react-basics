import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Tag } from "antd";
import { UserContext } from "../../context/userContext";

export const Index = () => {
  const path =
    window.location.origin === "https://bournecreative.github.io"
      ? "/react-basics"
      : "/";

  const { contextValue } = useContext(UserContext);
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card bordered={false}>
          <h2>
            Home page for react basics
            <Tag color="teal">useRef</Tag>
          </h2>
          <p>
            Tips and tricks for using the various React hooks and learn how to
            build your own custom hooks from these various examples.
          </p>
          <div style={{ margin: "12px 0" }}>
            Context Value<Tag color="blue">{contextValue}</Tag>
          </div>
          <Link to={`${path ? path + "/useContext1" : "/useContext1"}`}>
            Back to useContext Example
          </Link>
        </Card>
      </Col>
    </Row>
  );
};
