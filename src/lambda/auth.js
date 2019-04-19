require("dotenv").config();

const querystring = require("querystring");

exports.handler = function(event, context, callback) {
  const url = "https://github.com/login/oauth/authorize";
  const params = {
    client_id: process.env.GITHUB_CLIENT_ID,
    scope: ["read:user", "user:email", "public_repo"].join(),
    state: 1,
  };

  const encodedParams = querystring.stringify(params);

  return callback(null, {
    statusCode: 302,
    headers: {
      Location: `${url}?${encodedParams}`,
      "Cache-Control": "no-cache",
    },
    body: "OK",
  });
};
