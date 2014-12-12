var x = process.argv[2];
var y = process.argv[3];
var z = process.argv[4];

var x = parseInt(x)
var y = parseInt(y)
var z = parseInt(z)

if ((x > y) && (y > z)) {
  console.log(x)
}

else if ((x < y) && (y > z)) {
  console.log(y)
}

else {
  console.log(z)
}
