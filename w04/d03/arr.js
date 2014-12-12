var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var clients = [];
server.on("connection", function(ws){

  clients.push(ws);

  ws.on("close", function(){
    var x = clients.indexOf(ws);
    clients.splice(x, 1);
  });

  ws.on("message", function(evt){
    clients.forEach(function(client){
      client.send(evt)
    });

    //console.log(evt.data);
    //document.write(evt.data + "<br>");
  });


  // ws.send("message", function(evt){
  //   client.send(evt);
  // });

  console.log(clients.length);
  clients.forEach(function(client){
    client.send("secret message. woah")
  });
});



//server: node arr.js
//client: wscat -c ws://localhost:3000


// var WebSocketServer = require("ws").Server;
// var server = new WebSocketServer({port: 3000});
// server.on("connection", function(ws) {
//   ws.on("message", function(message){
//     ws.send(message);
//   });
// });
