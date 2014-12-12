var ws = new WebSocket("ws://localhost:3000");
var body = document.querySelector("body");
var ul = document.createElement("ul");
body.appendChild(ul);

var input=document.querySelector("input");
var button=document.querySelector("#button");
body.appendChild(input);
body.appendChild(button);

var addText = function(msg){
  var newli = document.createElement("li");
  newli.innerHTML = msg;
  var firstli = ul.firstChild;
  ul.insertBefore(newli, firstli);
}

// ws.addEventListener("open", function(evt) {
//   addText('connected');
// });
//
// ws.addEventListener("message", function(evt) {
//   addText(evt.data);
// });
//

ws.addEventListener("open", function(evt) {
  addText("connected");
  console.log('connected');
  //document.write("connented............."); // if have document.write will overwirte the list.
});

ws.addEventListener("message", function(evt) {
  addText(evt.data)
  console.log(evt.data);
  //document.write(evt.data + "<br>");
});

button.addEventListener("click",function(){
  ws.send(input.value); //this is send text to the server(terminal).
  input.value=" ";

});


// //from cheatsheet
// var ws = new WebSocket("ws://localhost:3000");
// ws.addEventListener("open", function(evt) {
//   console.log('connected');
//   document.write("connected...<br>")
// });
// ws.addEventListener("message", function(evt) {
//   console.log(evt.data);
//   document.write(evt.data + "<br>");
// });
