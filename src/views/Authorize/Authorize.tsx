// Libraries
import React from "react";
import useLocalStorage from "react-use/lib/useLocalStorage";

import { Redirect } from "react-router-dom";

export interface AuthorizeProps {
  location: any;
}

export default function Authorize(props: AuthorizeProps) {
  let params = new URLSearchParams(props.location.search);
  const [githubToken, setGithubToken] = useLocalStorage("githubToken", "");
  const accessToken = params.get("access_token")
    ? params.get("access_token")
    : "";

  if (accessToken && accessToken !== githubToken) {
    setGithubToken(accessToken);
  }

  return <Redirect to="/" />;
}
