var express = require('express')
var app = express()

app.get('/:width/:height', function (req, res) {
  var width2 = req.params.width;
  var height2 = req.params.height;
  res.send("<ul>http://placekitten.com/"+ width2 +"/" + height2 + "</ul>")
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
