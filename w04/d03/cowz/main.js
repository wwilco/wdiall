//must have the cowsay requirements for this to properly function
//var cowsay = require("cowsay");
//console.log(cowsay.say({text: "jjj"}));

//this is server to the client, connect server first
//wscat node main.js in server
//wscat -c ws://localhost:3000 in client
var cowsay = require("cowsay");
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) { //use "connection", server is listening for connection instead of "open"
  console.log("connected! yus!");
  ws.on("message", function(message){
    var moo = cowsay.say({text: message});
    ws.send(moo);//takes the text of server and sends it out
  });
});


// //this is client to server, connect server first
// //wscat -l 3000 in server
// //node main.js in client
// var cowsay = require("cowsay");
// var WebSocket = require("ws");
// var ws = new WebSocket("ws://localhost:3000");
// ws.on("open", function() {
//   console.log("connected yay");
//   ws.on("message", function(message){
//     var moo = cowsay.say({text: message}); //use say method from the cowsay object
//     ws.send(moo);
//   });
// });
