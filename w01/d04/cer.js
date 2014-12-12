var lista = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"];
var listb = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];
var num = process.argv[2];

for (var i = 0; i < num; i++){
  var la = lista[(Math.floor(lista.length * Math.random()))]
  var lb = listb[(Math.floor(listb.length * Math.random()))]
  console.log(la + " " + lb);
}
