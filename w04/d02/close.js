var WebSocketServer = require("ws").Server;
var connected = false;
var userNum = 1;

var server = new WebSocketServer ({port: 2000});
server.on("connection", function(client) {

  if (connected === true) {
    client.send("No can do sorry");
    client.close();
    console.log("Client " + userNum + " disconnected.") //verify on server side
    connected = false;
  }
  else if (connected === false) {
    client.send("Successfully connected.");
    console.log("Client " + userNum + " connected.") //verify on server side
    connected = true;
    client.on("close", function() {
      connected = false;
    })
  }
  userNum ++
})
