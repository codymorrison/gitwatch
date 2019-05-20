/**
 * Markdown Helper Functions
 * @module markdownHelper
 */

import unified from "unified";
import markdown from "remark-parse";
import remark2react from "remark-react";
import { Node } from "unist";
import { VFile } from "vfile";

import MarkdownLink from "../components/content/MarkdownLink";
import MarkdownHeading from "../components/content/MarkdownHeading";
import MarkdownParagraph from "../components/content/MarkdownParagraph";
import MarkdownList from "../components/content/MarkdownList";
import MarkdownListItem from "../components/content/MarkdownListItem";

export interface ParseMarkdownOptions {
  base64?: boolean;
  awesomeList?: boolean;
}

export interface MdastNode extends Node {
  children?: Node[];
}

/**
 * Removes instances of "Awesome-" and "awesome-".
 * Replaces hyphens with spaces for each word and
 * capitalize first letter of every word.
 *
 * @param {string} value - The string to parse
 * @returns {string} The filtered string
 */
export function parseMarkdown(
  value: string,
  opts: ParseMarkdownOptions
): VFile {
  if (opts.base64) value = window.atob(value);

  const tree: VFile = unified()
    .use(markdown)
    .use(remark2react, {
      remarkReactComponents: {
        h1: MarkdownHeading,
        h2: MarkdownHeading,
        h3: MarkdownHeading,
        h4: MarkdownHeading,
        h5: MarkdownHeading,
        h6: MarkdownHeading,
        a: MarkdownLink,
        p: MarkdownParagraph,
        ul: MarkdownList,
        ol: MarkdownList,
        li: MarkdownListItem,
      },
    })
    .processSync(value);

  //if (opts.awesomeList) filterHeadingList(tree);

  console.log("tree: ", tree);

  return tree;
}

/**
 * Removes instances of "Awesome-" and "awesome-".
 * Replaces hyphens with spaces for each word and
 * capitalize first letter of every word.
 *
 * @param {string} value - The MDAST tree to parse
 * @returns {string} The filtered string
 */
export function filterHeadingList(tree: MdastNode): MdastNode | undefined {
  if (!tree || !tree.children) return undefined;
  if (tree.children.length === 0) return tree;

  tree.children = tree.children.filter((node, index) => {
    console.log("tree type: ", node.type, index);
    return node.type === "heading" || node.type === "list";
  });

  return tree;
}
