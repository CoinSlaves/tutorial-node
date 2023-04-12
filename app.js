// const names = require('./4-names')

// sayHi(names)
// sayHi('abcxyz')

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome a');
  }
  if (req.url === '/about') {
    res.end('Here is history');
  }
  res.end(`
    <h1>Oops!</h1>
    <p>we ....</p>
    <a href='/'>back home</a>
    
        `);
});

server.listen(5000);
