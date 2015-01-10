//homework bonus 2
var http = require("http");
var server = http.createServer(function(request,response){
  var path = request.url;
  var headline = path.split("/")[2];
  var headline2 = path.split("/")[3];
  var msg = "";
  var str = "";
  var artists = ["Trey Songz", "J. Cole", "Newboyz"];
  var tsAlbums = ["Trey Day", "Ready"];
  var jcAlbums = ["Cole World: The Sideline Story", "Born Sinner"];
  var nbAlbums = ["Skinny Jeans and a Mic", "Too Cool to Care"];
  var albumTreyDay = ["Cant help but wait", "Wonder Woman", "Missin you"];
  var albumReady = ["Say Ahh", "Be Where You Are", "LOL :-)"];
  var albumColeWorld = ["Dollar and a Dream III", "No Body's Perfect", "Work Out"];
  var albumBorn = ["Power Trip", "Forbidden Fruit", "She Knows"];
  var albumSkinny = ["Tie me Down", "You're a Jerk", "Way 2 Many Chicks"];
  var albumToo = ["Backseat", "I Don't Care", "Active Kings"];
  var firstHalf = "<html><body><ul>";
  var secondHalf = "</ul></body></html>";
  var create = function(ary){
    ary.forEach(function(indx){
      str+="<li>" + indx + "</li>";
      console.log(str);
      //return str;
    });
    return str;
  }
  if (path === "/artists"){
    var capture = create(artists);
    console.log(artists);
    //console.log(send);
    msg =  firstHalf + capture + secondHalf;
    console.log(msg);
  }
  else if (path === "/artists/" + headline){
    if(headline === "trey"){
      var capture = create(tsAlbums);
      msg = firstHalf + capture + secondHalf;
    }
    else if (headline === "jcole"){
      var capture = create(jcAlbums);
      msg = firstHalf + capture + secondHalf;
    }
    else if (headline === "newboyz"){
      var capture = create(nbAlbums);
      msg = firstHalf + capture + secondHalf;
    }
  }
  else if (path === "/artists/" + headline + "/" + headline2){
    if((headline === "trey") && (headline2 === "treyday")){
      var capture = create(albumTreyDay);
      msg = firstHalf + capture + secondHalf;
    }
    else if ((headline === "trey") && (headline2 === "ready")){
      var capture = create(albumReady);
      msg = firstHalf + capture + secondHalf;
    }
    else if ((headline === "jcole") && (headline2 === "coleworld")){
      var capture = create(albumColeWord);
      msg = firstHalf + capture + secondHalf;
    }
    else if ((headline === "jcole") && (headline2 === "born")){
      var capture = create(albumBorn);
      msg = firstHalf + capture + secondHalf;
    }
    else if ((headline === "newboyz") && (headline2 === "skinny")){
      var capture = create(albumSkinny);
      msg = firstHalf + capture + secondHalf;
    }
    else if ((headline === "newboyz") && (headline2 === "too")){
      var capture = create(albumToo);
      msg = firstHalf + capture + secondHalf;
    }
  }
  response.end(msg);
});
server.listen(2000);
