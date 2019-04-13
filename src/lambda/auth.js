exports.handler = function(event, context, callback) {
  console.log(JSON.stringify(`Event: ${JSON.stringify(event)}`));
  console.log(JSON.stringify(`Context: ${JSON.stringify(context)}`));

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      name: "auth",
      nodes: [{ id: 1 }, { id: 2 }],
    }),
  });
};
