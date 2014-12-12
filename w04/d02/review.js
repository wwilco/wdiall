// var x = ;
// var WebSocketServer = require("ws").Server;
// var server = new WebSocketServer({port: 3000});
// server.on("connection", function(ws) {
//   console.log();
//   ws.on("message", function(message){
//     if (){
//       console.log(message);
//     }
//   });
// });

// var hello = "type a number";
// console.log(hello);
// process.stdin.on("data", function(hello){
//   var number = hello.toString().trim();
//   console.log(number * 2)
// });

// process.stdin.on("data", function(data){
//   var number = data.toString().trim();
//   console.log(number * 2)
// });

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  //console.log("connected! yay!");
  ws.on("message", function(x){
    var x = parseInt(x);
    var answer = x + x;
    var answer2 = answer.toString().trim();
    ws.send(answer2);
  });
});

//Alvin's code
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(){
  ws.send("your number");
  ws.on("message", function(inpt){
    var dblinpt = inpt * 2;
    var dblinpt = dblinpt.toString();
    ws.send(dblinpt);
  });
  console.log("connected!");
});
