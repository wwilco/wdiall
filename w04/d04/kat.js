var wss = require ("ws").Server;
var flag=process.argv[2];
var portarg=process.argv[3];
if (flag !=="-l" || !portarg){ // ! is mean doesn't exist.
  console.log("bad args");
  process.exit(1); // 1 means true and exit the program, 0 is flase and dont exit the program.
  //this is close actual server. "close" in the function is close the client side.
}
//this is only for one client connected one time. if second client connected then will kick out the first client.
var server= new wss ({port:portarg});
var client;
var connected = false; // no connection
console.log("listening on port" + portarg + "(press cntrl-c to quite)");

server.on("connection",function(ws){
  if(connected === false){
    client =ws;
    connected = true; // set it to connected.
    ws.on("message",function(msg){
      console.log(msg);
    });
    ws.on("close", function(){
      connected=false;
      console.log("disconnected")
    })
    console.log("client connected");
  }
  else {
    ws.close(); // this will kick out the first client when second client is connected.
  }
});

process.stdin.on("data",function(input){
  if(connected === true){
    var processedInput=input.toString().trim();
    client.send(processedInput);
  }
});
