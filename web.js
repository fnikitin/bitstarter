var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var htmlFile = "index.html";

var buf = fs.readFileSync(htmlFile);

app.get('/', function(request, response) {
  response.send(buf.toString('ascii'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
