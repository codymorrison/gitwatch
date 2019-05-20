import React from "react";
import List from "antd/lib/list";
import { element } from "prop-types";

export interface MarkdownListProps {
  children: any[];
  key?: string;
}

export default function MarkdownList(props: MarkdownListProps) {
  console.log("list props: ", props);

  const children = props.children.filter((child) => {
    return child && child !== typeof element;
  });

  return (
    <List
      dataSource={children}
      bordered={false}
      renderItem={(listItem) => {
        console.log("listItem: ", listItem);
        return <List.Item>{listItem}</List.Item>;
      }}
    />
  );
}
