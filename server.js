let http = require('http');
let server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('2019blog');
});
server.listen(3000, ()=>{
  console.log('success');
});