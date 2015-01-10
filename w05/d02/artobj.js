var artistobj = {
  nas: ["illmatic", "stillmatic", "gods son"],
  caribou: ["our love", "swim", "andorra"],
  tycho: ["awake", "dive", "past"]
}
var nasobj = {
  illmatic: ["one", "two", "three"],
  stillmatic: ["one", "two", "three"],
  godsson: ["one", "two", "three"]
}
var caribouobj = {
  ourlove: ["one", "two", "three"],
  swim: ["one", "two", "three"],
  andorra: ["one", "two", "three"]
}
var tychoobj = {
  awake: ["one", "two", "three"],
  dive: ["one", "two", "three"],
  past: ["one", "two", "three"]
}
var arrUl = function(artist)



var http = require("http");
var msg = " ";
var server = http.createServer(function(request, response){
  var arrUl = function(artist){
    artists.forEach(function(artist){
      msg = ("<html><body><ul><li> artist </li></ul></body></html>")
    })
  }
  arrUl();
  response.end();
})

server.listen(2000);
