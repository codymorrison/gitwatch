import ApolloClient from "apollo-boost";

const token = localStorage.getItem("githubToken");
const authorizeToken = token && token.length > 0 ? JSON.parse(token) : "";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "token " + authorizeToken,
  },
});

export default client;
