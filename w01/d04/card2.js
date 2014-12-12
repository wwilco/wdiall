var arrOne = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var diamonds = arrOne.join();
var hearts = arrOne.join();
var clubs = arrOne.join();
var spades = arrOne.join();
var fuDeck = diamonds.concat(hearts);
var fxDeck = clubs.concat(spades);
//var fd = fuDeck.concat(fxDeck);
//var fullDeck = fd.split();
// ^^ an attempt to remove the "quotes" from from fullDeck array
var fullDeck = fuDeck.concat(fxDeck);


for (var i = 0; i < fullDeck.length; i++){
  var cardA = i; //can maybe replace x and y with "i" ???
  var cardB = i; //put in quotes to
  cardA = fullDeck[Math.floor(Math.random()*(fullDeck.length)+1)];
  cardB = fullDeck[Math.floor(Math.random()*(fullDeck.length)+1)];

  if (cardA === "J" || cardA === "K" || cardA === "Q") {
    cardA = 10;
  };

  //unable to use similar if else statement for cardB

  cardA = parseInt(cardA)
  cardB = parseInt(cardB)

  console.log(cardA)
  console.log(cardB)
  console.log(cardA + cardB)
}
