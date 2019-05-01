/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepositorySummary
// ====================================================

export interface RepositorySummary_repositoryTopics_nodes_topic_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface RepositorySummary_repositoryTopics_nodes_topic {
  __typename: "Topic";
  id: string;
  /**
   * The topic's name.
   */
  name: string;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: RepositorySummary_repositoryTopics_nodes_topic_stargazers;
}

export interface RepositorySummary_repositoryTopics_nodes {
  __typename: "RepositoryTopic";
  id: string;
  /**
   * The HTTP path for this repository-topic.
   */
  resourcePath: any;
  /**
   * The topic.
   */
  topic: RepositorySummary_repositoryTopics_nodes_topic;
  /**
   * The HTTP URL for this repository-topic.
   */
  url: any;
}

export interface RepositorySummary_repositoryTopics {
  __typename: "RepositoryTopicConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (RepositorySummary_repositoryTopics_nodes | null)[] | null;
}

export interface RepositorySummary_primaryLanguage {
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

export interface RepositorySummary_languages_nodes {
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

export interface RepositorySummary_languages {
  __typename: "LanguageConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (RepositorySummary_languages_nodes | null)[] | null;
}

export interface RepositorySummary_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface RepositorySummary {
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
  repositoryTopics: RepositorySummary_repositoryTopics;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: RepositorySummary_primaryLanguage | null;
  /**
   * A list containing a breakdown of the language composition of the repository.
   */
  languages: RepositorySummary_languages | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: RepositorySummary_stargazers;
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
