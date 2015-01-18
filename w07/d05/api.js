var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser'); //something you need to handle post requests

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var items = []

app.get('/', function(req, res) {
  // items will be empty the first time
  // this method is called
  res.render('rando.ejs', { items: items }); //the second "items" must be defined within scope. like sending locals, but you dont use the local var. just send it the hash
});

app.post('/add', function(req, res) {
  var stuff = {
    name1 = req.params.name1,
    name2 = req.params.name2,
    email = req.params.email,
  };
  // note that we're using req.body.item
  // rather than req.params.item or
  // req.query.item
  items.push(req.body.stuff);
  res.render('rando.ejs', { items: items });
})

app.listen(3000);

console.log('listening on port 3000!');
