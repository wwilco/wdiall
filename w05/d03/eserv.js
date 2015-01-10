var fs = require('fs');
var http = require('http');

var server = http.createServer(function(request, response){
  console.log(request.url)
  if (request.url === "/"){
    fs.readFile("e.html", function(err, data){
      var link = data.toString();
      response.end(link);
    })
  }
  else {
    fs.readFile("e.css", function(err, data){
      var link = data.toString();
      response.end(link);
    })
  }
  // else {
  //   var path = request.url;
  //   path.slice(1);
  //   fs.readFile(path, function(err, data){
  //   response.end(data);
  //   })
  // }
})
  console.log("accomplished")

server.listen(2000)

// //notes on answer(below)
// //even though its built into node, must use require
// var fs = require('fs');
// var http = require('http');
//
// //needed to responed for the one connection
// var server = http.createServer(function(request, response){
//   console.log(request.url) //can test if request has gone through
//   //should have inportant code for request, within this '}'
//
//   fs.readFile("e.html", function(err, data){
//     //antyhing that happens here, will only happen after the file, "e.html" is done loading
//
//     response.end(data.toString());
//
//   })
//   //if response.end was put here, the response would occur before the file is even read
//   console.log("accomplished")
//
// })
//
// server.listen(2000)
