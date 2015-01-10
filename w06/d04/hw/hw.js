//var x = process.argv[2];
// //have to require readline
// //use readline, input: process.stdin  output: process.stdout
var names = ["Janet", "Wilber", "Dominique", "Carli",
"Pinkie", "Pietro", "Devyn", "Heaven", "Oma", "Astrid"];

console.log("type yo fav letter")
process.stdin.on("data", function(answer){
  var x = answer.toString().trim();
  var name = names.filter(function(x){
    return name;
    // process.exit();
  });
  console.log(name);
});

// process.stdin.on("data", function(answer){
//   var ansr = answer.toString().trim();
//   if (ansr === "y"){
//     console.log(meaning());
//     console.log("god bless");
//     process.exit();
//   }
//   else {
//     console.log("bummer")
//     process.exit();
//   }
// });
//
//
// // //.filter method
// var numbers = [1,2,3,4,5,6]
// var evens = numbers.filter(function(n){
//   return n % 2 === 0; // with filter, must have explicit return
// });
// console.log(evens);
