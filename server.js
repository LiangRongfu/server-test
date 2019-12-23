let http = require('http');
let info = require('./info.json');
let server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(info);
});
server.listen(3000, ()=>{
  console.log('success');
});
