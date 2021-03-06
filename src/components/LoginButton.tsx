import React from "react";
import Button from "antd/lib/button/button";

export interface LoginButtonProps {}

export default function LoginButton(props: LoginButtonProps) {
  return (
    <Button href="/.netlify/functions/auth" type="primary">
      Login
    </Button>
  );
}
