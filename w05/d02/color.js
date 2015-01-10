var http = require("http");
var favcolors = {sean: "purple", sarah: "white", lisa: "black", john: "green", david: "turquoise"}
var server = http.createServer(function(request, response){
  response.end("Hero");
})
server.listen(2000);
