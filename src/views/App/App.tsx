// Libraries
import React, { useState } from "react";
import useLocalStorage from "react-use/lib/useLocalStorage";

// Components
import Layout from "antd/lib/layout";
import Sidebar from "../../containers/Sidebar";
import RepoView from "../../containers/RepoView";
import NotAuthenticated from "../../components/NotAuthenticated";

export interface AppProps {}

export default function App(props: AppProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [githubToken, setGithubToken] = useLocalStorage("githubToken", "");

  return (
    <Layout className="App" style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Sidebar collapsed={collapsed} />
      {githubToken ? <RepoView /> : <NotAuthenticated />}
    </Layout>
  );
}
