// var add = function(x,y){
//   var z = x + y;
//   console.log(z);
// }
// add(5,4)
//
//
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  console.log("connected! yay!");
  ws.send("Enter two numbers with a space inbetween");
  ws.on("message", function(input){
    //var input = input.toString();
    var arr = input.split(" ");
    var answer = parseInt(arr[0]) + parseInt(arr[1]);
    var answer2 = answer.toString();
    ws.send(answer2);
  });
});

// ws.on("message", function(x){
//   var x = parseInt(x);
//   var answer = x + x;
//   var answer2 = answer.toString().trim();
//   ws.send(answer2);

var message = "Enter two numbers with a space inbetween";
console.log(message);
process.stdin.on("data", function(input) {
  var input = input.toString();
  var arr = input.split(" ");
  var answer = parseInt(arr[0]) + parseInt(arr[1])
  console.log(answer)
});
