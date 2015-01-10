// var http = require("http");
// var server = http.createServer(function(request, response){
//   response.end("Hero");//response method: writes the string to the response and sends to client, then ends the request and response
// })
// server.listen(2000);

// //with h1 and p tags as arguments dfrom the command line
// var http = require("http");
// var h1a = process.argv[2];
// var pa = process.argv[3];
// var server = http.createServer(function(request, response){
//   response.end("<html><body><a href='http://localhost:2000/'></a><h1>" + h1a + "</h1><p>" + pa + "</p></body></html>")
// })
// server.listen(2000);

//link to itself
// var http = require("http");
// var server = http.createServer(function(request, response){
//   response.end("<html><body><a href='http://localhost:2000/'>hi</a></body></html>");//need to have the http when you use the link, if its in quotes
// })
// server.listen(2000);

// //ex:3, increase requests from server,
// var http = require("http");
// var counter = 0;
// var server = http.createServer(function(request, response){
//   counter++;
//   console.log(request.url)
//   response.end("<html><body><h1>" + counter + "</h1></body></html>")
// })
// server.listen(2000);

// //ex #4 and 5, 4 is now erased
// var http = require("http");
// var msg = " ";
// var server = http.createServer(function(request, response){
//   var path = request.url;
//   if (path === "/jaws"){
//     msg = ('<html><body><img src="http://www.motherjones.com/files/imagecache/top-of-content-main/2806004-jaws.jpg"/></body></html>')
//   } else {
//     msg = " ";
//   }
//   response.end(msg);
// });
// server.listen(2000);

// //ex 6
// var http = require("http");
// var msg = " ";
// var server = http.createServer(function(request, response){
//   var path = request.url;
//   var healine = path.split("/");
//   if (headline === "rice"){
//     msg = "MMMMMMM"
//     }
//   else if (headline === "guac"){
//     msg = "AHHHHHHH";
//     }
//   else if (headline === " " ){
//     msg = ("<html><body><h1>Missing Something</h1></body></html>")
//   } else {
//     msg = ("<html><body><h1> everything, even " + headline + " is good on a torilla</h1></body></html>")
//   }
//   response.end(msg);
// });
// server.listen(2000);
//or

var http = require("http");
var msg = " ";
var server = http.createServer(function(request, response){
  var path = request.url;
  var headline = request.url.split("/");
  if (path === "/tortilla/rice"){
    msg = "MMMMMMM"
  }
  else if (path === "/tortilla/guac"){
    msg = "AHHHHHHH";
  }
  else if (path === "/tortilla/" + headline[2]){
    msg = ("<html><body><h1> everything, even " + headline[2] + " is good on a torilla</h1></body></html>")
  }
  else {
    msg = ("<html><body><h1>Missing Something</h1></body></html>")
  }
  response.end(msg);
});
server.listen(2000);
