exports.handler = function(event, context, callback) {
  console.log(JSON.stringify(`Event: event`));
  console.log(JSON.stringify(`Context: context`));

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      name: "auth-callback",
      nodes: [{ id: 1 }, { id: 2 }],
    }),
  });
};
