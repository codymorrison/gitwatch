import proxy from "http-proxy-middleware";

module.exports = function(app: any) {
  app.use(
    proxy("/.netlify/functions/", {
      target: "http://localhost:9000/",
      pathRewrite: {
        "^/\\.netlify/functions": "",
      },
    })
  );
};
