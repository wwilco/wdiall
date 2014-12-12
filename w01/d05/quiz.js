//write for loop that prints every other character in a string
// var string = "qwertyuiopasdfghjklzxcvbnm"
//
// one answer
// for (var i = 0; i < string.length; i++) {
//   if (i % 10 === 0) {
//     console.log(string[i]);
//   };
// };

// another answer...
var string = "qwertyuiopasdfghjklzxcvbnm"

for (var i = 0; i < string.length; i = i+10) {
    console.log(string[i])
}
