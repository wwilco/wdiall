var x = process.argv[2];
var y = process.argv[3];

var xl = x.length
var yl = y.length

if (xl > yl){
  console.log(x.slice(0, -(xl/2)))
}
else{
  console.log(y.slice(0, -(yl/2)))
}

console.log(x.slice(0, -(xl/2)))
