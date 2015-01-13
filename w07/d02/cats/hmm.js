var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var server = http.createServer(function(req, res){
  var template = fs.readFileSync('mytemplates.ejs', 'utf8');
  var rendered = ejs.render(template, {color: "red", name "Will"});
  res.end(rendered);
})

server.listen(3000);

console.log('listening on port 3000!');

// must npm install express
// do express with EJS, express is modeled after sinatra
