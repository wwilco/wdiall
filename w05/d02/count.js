var http = require("http");
var counter = 0;
var server = http.createServer(function(request, response){
  var path = request.url;
  for (var i = 0; i < path.length; i++);
  var x = path[i];
  if(x === "s"){
    counter++;
  }
  response.end("<html><body><h1>" + counter + "</h1></body></html>");
})
server.listen(2000);




// //bonus count the number of times they log into the site
// var http = require("http");
// var counter = 1;
// //var count = 0;
// var server = http.createServer(function(request, response){
//   var path = request.url;
//   var count = 0;
//   var msg = "";
//   counter++;
//   count = counter/2;
//   count++;
//   console.log(count);
//   response.end("<html><body><p>" + count +"</p></body></html>");
// })
// server.listen(2000);
