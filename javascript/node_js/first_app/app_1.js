const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Bbbb');
    res.end()
    console.log('Connected')
  }
});

server.listen(3000);

console.log('Listening on port 3000...');
