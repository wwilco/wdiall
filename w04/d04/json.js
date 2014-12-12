// var obj = ["jack", "jill"];
// JSON.stringify(obj);//takes the array and turns it into a string
// JSON.parse(obj);//takes json and turns it into its original array
//
// var awsum = {artist: "gomez", song: "notice"}
// console.log(awesome.artist) //prints "gomez"
// JSON.stringify(awesome) // {/ /artist/ /:/ /"/gomez/"/ /,/ /song/:/ /"/notice/"/}/


// name: "Will"
// words: "woah"
//server side
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  ws.on("message", function(msg){
    var hash = JSON.parse(msg); //making assumption that there are only 2 key-value pairs
    console.log(hash.name + ": " + hash.words)
  })
});
