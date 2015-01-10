var ws = new WebSocket("ws://localhost:3000");

ws.addEventListener("open", function(evt) {
  var button=document.querySelector("#button");
  var input=document.querySelector("#box");

  // ws.addEventListener("message", function(evt) {
  //   addText(evt.data)
  //   //console.log(evt.data);
  //   //document.write(evt.data + "<br>");
  button.addEventListener("click",function(){
    ws.send(input.value); //this is send text to the server(terminal).
    input.value=" "; // it gives you new empty string.
  });
});
