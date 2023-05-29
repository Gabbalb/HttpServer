const http = require("http");
const host = 'localhost';
const port = 8000;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("Hello World from Node.js HTTP Server");
  }

