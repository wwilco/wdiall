//part 1
var addNumbers = function(x, y){
  return x + y;
}
console.log(addNumbers(3, 5));
//could also do
var z = addNums(3,5);
console.log(addNums);

//part 2, merge arrays and add indexes to one another
//this just merges them
var addNumberArray = function(arr1, arr2){
  var newArray = [];
  for (var i=0; i<arr1.length; i++){
    newArray.push(arr1[i]);
  }
  for (var j=0; j<arr2.length; j++){
    newArray.push(arr2[j]);
  }
  return newArray;
}
console.log(addNumberArray([1,2,3], [4,5,6]));

//this is answer
var addNumberArray = function(arr1, arr2){
  var newArray = [];
  for (var i=0; i<arr1.length; i++){
    newArray.push(arr1[i]+arr2[i]);
  }
  return newArray;
}
console.log(addNumberArray([1,2,3], [4,5,6]));
