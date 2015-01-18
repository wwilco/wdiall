var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser'); //something you need to handle post requests

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var items = []

app.get('/', function(req, res) {
  // items will be empty the first time
  // this method is called
  res.render('todo.ejs', { items: items }); //the second "items" must be defined within scope. like sending locals, but you dont use the local var. just send it the hash
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
  res.render('todo.ejs', { items: items });
})

app.listen(3000);

console.log('listening on port 3000!');

// //notes on this assignment
// SRP, single responsibility principle
// use ejs to go through a file and pull the contents of that file by sending it from the other file then sending it back to the client
// express allows you to do this in one line - monolith
// express attempts to become more modular
// req.params.name - when plugging into url name. url finsihes /add/will
// req.query.name - can use when app.get('urlname'). url finsihes /add/?=name=will&age=26
// req.body.name - used for app.post. url finsihes /add
// storing memory on your server
