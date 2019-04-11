import React from "react";

import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import LoginButton from "./LoginButton";

export interface NotAuthenticatedProps {}

export default function NotAuthenticated(props: NotAuthenticatedProps) {
  return (
    <Row align="middle" justify="center">
      <Col>
        Not Authenticated
        <Button
          onClick={() => {
            alert("login clicked");
          }}
        >
          Login
        </Button>
        <LoginButton />
      </Col>
    </Row>
  );
}
