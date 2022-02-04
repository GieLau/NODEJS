const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('<h1>Labas Pasauli</h1>');
});

server.listen(port, hostname, () => {
});