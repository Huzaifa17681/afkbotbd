var http = require('http');

http.createServer(function (req,res) {
  res.write("I'm alive")l
  res.end();
}).listen(8080);
