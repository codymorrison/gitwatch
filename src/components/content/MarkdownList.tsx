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
    <ul>
      {children.map((child) => {
        return <li>{child}</li>;
      })}
    </ul>
  );
}
