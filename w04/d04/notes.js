//provides flexibility for using other ports
//making server with ws

var wss = require('ws').Server;
var flag = process.argv[2];
var portarg = process.argv[3];

if (flag !== '-l' || !portarg){ // if its does not equal -1 or there is no port argument
  console.log("bad args");
  process.exit(1);//kills the server program gracefully. need 1 or 0. 1 means kill. 0 means keep running. the 1 is true, and true means execute.
}

var server = new wss({port:portarg});
var client; //solves the issue of scope
var connected = false; //will eventually change to true
console.log("listening on port:" + portarg + "(. press cntrl-c to quit)");
server.on("connection", function(ws){//we are writing the server
  if (connected === false){
    client = ws;
    connected = true;
    ws.on("message", function(msg){//receiving a message from the server
      console.log(msg);
    });
    ws.on("close", function(){
      connected = false;
      console.log("you been cut loose");
    });
    console.log("client connected booya!");
  }
    else {
      ws.close();
    }
});

process.stdin.on("data", function(input){
  if (connected === true){
    var processedInput = input.toString().trim();
    client.send(processedInput)
  }
});
