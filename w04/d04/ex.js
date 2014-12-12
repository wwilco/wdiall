var wss = require('ws').Server;
var flag = process.argv[2];
var portarg = process.argv[3];

if(flag !== "-l" || !portarg){
  console.log("Bad Args");
  process.exit(1);
}
var server = new wss({port: portarg});
var client;
var connected = false;
console.log("listening on port " + portarg + "(press cntrl c to quit)");
server.on("connection", function(){
  if(connected === false){
    client = ws;
    connected = true;
    ws.on("message", function(msg){
      console.log(msg);
    })
    ws.on("close", function(){
      connected = false;
      console.log("Disconnected");
    })
    console.log("client connected");
  }
  else {
    ws.close();
  }
})

process.stdin.on("data", function(input){
  if(connected === true){
    var processedInput = input.toString().trim();
    client.send(proccessedInput);
  }
})
