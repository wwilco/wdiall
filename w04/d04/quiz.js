//in server: sudo npm install ws, then run node quiz.js
//in client: wscat -c ws://localhost:3000

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  ws.on("message", function(msg){
    console.log(msg);
    ws.send("i know you are " + msg + " but what am i");
  });
  
});

// var WebSocketServer = require("ws").Server;
// var server = new WebSocketServer({port: 3000});
// server.on("connection", function(ws) {
//   ws.send("message", function(message){
//     console.log("i know you are but what am i?");
//     // server.send("i know you are but what am i?");
//   });
// });
