
var http = require('http');

http.createServer(function (req, res){

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
<<<<<<< HEAD

=======
  
>>>>>>> 45cb4190ae4c746152c9bc296b508c5334c0ecb4
}).listen(8080);
