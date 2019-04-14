import React from "react";

import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Empty from "antd/lib/empty";
import Icon from "antd/lib/icon";
import LoginButton from "./LoginButton";

export interface NotAuthenticatedProps {}

export default function NotAuthenticated(props: NotAuthenticatedProps) {
  return (
    <Row
      align="middle"
      justify="center"
      style={{ minHeight: "100vh", width: "100vw" }}
    >
      <Col style={{ minHeight: "100vh" }}>
        <Empty
          image={<Icon type="github" theme="filled" style={{ fontSize: 80 }} />}
          description={<span>Login to start viewing repos.</span>}
          style={{ marginTop: 50 }}
        >
          <LoginButton />
        </Empty>
      </Col>
    </Row>
  );
}
