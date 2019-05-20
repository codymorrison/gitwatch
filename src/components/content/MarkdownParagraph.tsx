import React from "react";

export interface MarkdownParagraphProps {
  children?: any[];
  key?: string;
}

export default function MarkdownParagraph(props: MarkdownParagraphProps) {
  console.log("paragraph props: ", props);

  if (!props.children) return <p>{"\u00A0"}</p>;

  return (
    <span>
      {props.children.map((child) => {
        return child;
      })}
    </span>
  );
}
