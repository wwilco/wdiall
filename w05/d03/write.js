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
    fs.readFile(file2, function(err, data){
      if (err) {
        console.log("oh no!");
        console.log(err);
      }
      else {
        fs.writeFile(file1, file2, file3, function(err){
          if (err){
            console.log("oh no!");
            console.log(err)
          }
          else {
            console.log(file3)
          }
        })
      }
    })
  }
  console.log("done it!")
})


// var text = data.toString();
// var arr = text.split(" ");
// console.log(arr.length);
//
//     fs.writeFile(file, text, function (err) {
//       if (err){
//
//         console.log(err)
//       } else {
//         console.log(text)
//       }
//     })
//     console.log("yesss!");
//   }
// })


// //read then write ex
// var fs = require('fs');
// var file = process.argv[2];
// var text = process.argv[3];
//
// fs.readFile(file, function(err, data) {
//   if (err) {
//     console.log("oh no!");
//     console.log(err);
//   } else {
//     fs.writeFile(file, text, function (err) {
//       if (err){
//         console.log(err)
//       } else {
//         console.log(text)
//       }
//     })
//     console.log("yesss!");
//   }
// })



// //cmnd line message
// var fs = require('fs');
// var file = process.argv[2];
// var text = process.argv[3];
//
// fs.writeFile(file, text, function(err, data){
//   if (err) {
//     console.log("oh no!");
//     console.log(err);
//   } else {
//     console.log("did it!");
//   }
// })

//
//
// var content = "hello\nworld\nyay";
// var fs = require('fs');
//
// fs.writeFile("ex.txt", content, function(err){
//   console.log(err)
// })
//
// fs.writeFile("ex.txt", content, function(err){}) //no-op error
