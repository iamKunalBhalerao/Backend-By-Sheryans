const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/about") {
    res.end("This is about Page");
  }
  if (req.url == "/profile") {
    res.end("This is profile Page");
  }
});

server.listen(3000, () => {
  console.log("server is on PORT:3000");
});
