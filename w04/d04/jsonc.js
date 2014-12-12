//node jsonc.js
//client side
var client = require('ws');
var ws = new client("ws://localhost:3000");
ws.on("open", function(){
  console.log("what is your name?");
  })
ws.on("message", function(msg){
  ws.send(msg);
})
process.stdin.on("data", function(input){
  var hash = {name: "will"}
  hash["words"] = input.toString().trim();
  var stuff = JSON.stringify(hash);
  ws.send(stuff);
})
