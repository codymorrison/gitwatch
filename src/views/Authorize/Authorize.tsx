// Libraries
import React from "react";

import useLocalStorage from "react-use/lib/useLocalStorage";

export interface AuthorizeProps {
  location: any;
}

export default function Authorize(props: AuthorizeProps) {
  let params = new URLSearchParams(props.location.search);
  const [githubToken, setGithubToken] = useLocalStorage("githubToken", "");
  const accessToken = params.get("access_token")
    ? params.get("access_token")
    : "";

  console.log("authorize location: ", props.location);
  console.log(
    "authorize params: ",
    params.get("access_token"),
    params.get("token_type"),
    params.get("scope")
  );

  if (accessToken) {
    setGithubToken(accessToken);
  }

  return <p>Authorize Page</p>;
}
