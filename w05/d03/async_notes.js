var fs = require('fs');

var x = 3;
var d = " ";
fs.readFile("f.txt", function(e, data){
  fs.writeFile('s.txt', data, function(e){
    console.log("done");
  })
})

//above is the better solution
// fs.readFile("f.txt", function(err, data){
//   d = data;//whole solution might not work. depends on if d works, and that all depends on when it is read.
// })
// fs.writeFile("s.txt", d, function(err){})

var doneReading = function(e, data){
  fs.writeFile('f.txt', data, doneWriting); //goes second
}

var doneWriting = function(e){
  console.log("done"); //goes third
}
fs.readFile('f.txt', doneReading); //goes first
//this code is the same as the highlited code above (up to blocks of code)
//async works in a weird way... look at what happens first, second, third
