var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  ws.on("message", function(msg){
    console.log(msg);
    ws.send("i know you are " + msg + " but what am i");
  })
  // button.addEventListener("click",function(){
  //   ws.send(input.value); //this is send text to the server(terminal).
  //   input.value=" "; // it gives you new empty string.
  // })
});


// var button=document.querySelector("#button");
// ws.addEventListener("message", function(evt) {
//   addText(evt.data)
//   //console.log(evt.data);
//   //document.write(evt.data + "<br>");
// });
