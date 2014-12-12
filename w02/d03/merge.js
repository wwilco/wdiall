var mergeArrays = function(a,a2){//try not changing paramters. better to construct new array or new paramter
  var afinal = [];
  for (var i = 0; i < a.length; i++){
    var element = a[i];
    afinal.push(element);
  }
  for (var j = 0; j < a2.length; j++){
    afinal.push(a2[j]);
  }
  return afinal;
}

var arr = [1,2,3];
var arr2 = [4,5,6];
var arr3 = mergeArrays(arr, arr2);
console.log(arr3)


var a1 = [1,2,3,4,9];
var a2 = [4,5];
var a3 = mergeArr(a1, a2)

// 3. function ```mergeArray``` that combine two arrays
// - takes two arrays
// - returns the combination of the two arrays
// - **Bonus** combine the arrays in alternating syntax, like so:
//
// ```javascript
// var fun = ["pretzels", "cheez-its", "m&ms"];
// var work = ["raisins", "dried apricots", "nuts"];
// var trailMix = mergeArray(fun, work);
// // trailMix now equals ["pretzels","raisins", "cheez-its", "dried apricots", "m&ms", "nuts"];
// ```
