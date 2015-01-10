var http = require("http");
var msg = " ";
var server = http.createServer(function(request, response){
  var path = request.url;
  var headline = request.url.split("/");
  if (path === "/artists"){
    msg = ("<html><body><h1>Artists</h1><ul><a href='/artists/lcdsoundsystem'><li>LCD Soundsystem</li></a> <a href='/artists/nas'><li>NaS</li></a><a href='/artists/thestooges'><li>The Stooges</li></a></ul></body></html>")
  }
  else if (path === "/artists/lcdsoundsystem"){
    msg = ("<html><body><h1>LCD Soundsystem</h1><ul><a href='/artists/lcdsoundsystem/thisishappening'><li>This Is Happening</li></a><a href='/artists/lcdsoundsystem/soundofsilver'><li>Sound of Silver</li></a></ul></body></html>")
  }
  else if (path === "/artists/nas"){
    msg = ("<html><body><h1>NaS</h1><ul><li>Illmatic</li><li>Stillmatic</li></ul></body></html>")
  }
  else if (path === "/artists/thestooges"){
    msg = ("<html><body><h1>The Stooges</h1><ul><li>Funhouse</li><li>The Stooges</li></ul></body></html>")
  }
  else if (path === "/artists/lcdsoundsystem/thisishappening"){
    msg = ("<html><body><h1>This Is Happening, LCD Soundsystem</h1><ul><li>Dance Yrself Clean</li><li>Home</li></ul></body></html>")
  }
  else if (path === "/artists/lcdsoundsystem/soundofsilver"){
    msg = ("<html><body><h1>Sound Of Silver, LCD Soundsystem</h1><ul><li>Someone Great</li><li>Sound of Silver</li></ul></body></html>")
  }
  else if (path === "/artists/nas/illmatic"){
    msg = ("<html><body><h1>Illmatic</h1><ul><li>NY State of Mind</li><li>Halftime</li></ul></body></html>")
  }
  else if (path === "/artists/nas/stillmatic"){
    msg = ("<html><body><h1>Stillmatic</h1><ul><li>Queens Bridge</li><li>Stillmatic</li></ul></body></html>")
  }
  else if (path === "/artists/nas/thestooges"){
    msg = ("<html><body><h1>The Stooges</h1><ul><li>Be Your Dog</li><li>1969</li></ul></body></html>")
  }
  else if (path === "/artists/nas/funhouse"){
    msg = ("<html><body><h1>Funhouse</h1><ul><li>Funhouse</li><li>Needle Eye</li></ul></body></html>")
  }
  response.end(msg);
});
server.listen(2000);
