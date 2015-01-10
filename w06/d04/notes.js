// var numbers = [1,2,3,4,5]
// numbers.forEach(function(num){
//   console.log(num)
// });

// var arr = ["Mario", "Luigi", "Peach", "Toad"]
// arr.forEach(function(names){
//   var nam = names.toUpperCase()
//   console.log(nam)
// });

// //.filter method
// var numbers = [1,2,3,4,5,6]
// var evens = numbers.filter(function(n){
//   return n % 2 === 0; // with filter, must have explicit return
// });
// console.log(evens);

// characters = ["Mario", "Luigi", "Peach",
// "Toad", "Sonic", "Tails",
// "Robotnick", "Crash Bandicoot", "Nathan Drake",
// "Solid Snake"]
// var c_characters = characters.filter(functon(char){
//   return char.toUpperCase().indexOf("C") > -1;
// });
// console.log(c_characters)

// //.map method
var numbers = [1,2,3,4,5]
var multBy3 = numbers.map(function(num){
  return num * 3;
});

//all caps
characters = ["Mario", "Luigi", "Peach",
"Toad", "Sonic", "Tails",
"Robotnick", "Crash Bandicoot", "Nathan Drake",
"Solid Snake"]
var charC = characters.map(function(char){
  return char.toUpperCase()
});
console.log(charC)
