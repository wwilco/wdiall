var fs = require('fs'); //comes with node

fs.readFile("somefile.txt", function(err, data) { //the text, the error function, then the data of the text
  if (err) { //must have the error function. if there is no err, it should log "Null"
    console.log("oh no!");
    console.log(err);
  } else {
    var text = data.toString();
    console.log(text);
  }
})
