var x = process.argv[2];

function xreverse(x) {
  return (x.split().reverse().join(''));
  console.log(x);
}

xreverse(x);

//
// var x = process.argv[2];
// var emptystring = '';
//
// for (i=0; i < x.length; i++) {
//
//   if (x.charAt(i).match(/[aeiou]/ig)) {
//
//     emptystring += (x[i]);
//
//   } else {
//     console.log(x[i]);
//   }
// }
//
// console.log(emptystring);
