//adam's answer to part one of daily quiz

// var WebSocketServer = require("ws").Server;
// var server = new WebSocketServer({port: 3000});
// server.on("connection", function(ws) {
//   ws.on("message", function(message){
//     ws.send(message);
//   });
// });

//tre's answer for part two, take a word,letter, and return the letter of that index

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  ws.on("message", function(message){
    var splitMsg = message.split(",");
    var newMsg = splitMsg[0];
    var y = splitMsg[1];
    for (var i = 0; i < newMsg.length; i++){
      var x = newMsg.charAt[i];
      if (x === y){
      ws.send("index of " + y + " is " + i);
      }
    }
  });
});
