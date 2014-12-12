var arr1 = ["one", "two", "three", "four"];
var arr2 = ["five", "six", "seven", "eight"];

var mergeArrays = function(arr1, arr2) {
  var merged = [];

  //first merge in the first array
  for (var i=0; i<arr1.length; i++){
    merged.push(arr1[i]);
  }
  //now merge in the second
  for (var j=0; j<arr2.length; j++){
    merged.push(arr2[j]);
  }

  return merged;
}

console.log(mergeArrays[arr1, arr2])


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
