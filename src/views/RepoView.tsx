// Libraries
import React, { useState } from "react";

// Components
import Layout from "antd/lib/layout";

export interface RepoViewProps {}

export default function RepoView(props: RepoViewProps) {
  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>

      <Layout.Content>Content</Layout.Content>

      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
}
