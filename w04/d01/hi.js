// process.stdin.on("data", function(input){
//   var newInput = input.toString().trim().toUpperCase();
//   if (newInput === "HELLO") {
//     console.log("hi!");
//   }
//   else {
//     console.log("right right");
//   }
// });

// //Jason's whack ass code
// console.log('Welcome to Cat Facts');
// console.log('Cats start dreaming when they are one week old');
// console.log("Cats came to America in the 1750's as pest controllers");
// console.log('A group of kittens is called a "kindle"');
// console.log('Would you like to hear more cat facts? Y / N');
//
// process.stdin.on('data', function(x){
//   var newdata = x.toString().trim().toLowerCase();
//
//   if (newdata === 'n'){
//     process.exit();
//   } else if (newdata === 'y'){
//     console.log('Cats have pregnancies that are nine weeks long');
//   }
//
// })

var hello = "press enter to continue";
console.log(hello);

process.stdin.on("data", function(hello){
  var newhello = hello.toString().trim();
  if (newhello === "exit"){
    process.exit(0);
  }
  else {
    console.log("press enter to continue");
  }
});
