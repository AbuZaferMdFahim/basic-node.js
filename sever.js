const http = require('http')
const server = http.createServer((req, res) => {
 if (req.url === '/') {
  res.end('Welcome to our Home Page');
 }
 if (req.url === '/about') {
  res.end('Here is Some Story');
 }
 else {
  res.end(`
<h1>Oops!</h1><p>jsdwjs ssh hfahf</p><a href = "/">Back to Home</a>
`);
 }
})
server.listen(1000);