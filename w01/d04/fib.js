//var x = process.argv[2];
//x = parseInt(x)
var fib = [0, 1];


for (var i = 2; i < 100; i++) {
  fib.push((i-1)+(i-2));
}

console.log(fib);
