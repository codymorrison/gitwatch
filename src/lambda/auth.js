const qs = require("qs");

exports.handler = function(event, context, callback) {
  console.log(event);
  console.log(context);

  const url = "https://github.com/login/oauth/authorize";
  const params = {
    client_id: "6b8c7e17e25383980bbe",
    scope: ["user", "public_repo"],
    redirect_uri: "http://localhost:3000/.netlify/functions/auth-callback",
  };
  const encodedParams = qs.stringify(params, { arrayFormat: "comma" });
  console.log("encodedParams: ", encodedParams);
  console.log("test");

  return callback(null, {
    statusCode: 301,
    headers: {
      Location: `${url}?${encodedParams}`,
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({}),
  });
};
