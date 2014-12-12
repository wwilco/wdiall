// var WebSocket = require("ws");
// var ws = new WebSocket("ws://localhost:3000");//specifies where server is
// ws.on("open", function(){ //"open" called when the connection is "open". on is a method and an eventlistener for js and convention for js
//   console.log("connected to server!")
// });


// //send message to server every second
// var WebSocketClient = require('ws');
// var ws = new WebSocketClient('ws://localhost:' + process.argv[2]);
// ws.on("open", function(){
//   setInterval(function(){
//     ws.send("Hello server!")}, 1000);
// });



var WebSocketClient = require('ws');
var ws = new WebSocketClient('ws://localhost:' + process.argv[2]);

ws.on('open', function(){

  console.log('connected to server blah blah blah');

  setInterval(function(){
    ws.send('Howdy!')}, 1000);

    ws.on('message', function(x){
      var echo = x.toString().trim();
      ws.send(echo);
    })

    process.stdin.on('data',function(x){

      var newData = x.toString().trim();

      ws.send(newData);
    })

  })
