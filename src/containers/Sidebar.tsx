// Libraries
import React from "react";
import { loader } from "graphql.macro";
import { useQuery } from "react-apollo-hooks";
import { awesomeCleanup } from "../helpers/stringHelper";
import { numberWithCommas } from "../helpers/numberHelper";
import { LightenDarkenColor } from "../helpers/cssHelper";

// Components
import Layout from "antd/lib/layout";
import Icon from "antd/lib/icon";
import Tag from "antd/lib/tag";

// GraphQL
const SEARCH_REPOS_BY_TOPIC = loader(
  "../api/queries/searchReposByTopic.graphql"
);

export interface SidebarProps {
  collapsed: boolean;
}

export interface ReposByTopicData {
  repositoryCount: number;
  pageInfo: any;
  nodes: any;
}

export default function Sidebar(props: SidebarProps) {
  const { data, error, loading } = useQuery(SEARCH_REPOS_BY_TOPIC);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  let languageStyles = { backgroundColor: "#fdfdfd" };

  console.log("SEARCH_REPOS_BY_TOPIC data: ", data.search);

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      width="250"
    >
      {data.search.nodes.map((repo: any) => {
        console.log("repo: ", repo);

        if (repo.primaryLanguage && repo.primaryLanguage.color) {
          languageStyles.backgroundColor = LightenDarkenColor(
            repo.primaryLanguage.color,
            0
          );
        }

        return (
          <div
            key={repo.id}
            style={{
              backgroundColor: "#fdfdfd",
              padding: 10,
              borderBottom: "1px solid #ccc",
              //...languageStyles,
              cursor: "pointer",
            }}
            onClick={(evt) => {
              console.log("url: ", repo.url);
              console.log(props);
            }}
          >
            <h4>{awesomeCleanup(repo.name)}</h4>
            <div>
              <small>
                <Icon
                  type="star"
                  theme="twoTone"
                  twoToneColor="#ebc600"
                  style={{
                    marginRight: 5,
                    color: "#FFD700",
                  }}
                />
                {numberWithCommas(repo.stargazers.totalCount)}
              </small>
            </div>
            <div>
              {repo.repositoryTopics.nodes
                .sort((a, b) => {
                  if (!a || !a.topic || !a.topic.starGazers) return 1;
                  if (!b || !b.topic || !b.topic.starGazers) return 1;

                  return (
                    a.topic.starGazers.totalCount -
                    b.topic.starGazers.totalCount
                  );
                })
                .filter((resource, index) => {
                  return (
                    resource.topic.name !== "awesome" &&
                    resource.topic.name !== "awesome-list" &&
                    resource.topic.name !== "lists" &&
                    resource.topic.name !== "list" &&
                    resource.topic.name !== "awesomeness" &&
                    index <= 2
                  );
                })

                .map((resource) => {
                  return (
                    <Tag key={resource.id} style={{ marginTop: 5 }}>
                      {resource.topic.name}
                    </Tag>
                  );
                })}
            </div>
          </div>
        );
      })}
    </Layout.Sider>
  );
}
