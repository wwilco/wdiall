var stooges = ["Larry", "Curly", "Moe"];
//
// var mergeString = function(arr){
//   var str = "";
//   for (var i = 0; i<arr.length; i++){
//     str += "Hey there, " + arr[i] + ".";
//   }
//   return str
// }

// 2. function ```mergeString```
// - takes an array of names
// - returns a string that is some greeting message containing all the names

// // stooge now equals "Hey there, Larry. Hey there, Curly. Hey there, Moe."
// ```

var mergeString = function(arr) {
    var str = "";
    for(var i=0; i<arr.length; i++) {
      str += "Hey there, "+arr[i]+". "
    }
    return str;
  }

  mergeString()
  var stoogeString = mergeString(stooges);
  console.log(stoogeString)
