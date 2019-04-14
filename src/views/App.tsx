// Libraries
import React, { useState } from "react";
import client from "../api/apolloClient";
import { loader } from "graphql.macro";

import "../assets/styles/index.css";

// GraphQL
const SEARCH_REPOS_BY_TOPIC = loader(
  "../api/queries/searchReposByTopic.graphql"
);

// Components
import { ApolloProvider, Query } from "react-apollo";
import Layout from "antd/lib/layout";
import Sidebar from "./Sidebar";
import RepoView from "./RepoView";
import NotAuthenticated from "../components/NotAuthenticated";

export interface AppProps {}

export default function App(props: AppProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Query query={SEARCH_REPOS_BY_TOPIC} errorPolicy="ignore">
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          //if (error) return <p>{`Error! ${error.message}`}</p>;

          console.info("SEARCH_REPOS_BY_TOPIC data: ", data);

          return (
            <Layout
              className="App"
              style={{ minHeight: "100vh", minWidth: "100vw" }}
            >
              <Sidebar collapsed={collapsed} />

              {isAuthenticated ? <RepoView /> : <NotAuthenticated />}
            </Layout>
          );
        }}
      </Query>
    </ApolloProvider>
  );
}
