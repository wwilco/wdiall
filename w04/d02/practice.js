var WebSocketClient = require('ws');
var ws = new WebSocketClient('ws://localhost:3000');

ws.on('open', function(){

  // console.log('connected to server blah blah blah');
  //
  // setInterval(function(){
  //   ws.send('Howdy!')}, 1000);
  //
  //   ws.on('message', function(x){
  //     var echo = x.toString().trim();
  //     ws.send(echo);
  //   })

    process.stdin.on('data',function(x){

      var newData = x.toString().trim();

      ws.send(newData);
    })

  })
