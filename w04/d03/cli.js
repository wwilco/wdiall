var client = require('ws');
var address = process.argv[2];

if (!address){
  console.log("womp womp");
  process.exit(1);
}
var ws = new client(address);
ws.on("open", function(){
  console.log("this is connected to something");
})
ws.on("message", function(msg){
  console.log(msg);
})
ws.on("close", function(){
  console.log("you are now disconnected");
  process.exit(1);
})

process.stdin.on("data", function(input){
  var input2 = input.toString().trim();
  ws.send(input2);
})
