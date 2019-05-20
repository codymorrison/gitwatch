import React from "react";
import PageHeader from "antd/lib/page-header";

export interface MarkdownHeadingProps {
  children: string[];
  key?: string;
}

export default function MarkdownHeading(props: MarkdownHeadingProps) {
  return <PageHeader title={props.children[0]} />;
}
