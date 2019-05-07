// Libraries
import React, { useState } from "react";
//import useLocalStorage from "react-use/lib/useLocalStorage";

// Components
import { Route } from "react-router-dom";
import Layout from "antd/lib/layout";
import Sidebar from "../../containers/Sidebar";
import RepoView from "../../containers/RepoView";
import { RouteComponentProps } from "react-router-dom";

export interface AppProps {}

export default function App(props: RouteComponentProps) {
  // eslint-disable-next-line
  const [collapsed, setCollapsed] = useState(false);
  //const [githubToken, setGithubToken] = useLocalStorage("githubToken", "");

  return (
    <Layout
      className="App"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        paddingBottom: 0,
        marginBottom: 0,
      }}
    >
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Sidebar
          collapsed={collapsed}
          history={props.history}
          location={props.location}
          match={props.match}
        />

        <Route path="/list/:owner/:repo" component={RepoView} />
      </Layout>
    </Layout>
  );
}
