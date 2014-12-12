var x = process.argv[2];
var y = x.length;
var xreverse = '';

for (i=0; i < x.length; i++) {
  var n = x.charAt(y - 1);
  y--;
  xreverse += n;

}
console.log(xreverse);


// var x = process.argv[2];
// var y = x.length;
// var xreverse = '';
//
// for (i=0; i < x.length; i++) {
//   var n = x.charAt(y - 1);
//   y--;
//   xreverse += n;
//
// }
// console.log(xreverse);
