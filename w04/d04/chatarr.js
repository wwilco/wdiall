//server: node chatarr.js
//client: wscat -c ws://localhost:3000

//showing history with strings
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var history = [];
server.on("connection", function(ws) {
  console.log("made connection");
  ws.on("message", function(msg){
    history.push(msg);
    console.log(msg);
    ws.send(msg);
  })
  var hist = history.join("\n"); //makes a break in a string
  ws.send(hist);
});
// console.log(clients.length);
// clients.forEach(function(client){
//   client.send("secret message. woah")
