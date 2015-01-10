//chalenge
var fs = require('fs');
var file1 = process.argv[2];
var file2 = process.argv[3];
var file3 = process.argv[4];

fs.readFile(file1, function(err, data) {
  if (err) {
    console.log("oh no!");
    console.log(err);
  }
  else {
    var file1 = data.toString();
  }
