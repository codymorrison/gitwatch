// Libraries
import React from "react";
import useReadme from "../hooks/useReadme";

// Components
import { RouteComponentProps } from "react-router-dom";
import Layout from "antd/lib/layout";
import Skeleton from "antd/lib/skeleton";
import Empty from "antd/lib/empty";

export interface ListRepoRouteParams {
  owner: string;
  repo: string;
}

export default function RepoView(
  props: RouteComponentProps<ListRepoRouteParams>
) {
  console.log("owner: ", props.match.params.owner);
  console.log("repo: ", props.match.params.repo);

  const [isLoading, readme] = useReadme(
    props.match.params.owner,
    props.match.params.repo
  );

  console.log("repoview readme: ", readme);

  if (isLoading) return <Skeleton active />;
  if (!readme || !readme.vfile) return <Empty />;

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Content style={{ padding: 10 }}>
        {readme.vfile.contents}
      </Layout.Content>
    </Layout>
  );
}
