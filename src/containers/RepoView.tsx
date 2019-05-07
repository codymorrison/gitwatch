// Libraries
import React, { useEffect, useState } from "react";
import { parseMarkdown } from "../helpers/markdownHelper";

// Components
import { RouteComponentProps } from "react-router-dom";
import Layout from "antd/lib/layout";

export interface ListRepoRouteParams {
  owner: string;
  repo: string;
}

export interface ReadmeProps {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: Object;
}

export default function RepoView(
  props: RouteComponentProps<ListRepoRouteParams>
) {
  const [readme, setReadme] = useState<ReadmeProps | undefined>(undefined);

  console.log("owner: ", props.match.params.owner);
  console.log("repo: ", props.match.params.repo);

  useEffect(() => {
    const token = localStorage.getItem("githubToken");
    const authorizeToken = token && token.length > 0 ? JSON.parse(token) : "";

    const readmeFetch = async () => {
      const data: ReadmeProps = await fetch(
        `https://api.github.com/repos/${props.match.params.owner}/${
          props.match.params.repo
        }/readme`,
        {
          headers: {
            Authorization: "token " + authorizeToken,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          console.log("error: ", error);
          return error;
        });

      setReadme(data);
    };
    readmeFetch();
  }, [props.match.params.owner, props.match.params.repo]);

  console.log("readme: ", readme);

  if (readme && readme.content && readme.content.length > 0)
    console.log(parseMarkdown(readme.content, { base64: true }));

  return (
    <Layout>
      <Layout.Content>
        {readme && readme.content ? readme.content : ""}
      </Layout.Content>

      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
}
