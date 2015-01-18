//tiffany's code
var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var server = http.createServer(function(request, response){

  var tiffany = {name:"Tiffany", color : "black", age:26}
  
  var template = fs.readFileSync('index.ejs', 'utf8');
  var rendered = ejs.render(template, {name: tiffany.name, color: tiffany.color, age: tiffany.age});
  response.end(rendered);
})


server.listen(3000);

console.log('listening on port 3000!');


// var ejs = require('ejs');
// var fs = require('fs');
// var express = require('express')
// var app = express();
//
// app.get('/', function(req,res){
//   var name = (req.params.name);
//   var color = (req.params.color);
//   var age= (req.params.age);
//   var str = fs.readFileSync('index.ejs','utf8')
//   var rendered = ejs.render(str,{name: name, color: color, age: age})
//   res.end(rendered);
//
// });
//
// app.listen(3000);
