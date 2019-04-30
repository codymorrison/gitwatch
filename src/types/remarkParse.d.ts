/// <reference types="@types/unist" />
import * as parse from "remark-parse";
import { Parser, Attacher } from "unified";

declare class RemarkParser extends Parser {
  blockMethods: string[];
  inlineTokenizers: {
    [key: string]: remarkParse.Tokenizer;
  };
  inlineMethods: string[];
}

declare module "remark-parse" {
  interface Parse extends Attacher {
    (options: RemarkParseOptions): void;
    Parser: typeof RemarkParser;
  }

  type Parser = RemarkParser;

  interface RemarkParseOptions {
    gfm: boolean;
    commonmark: boolean;
    footnotes: boolean;
    blocks: string[];
    pedantic: boolean;
  }

  interface Add {
    (node: Node, parent?: Parent): Node;
    test(): Position;
    reset(node: Node, parent?: Node): Node;
  }

  type Eat = (value: string) => Add;

  type Locator = (value: string, fromIndex: number) => number;

  interface Tokenizer {
    (eat: Eat, value: string, silent: true): boolean | void;
    (eat: Eat, value: string): Node | void;
    locator?: Locator;
    onlyAtStart?: boolean;
    notInBlock?: boolean;
    notInList?: boolean;
    notInLink?: boolean;
  }
}
