// var makeArr = function(array){
//   var new = [];
//   array.forEach(makeArr(elem){
//     new.push(elem);
//   };
//   return new;
// };
//
// var array = [1,3,4];

// var doublePrintRet = function(oldArr){
//   oldArr.forEach(function(newArr){
//     newArr.push(oldArr)
//   })
//   var newArr = oldArr + oldArr;
//   return newArr;
// }


// doubleArr = function(array){
//   array.forEach(doublePrint);
//   //  console.log;
// }
// doubleArr([4,2,3]);

var doublePrintRet = function(array){
  var newArr = [];
  array.forEach(function(elem){
    newArr.push(elem * 2)
  });
  return newArr;
};
console.log(doublePrintRet([2,5]))
