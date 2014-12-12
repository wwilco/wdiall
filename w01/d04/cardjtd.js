var suits = ["hearts","diamonds","clubs","spades"];
var num = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
var deck = [];



for (i = 0; i < num.length; i++) {
  var z = 0;

  for (z = 0; z < suits.length; z++) {
    var x = num[i] + "-" + suits[z];
    deck.push(x);
  }
}
console.log(deck);

var cardRandomA = deck[Math.floor(Math.random()*(deck.length-1)+1)];
var cardRandomB = deck[Math.floor(Math.random()*(deck.length-1)+1)];



//random card A
if (cardRandomA.charAt(0) === "J" || cardRandomA.charAt(0) === "K" || cardRandomA.charAt(0) === "Q") {
  cardValueA = parseInt(10);
  console.log("10 "+ cardRandomA);
}
else if (cardRandomA.charAt(0) === "A"){
  cardValueA = parseInt(1);
  console.log("1 "+ cardRandomA);
}
else {
  cardValueA = parseInt(cardRandomA.charAt(0));
  console.log(cardRandomA);
}


//random Card B
if


if (cardRandomB.charAt(0) === "J" || cardRandomB.charAt(0) === "K" || cardRandomB.charAt(0) === "Q") {
  cardValueB = parseInt(10);
  console.log("10 "+ cardRandomA);
}
else if (cardRandomB.charAt(0) === "A"){
  cardValueB = parseInt(1);
  console.log("1 "+ cardRandomB);
}
else {
  cardValueB = parseInt(cardRandomB.charAt(0));
  console.log(cardRandomB);
}

var matchValue = (cardValueA + cardValueB);
console.log(matchValue);
