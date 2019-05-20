import React from "react";

export interface MarkdownLinkProps {
  children?: string[];
  href?: string;
  key?: string;
}

export default function MarkdownLink(props: MarkdownLinkProps) {
  console.log("link props: ", props);

  if (!props.children || !props.href) return <span>{"\u00A0"}</span>;

  return (
    <a href={props.href ? props.href : "#"}>
      {props.children.map((child) => {
        return child;
      })}
    </a>
  );
}
