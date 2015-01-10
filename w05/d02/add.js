var http = require("http");
var server = http.createServer(function(request,response){
  var msg = "";
  var path = request.url;
  var headline = parseInt(path.split("/")[2]);
  var headline2 = parseInt(path.split("/")[3]);
  if (path === "/add/" + headline + "/" + headline2){
    var num1 = headline;
    var num2 = headline2;
    msg = num1 + num2;
  }
  else if (path === "/sub/" + headline + "/" + headline2){
    var num1 = headline;
    var num2 = headline2;
    msg = num1 - num2;
  }
  response.end("<html><body><h1>" + msg + "</h1></body></html>");
});
server.listen(2000);




var http = require("http");
var server = http.createServer(function(request,response){
  var msg = "";
  var path = request.url;
  var headline = parseInt(path.split("/")[2]);
  var headline2 = parseInt(path.split("/")[3]);
  // console.log(headline);
  // console.log(headline2);
  if (path === "/add/" + headline + "/" + headline2){
    var num1 = headline;
    var num2 = headline2;
    console.log(num1);
    console.log(num2);
    msg = num1 + num2;
    console.log(msg);
  }
  else if (path === "/sub/" + headline + "/" + headline2){
    var num1 = headline;
    var num2 = headline2;
    msg = num1 - num2;
  }
  response.end("<html><body><h1>" + msg + "</h1></body></html>");
});
server.listen(2000);



//
// var x = process.argv[2];
// var y = process.argv[3];
// var http = require("http");
// var server = http.createServer(function(request, response){
//   x = parseInt(x);
//   y = parseInt(y);
//   //var path = request.url;
//   var path = request.url.split("/");
//   if (path === "/add/x/y"){
//     var msg = x + y;
//   }
//   response.end(msg);
// });
// server.listen(2000);
