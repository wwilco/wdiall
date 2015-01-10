//chalenge
var fs = require('fs');
var file1 = process.argv[2];
var file2 = process.argv[3];
//var file3 = process.argv[4];
var newArr = [ ];


fs.readFile(file1, function(err, data) {
  var text = data.toString();
  var newF1 = text.split("\n");
  //console.log(newF1);

  fs.readFile(file2, function(err, data){
    var text = data.toString();
    var newF2 = text.split("\n");
    //console.log(newF2);

  for (var i = 0; i < newF1.length; i++){
    if(i < newF1.length){
      newArr.push(newF1[i]);
    }
    if(i < newF2.length){
      newArr.push(newF2[i]);
    }
    console.log(newArr);
  }
  })
})

//
//   if (err) {
//     console.log("oh no!");
//     console.log(err);
//   }
//   else {
//     var file1 = data.toString();
//     var join1 = file1.split("\n");
//     console.log(join1);
//   }
//   fs.readFile(file2, function(err, data) {
//     if (err) {
//       console.log("oh no!");
//       console.log(err);
//     }
//     else {
//       var file2 = data.toString();
//       var join2 = file2.split("\n");
//       console.log(join2);
//     }
//
//     f
//     fs.writeFile(file3, join1, join2, function(err){
//       if (err){
//         console.log("oh no!");
//         console.log(err);
//       }
//       else {
//         for (var i = 0; i < join1.length; i++){
//           var file3 = newArr.push(join1[i]);
//           console.log(file3);
//         }
//         for (i = 0; i < join2.length; i++){
//           var file3 = newArr.push(join2[i]);
//           console.log(file3);
//         }
//
//
//       }
//
//     })//writeFile
//
//   })//readFile1
// })//readfile2
