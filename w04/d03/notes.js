var inc = function(num){
  num = num + 1;//same as num++
}
var x = 5;
inc(x);
console.log(x);

    //compare these two
var x = 5;      var x = [1,2];
var y = x;      var y = x;
y++;            y.push(3);
//x is 5        //x is [1,2,3]
