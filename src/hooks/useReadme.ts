import { useEffect, useState } from "react";
import { parseMarkdown } from "../helpers/markdownHelper";

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

export default function useReadme(owner: string, repo: string): [boolean, any] {
  const [readme, setReadme] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [githubToken, setGithubToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("githubToken");
    setGithubToken(token && token.length > 0 ? JSON.parse(token) : null);
  }, [githubToken]);

  useEffect(() => {
    setIsLoading(true);

    if (!githubToken || !owner || !repo) {
      setIsLoading(false);
    }

    const readmeFetch = async () => {
      const data: ReadmeProps = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`,
        {
          headers: {
            Authorization: "token " + githubToken,
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

      console.log("data: ", data);
      setIsLoading(false);
      setReadme(data);
    };

    readmeFetch();
  }, [owner, repo, githubToken]);

  if (readme && readme.content) {
    readme.vfile = parseMarkdown(readme.content, {
      base64: true,
      awesomeList: true,
    });

    return [isLoading, readme];
  }

  return [isLoading, null];
}
