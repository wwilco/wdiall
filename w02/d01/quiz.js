// var x = "";
// var y = "";
//
// function nameNum(x, y) {
//   function bouncer(y)
//   console.log(x + " is " + y + " years old." );
// }
//
// nameNum("Crawford", 25);
//
// var age = "";
//
// function bouncer() {
//   if (age > 20) {
//     console.log("Come in")
//   }
//   else {
//     console.log("Psh nice try")
//   }
// }
// bouncer(2);
// //
// //
// // function metaBouncer() {
// //   if (y > 20) {
// //     return bouncer(x, y);
// //   }
// //   else{
// //     return bouncer(x, y);
// //   }
// // }
// // metaBouncer("Will", 26);

//variables defined within a function cannot be changed outside of that function

var hello = function(){
  console.log("hello"); //makes more sense to use "return" ex: return("hello");
} // will not run function. it only defines it! it has not been called

  console.log(hello()); // returns hello, undefined
