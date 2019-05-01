require("dotenv").config();

module.exports = {
  client: {
    service: {
      name: "github",
      url: "https://api.github.com/graphql",
      headers: {
        Authorization: "bearer " + process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
      },
    },
  },
};
