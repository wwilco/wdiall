var everyother = function(x, arr){
  var newarr = [];
  for (var i = 0; i < arr.length; i++){
    if (i % 2 === 0){
      newarr.push(arr[i]+x);
    }
    else {
      newarr.push(arr[i]);
    }
  }
  return(newarr);
}

var x = 8;
var arr = [2, 4, 5, 8, 10];
console.log(everyother(x, arr))

//using forEach that adds and multiplies.
//forEach does not give you index, it gives you the element itself

var arr = [1,3,8,10];
var EveryO = function(nums, x){
  var counter = 0;
  var newArr = [];
  nums.forEach(function(y)){
    if (counter % 2 === 0){
      var i = y + x;
      newArr.push(i);
      counter++;
    }
    else {
      var k = y * x;
      newArr.push(k);
      counter++;
    }
  });
  return newArr;
}
