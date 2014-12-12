//in server: include wscat -l 2000
//in client: node main.js 2000
var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:" + process.argv[2]);
ws.on("open", function(){
  console.log("connected to server!");
});


//James' code
var port = process.argv[2];

var WebSocket = require("ws");
var portAddress = ("ws://localhost:" + port);
var ws = new WebSocket(portAddress)

ws.on("open", function(){
  console.log("connected to server!");
});

ws.on("message", function(){
  console.log("received" + message);
});
