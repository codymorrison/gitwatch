/**
 * Markdown Helper Functions
 * @module markdownHelper
 */

import unified from "unified";
import markdown from "remark-parse";
import { Node } from "unist";

export interface ParseMarkdownOptions {
  base64?: boolean;
}

/**
 * Removes instances of "Awesome-" and "awesome-".
 * Replaces hyphens with spaces for each word and
 * capitalize first letter of every word.
 *
 * @param {string} value - The string to parse
 * @returns {string} The filtered string
 */
export function parseMarkdown(value: string, opts: ParseMarkdownOptions): Node {
  if (opts.base64) value = window.atob(value);

  const tree = unified()
    .use(markdown, { gfm: true })
    .parse(value);

  return tree;
}
