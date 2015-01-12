// // EX 1
// var http = require("http"); //requires the node modules
// var msg = "";
// var server = http.createServer(function(request, response){
//   var path = request.url; //this section is part of request
//   if (path === "/") {
//     msg = "hello world";
//   }
//   else {
//     msg = "phooey";
//   }
//   response.end(msg);//goes back to the browser and prints msg depending on whats put into the browser from the user
// });
// server.listen(2000);


// EX 2
var http = require("http");
var msg = "";
var server = http.createServer(function(request, response){
  var path = request.url;
  var newpath = path.split("/");
  if (newpath[1] === "say") {
    // var newpath = path.split("/");
    // var word = newpath.splice(1,2)
    msg = newpath[2];
  }
  else {
    msg = "go to http://localhost:2000/say/something";
  }
  response.end(msg);
});
server.listen(2000);
