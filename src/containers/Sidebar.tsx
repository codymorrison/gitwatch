// Libraries
import React from "react";
import { loader } from "graphql.macro";
import { useQuery } from "react-apollo-hooks";

// GraphQL
const SEARCH_REPOS_BY_TOPIC = loader(
  "../api/queries/searchReposByTopic.graphql"
);

// Components
import Layout from "antd/lib/layout";

export interface SidebarProps {
  collapsed: boolean;
}

export interface ReposByTopicData {
  repositoryCount: number;
  pageInfo: any;
  nodes: any;
}

export default function Sidebar(props: SidebarProps) {
  const { data, error, loading } = useQuery(SEARCH_REPOS_BY_TOPIC, {
    skip: true,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  console.info("SEARCH_REPOS_BY_TOPIC data: ", data);

  return (
    <Layout.Sider trigger={null} collapsible collapsed={props.collapsed}>
      Sider
    </Layout.Sider>
  );
}
