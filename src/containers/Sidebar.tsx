// Libraries
import React from "react";
import { loader } from "graphql.macro";
import { useQuery } from "react-apollo-hooks";

// Components
import Layout from "antd/lib/layout";

// GraphQL
const GET_PROGRAMMING_LANGUAGES = loader(
  "../api/queries/getProgrammingLanguages.graphql"
);

export interface SidebarProps {
  collapsed: boolean;
}

export interface ReposByTopicData {
  repositoryCount: number;
  pageInfo: any;
  nodes: any;
}

export default function Sidebar(props: SidebarProps) {
  const { data, error, loading } = useQuery(GET_PROGRAMMING_LANGUAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  console.info("GET_PROGRAMMING_LANGUAGES data: ", data);

  return (
    <Layout.Sider trigger={null} collapsible collapsed={props.collapsed}>
      Sider
    </Layout.Sider>
  );
}
