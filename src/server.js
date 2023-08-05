var static = require("node-static");
var http = require("node:http");
const path = require("node:path");

const file = new static.Server(path.join(__dirname, "static"));

http
  .createServer(function (request, response) {
    request
      .addListener("end", function () {
        file.serve(request, response);
      })
      .resume();
  })
  .listen(8080, () => console.log("Server started."))
  .on("error", (err) => console.error(err));
