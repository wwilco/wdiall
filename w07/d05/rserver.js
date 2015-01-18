var express = require('express');
var request = require('request');
var ejs = require('ejs');

var app = express();

app.get('/', function(req, res){
  var url = "http://api.randomuser.me/";
  request(url, function(error, response, body){
    if (!error && response.statusCode == 200) { //200 is all good. unlike 404: fucked
      data = JSON.parse(body)
      res.send(data);
      console.log(data);
    }
  });
});

app.listen(3000);

// request(url, function (error, response, body) {
//   if (!error && response.statusCode == 200) { //200 is all good. unlike 404: fucked
//     data = JSON.parse(body)
//     console.log(data);
//   }
// })
