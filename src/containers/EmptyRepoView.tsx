// Libraries
import React from "react";

// Components
import { RouteComponentProps } from "react-router-dom";
import Layout from "antd/lib/layout";
import LoginButton from "../components/LoginButton";
import Empty from "antd/lib/empty";
import useLocalStorage from "react-use/lib/useLocalStorage";

export interface EmptyRepoViewProps {}

export default function EmptyRepoView(
  props: RouteComponentProps<EmptyRepoViewProps>
) {
  const [githubToken, setGithubToken] = useLocalStorage("githubToken", "");

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Content style={{ padding: 10 }}>
        {githubToken ? <Empty /> : <LoginButton />}
      </Layout.Content>
    </Layout>
  );
}
