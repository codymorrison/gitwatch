/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAMMING_LANGUAGES
// ====================================================

export interface GET_PROGRAMMING_LANGUAGES_repository_object_Commit {
  __typename: "Commit" | "Tree" | "Tag";
}

export interface GET_PROGRAMMING_LANGUAGES_repository_object_Blob {
  __typename: "Blob";
  id: string;
  /**
   * The Git object ID
   */
  oid: any;
  /**
   * UTF8 text data or null if the Blob is binary
   */
  text: string | null;
  /**
   * Indicates whether the contents is truncated
   */
  isTruncated: boolean;
  /**
   * Indicates whether the Blob is binary or text
   */
  isBinary: boolean;
  /**
   * The HTTP URL for this Git object
   */
  commitUrl: any;
  /**
   * The HTTP path for this Git object
   */
  commitResourcePath: any;
  /**
   * Byte size of Blob object
   */
  byteSize: number;
}

export type GET_PROGRAMMING_LANGUAGES_repository_object = GET_PROGRAMMING_LANGUAGES_repository_object_Commit | GET_PROGRAMMING_LANGUAGES_repository_object_Blob;

export interface GET_PROGRAMMING_LANGUAGES_repository {
  __typename: "Repository";
  /**
   * A Git object in the repository
   */
  object: GET_PROGRAMMING_LANGUAGES_repository_object | null;
}

export interface GET_PROGRAMMING_LANGUAGES {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: GET_PROGRAMMING_LANGUAGES_repository | null;
}

export interface GET_PROGRAMMING_LANGUAGESVariables {
  owner: string;
  name: string;
  expression: string;
}
