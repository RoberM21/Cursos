const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log('Hello');


//////////////////////////////////////////////////

var fs = require("fs");
var fileContent = fs.readFileSync('sync.js','utf8');

console.log(fileContent);
console.log("something else");