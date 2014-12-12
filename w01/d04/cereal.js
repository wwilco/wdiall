var lista = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"];
var listb = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];
var num = process.argv[2];

  for (var i = 0; i < num; i++){

var worda = lista[(Math.floor(Math.random())];
var wordb = listb[(Math.floor(Math.random())];

console.log(worda+ " " +wordb)
}

//
// var fib = [0];
//
//
// for (var i = 1; i < x; i++) {
//   fib.push((i-1)+(i-2));
// }
//
// console.log(fib);
