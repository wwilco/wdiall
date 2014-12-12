var arrOne = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var diamonds = arrOne.join();
var hearts = arrOne.join();
var clubs = arrOne.join();
var spades = arrOne.join();
var fuDeck = diamonds.concat(hearts);
var fxDeck = clubs.concat(spades);
var fd = fuDeck.concat(fxDeck);
var fullDeck = fd.replace(',','');
  

console.log(fullDeck);
