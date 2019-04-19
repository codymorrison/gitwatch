require("dotenv").config();

const fetch = require("node-fetch").default;
const querystring = require("querystring");

const buildURL = function(host, data) {
  if (!host) return null;

  const hostPrefix = host === "localhost:3000" ? "http://" : "https://";
  const clientSuffix = "/authorize";
  const queryParams = data ? querystring.stringify(data) : null;

  let url = hostPrefix + host + clientSuffix;
  if (queryParams) url += `?${queryParams}`;

  return url;
};

exports.handler = function(event, context, callback) {
  const requestData = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: event.queryStringParameters.code,
    state: event.queryStringParameters.state,
  };

  fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      const parsedData = JSON.parse(data);

      return callback(null, {
        statusCode: 302,
        headers: {
          Location: buildURL(event.headers.host, parsedData),
        },
        body: data,
      });
    })
    .catch((error) => {
      console.error("error: ", error.type, error.name, error.message);

      return callback({
        statusCode: 302,
        headers: {
          Location: buildURL(event.headers.host, error),
        },
        body: JSON.stringify(error),
      });
    });
};
