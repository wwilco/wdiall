// var http = require("http");
// var msg = " ";
// var server = http.createServer(function(request, response){
//   var artists = ["2pac", "Caribou", "Clash"]
//   var arrUl = function(artist){
//     artist.forEach(function(){
//       '"<li>' + artist + '</li>"'
//     })
//   msg = "<html><body><ul><li>"+arrUl(artists)+"</li></ul></body></html>";
//   response.end(msg);
// }})
// server.listen(2000);

// //Al's idea
// artist.forEach(function(artist){
//   var li = document.createElement("li");
//   li.innerHTML = artist;
//   msg = ("<html><body><ul><li> </li></ul></body></html>")
// })



var http = require("http");
var msg = " ";
var artli = " ";
var artists = ["2pac", "Caribou", "Clash"];
var server = http.createServer(function(request, response){
  var arrUl = function(artist){
    artists.forEach(function(artist){
      artli += artist;
       var li = document.createElement("li");
       //li.innerHTML = artist;
       //artist.appendChild(li);
      msg = ("<html><body><ul><li>" + artli + "</li></ul></body></html>")
    })
  }
  arrUl(artists);
  response.end(msg);
})
server.listen(2000);



// var artist = artists.split(",");
// var arrUl = function(artist,)
//var ul = document.createElement("ul");
