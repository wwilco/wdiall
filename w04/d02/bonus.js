// var message = "Enter three parameters";
// console.log(message);
// process.stdin.on("data", function(input) {
//   var input = input.toString();
//   var arr = input.split(" ");
//   if (arr[0] === "add"){
//     var answer = parseInt(arr[1]) + parseInt(arr[2]);
//     console.log(arr[1] + " plus " + arr[2] + " which is " + answer);
//   }
//   else if (arr[0] === "sub"){
//     var answer = parseInt(arr[1]) - parseInt(arr[2]);
//     console.log(arr[1] + " minus " + arr[2] + " which is " + answer);
//   }
// });

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  console.log("connected! yay!");
  ws.send("Enter whatever");
  ws.on("message", function(input){
    //var input = input.toString();
    var arr = input.split(" ");
    var sum = 0;
    if (arr[0] === "add"){
      for (var i = 1; i < arr.length; i++){
        sum += parseInt(arr[i]);
        var sum2 = sum.toString();
      }
      ws.send(sum2);
    }
    else if (arr[0] === "sub"){
      sum = parseInt(arr[1]) - parseInt(arr[(2)]);
      for(var i = 3; i < arr.length; i++){
      sum -= parseInt(arr[i]);
      var sum2 = sum.toString();
      }
    ws.send(sum2);
    }
  });
});
