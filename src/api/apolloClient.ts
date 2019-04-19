import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `token ${localStorage.getItem("githubToken")}`,
  },
});

export default client;
