/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEARCH_REPOS_BY_TOPIC
// ====================================================

export interface SEARCH_REPOS_BY_TOPIC_search_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Issue {
  __typename: "Issue" | "PullRequest" | "User" | "Organization" | "MarketplaceListing";
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_repositoryTopics_nodes_topic_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_repositoryTopics_nodes_topic {
  __typename: "Topic";
  id: string;
  /**
   * The topic's name.
   */
  name: string;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_repositoryTopics_nodes_topic_stargazers;
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_repositoryTopics_nodes {
  __typename: "RepositoryTopic";
  id: string;
  /**
   * The HTTP path for this repository-topic.
   */
  resourcePath: any;
  /**
   * The topic.
   */
  topic: SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_repositoryTopics_nodes_topic;
  /**
   * The HTTP URL for this repository-topic.
   */
  url: any;
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_repositoryTopics {
  __typename: "RepositoryTopicConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_repositoryTopics_nodes | null)[] | null;
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_primaryLanguage {
  __typename: "Language";
  id: string;
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_languages_nodes {
  __typename: "Language";
  id: string;
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_languages {
  __typename: "LanguageConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_languages_nodes | null)[] | null;
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface SEARCH_REPOS_BY_TOPIC_search_nodes_Repository {
  __typename: "Repository";
  id: string;
  /**
   * Indicates if the repository is unmaintained.
   */
  isArchived: boolean;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * A list of applied repository-topic associations for this repository.
   */
  repositoryTopics: SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_repositoryTopics;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_primaryLanguage | null;
  /**
   * A list containing a breakdown of the language composition of the repository.
   */
  languages: SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_languages | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: SEARCH_REPOS_BY_TOPIC_search_nodes_Repository_stargazers;
  /**
   * The repository's URL.
   */
  homepageUrl: any | null;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Identifies when the repository was last pushed to.
   */
  pushedAt: any | null;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
}

export type SEARCH_REPOS_BY_TOPIC_search_nodes = SEARCH_REPOS_BY_TOPIC_search_nodes_Issue | SEARCH_REPOS_BY_TOPIC_search_nodes_Repository;

export interface SEARCH_REPOS_BY_TOPIC_search {
  __typename: "SearchResultItemConnection";
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: SEARCH_REPOS_BY_TOPIC_search_pageInfo;
  /**
   * A list of nodes.
   */
  nodes: (SEARCH_REPOS_BY_TOPIC_search_nodes | null)[] | null;
}

export interface SEARCH_REPOS_BY_TOPIC {
  /**
   * Perform a search across resources.
   */
  search: SEARCH_REPOS_BY_TOPIC_search;
}
