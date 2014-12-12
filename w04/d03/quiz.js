// var WebSocketServer = require("ws").Server;
// var server = new WebSocketServer({port: 3000});
// server.on("connection", function(ws){
//   ws.on("message", function(msg){
//     var msg2 = msg.toString().trim();
//     ws.send(msg2);
//   });
// });

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  console.log("connected! yay!");
  for(var i = 0; i < msg.length; i++)
  ws.on("message", function(msg){
    var msg2 = msg.toString().trim();
    var msg3 = msg2.length[i];
    var msg4 = parseInt(msg3[i]);
    ws.send(msg2 + "," msg4);
  });
});
