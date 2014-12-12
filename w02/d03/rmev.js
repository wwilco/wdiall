var removeEvens = function(arr) {
  var odds = [];
  for(var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 1){
      odds.push(arr[i]);
    }
  }
  return odds
}

var a = [3,4,5,6,20,11];
var b = removeEvens(a);
console.log(b)


// 1. function ```removeEvens```
// - takes an array of numbers
// - returns a new array of numbers that has the even numbers removed
//
// ```javascript
// var a = [3,4,5,6,20,11];
// var b = removeEvens(a);
// // b now equals [3,5,11]
