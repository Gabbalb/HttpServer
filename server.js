const http = require("http");

//10.4.51.5
const host = 'localhost';
const port = 8080;

const requestListener = function(req, res) {

    //res.writeHead(200);
    //res.end("Hello World from Node.js HTTP Server");

    
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
    
    
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});