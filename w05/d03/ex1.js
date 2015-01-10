//tiffany and shoshanah's solution
var fs = require('fs');

fs.readFile("ex.txt", function(err, data) {
  if (err) {
    console.log("oh no!");
    console.log(err);
  } else {
    var text = data.toString();
    var arr = text.split("\n");
    console.log(arr.length);
  }
})


// //my method
// var fs = require('fs');
// counter = 0;
// fs.readFile("ex.txt", function(err, data) {
//   if (err) {
//     console.log("oh no!");
//     console.log(err);
//   }
//   else {
//     var text = data.toString();
//     var splitbreak = text.split("\n");
//     console.log(splitbreak);
//     splitbreak.forEach(function(str){
//       if (str !== " "){
//         counter++
//       }
//     })
//     console.log(counter);
//   }
// })
