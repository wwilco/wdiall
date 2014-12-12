// var WebSocket = require("ws");
// var ws = new WebSocket("ws://localhost:3000")
// ws.on("message", function(message){
//   ws.send("received " + message);
// });


// var WebSocket = require("ws");
// var ws = new WebSocket("ws://localhost:3000")
// ws.on("message", function(message){
//   if (message === "hey client"){
//     ws.send("hey server");
//   }
// });

// var WebSocketServer = require("ws").Server;
// var server = new WebSocketServer({port: 3000});
// server.on("connection", function(ws) {
//   var servercount = [];
//   servercount.push(server);
//   console.log(servercount + "servers conncted");
// });

// var counter = 0;
// var WebSocketServer = require("ws").Server;
// var server = new WebSocketServer({port: 3000});
//
// server.on("connection", function(ws) {
//   console.log("connected" + counter);
//   counter ++;
//   if (counter > 1);
//   ws.close("connection", function(ws){
//     console.log("No can do, foo!")
//   });
// });


var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000")
ws.on("message", function(message){
  ws.send("hey server");
});
