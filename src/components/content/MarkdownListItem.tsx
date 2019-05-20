import React from "react";

export interface MarkdownListItemProps {
  children: string[];
  key?: string;
}

export default function MarkdownListItem(props: MarkdownListItemProps) {
  console.log("list item props: ", props);
  return (
    <span>
      {props.children.map((child) => {
        return <span>{child}</span>;
      })}
    </span>
  );
}
