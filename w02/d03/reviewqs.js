
// PART 1

// For each exercise, write a function that satisfies its requirements.*
//
// 1. Positive Negative
//
// - Given 2 integers, return true if one is negative and one is positive.
//
// ```javascript
// posNeg(1, -1)
// // true
// posNeg(-1, 1)
// // true
// posNeg(-4, -5)
// // false
// ```

function posNeg(x, y) {
  if ((x < 0) && (y < 0)) {
    console.log(false);
  }
  else if ((x > 0) && (y > 0)) {
    console.log(false);
  }
  else {
    console.log(true);
  }
}

posNeg(-2,-1);

// - Enhancement: Given 2 integers, return true if one is negative and one is positive **except** if the third argument is true, then return true only if both are negative.
//
// ```javascript
// posNeg(1, -1, false)
// // true
// posNeg(1, 1, false)
// // false
// posNeg(1, 1, true)
// // false
// posNeg(-3, -1, true)
// //true
// ```
//
// 2. Count xx
// - Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".
//
// ```javascript
// count_xx("abcxx")
// // 1
// count_xx("xxx")
// // 2
// count_xx("xxxx")
// // 3
// ```
//
// 3. Sum 10
// - Given 2 integers, return true if one if them is 10 or if their sum is 10.
//
// ```javascript
// makes10(9, 10)
// // true
// makes10(9, 9)
// // false
// makes10(1, 9)
// // true

makeTen = function(x, y){
  if(x+y===10){
    console.log(true);
  }
  else if ((x===10) || (y===10)){
    console.log(true);
  }
  else{
    console.log(false);
  }
}

makeTen(9, 6);

// 4. String Without End
// - Given a string, return a version without the first and last char, so "Hello" yields "ell". The given string length should be at least 2 characters long.
//
// ```javascript
// withoutEnd('Hello')
// // 'ell'
// withoutEnd('java')
// // 'av'
// withoutEnd('coding')
// // 'odin'
// ```

withoutEnd = function(string){
  var newstring = string.substring(1, string.length-1);
  console.log(newstring)
}
withoutEnd("hello");
withoutEnd("java");
withoutEnd("coding");


// 5. Make Tags
//
// - The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes `<i>` and `</i>` which surround the word "Yay" -> `<i>Yay</i>`.
// - Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
//
// ```javascript
// makeTags('i', 'Yay')
// // '<i>Yay</i>'
// makeTags('i', 'Hello')
// // '<i>Hello</i>'
// makeTags('cite', 'Yay')
// // '<cite>Yay</cite>'
// ```

makeTags = function(x, y) {
  console.log("<" + x + ">" + y + "</" + x + ">");
}
makeTags("i", "yay")
makeTags("i", "hello")
makeTags("cite", "yay")

// 7. Inbetween
// - Write a command line program **not a function** that takes 2 numbers and prints every number in between
//
// ```bash
// $ inbetween 2 6
// # 3
// # 4
// # 5
// ```

var num1 = process.argv[2];
var num2 = process.argv[3];

for (i = num1; i < num2; i++){
  console.log(i)
}


// 8. Filtering Long Words
// - given an array of words and an integer i return the array of words that are longer than i.
//
// ```javascript
// filterLongWords(3, ["hello", "hi", "hey", "hola", "aloha"])
// // ["hello", "hola", "aloha"]
// ```
//
// 9. **Bonus** Initials
// - Given a person's name, return their initials.
// - It should work both with and without a middle name being provided.
//
// ```javascript
// initials('Neel Jayendra Patel');
// // NJP
// ```
//
// 10. Write a command line app **(not a function)** that returns a name randomly chosen from the cast of friends
//
// ```bash
// $ cast
// # Jennifer Anniston
// $ cast
// # Mathew Perry
// ```
//
// 11. Namester
//
// *Write code that performs the following actions. Refer to the firstnamelist array given below.*
//
// - Retrieve "Bumblebee" from the firstname list
// - Add "Peter" to the firstnamelist
// - Remove "Muffinmitts" from the firstnamelist
// - Find out the index of "Scratchnsniff" in lastnamelist
// - Combine 1 randomly selected name from `firstnamelist` and 1 randomly selected name from `lastnamelist` to form a name.
//
// ```javascript
// firstnamelist = ["Bumblebee", "Banderscoop", "Broccoli", "Rinkydink", "Bombadil", "Boilerduck", "Bandicoot", "Fragglerock", "Muffinmitts", "Crumplesack", "Congleton", "Blubberbrains", "Buffalo", "Benadryl", "Butterfree", "Burberry", "Whippersnatch", "Buttermilk", "Beezlebub", "Budapest", "Boilerdang", "Blubberwhale", "Bumberstump", "Bulbasaur", "Cogglesnatch", "Liverswort", "Bodybuild", "Johnnycash", "Burgerking", "Bonaparte", "Bunsenburner", "Billiardball", "Baseballmitt", "Blubberbett", "Baseballbat", "Rumblesack", "Barister", "Danglerack", "Rinkydink", "Bombadil", "Honkytonk", "Billyray", "Bumbleshack", "Snorkeldink", "Anglerfish", "Beetlejuice", "Bedlington", "Bandicoot", "Boobytrap", "Bentobox", "Pallettown", "Wimbledon", "Hairyhog", "Buttercup", "Blasphemy", "Syphilis", "Snorkeldink", "Brandenburg", "Barbituate", "Snozzlebert", "Tiddleywomp", "Bouillabaisse", "Wellington", "Benetton", "Bendandsnap", "Timothy", "Brewery", "Bentobox", "Brandybuck"];
//
// lastnamelist = ["Coddleswort", "Curdlesnoot", "Calldispatch", "Humperdinck", "Rivendell", "Cuttlefish", "Lingerie", "Vegemite", "Ampersand", "Cumberbund", "Candycrush", "Clombyclomp", "Cragglethatch", "Nottinghill", "Cabbagepatch", "Camouflage","Creamsicle", "Curdlemilk", "Upperclass", "Frumblesnatch", "Crumplehorn", "Talisman", "Candlestick", "Chesterfield", "Bumbersplat", "Scratchnsniff", "Snugglesnatch", "Charizard", "Carrotstick", "Cumbertoot", "Crackerknack", "Crucifix", "Cuckatoo", "Crackletot", "Collywog", "Gigglesnort", "Capncrunch", "Covergirl", "Cumbersnatch", "Countryside","Coggleswort", "Splishnsplash", "Copperwire", "Animorph", "Curdledmilk", "Cheddarcheese", "Cottagecheese", "Crumplehorn", "Snickersbar", "Banglesnatch", "Stinkyrash", "Camelhump", "Chickenbroth", "Concubine", "Candygram", "Moldyspore", "Chuckecheese", "Cankersore", "Crimpysnitch", "Wafflesmack", "Chowderpants", "Toodlesnoot", "Clavichord", "Cuckooclock", "Oxfordshire", "Cumbersome", "Chickenstrips", "Battleship", "Commonwealth", "Cunningsnatch", "Custardbath", "Kryptonite"];
// ```


// PART 2
//
// ## Review
// 1. function ```removeEvens```
// - takes an array of numbers
// - returns a new array of numbers that has the even numbers removed
//
// ```javascript
// var a = [3,4,5,6,20,11];
// var b = removeEvens(a);
// // b now equals [3,5,11]
// ```
// 2. function ```mergeString```
// - takes an array of names
// - returns a string that is some greeting message containing all the names
//
// ```javascript
// var stooges = ["Larry", "Curly", "Moe"];
// var stoogeString = mergeString(stooges);
// // stooge now equals "Hey there, Larry. Hey there, Curly. Hey there, Moe."
// ```
//
// 3. function ```mergeArray``` that combine two arrays
// - takes two arrays
// - returns the combination of the two arrays
// - **Bonus** combine the arrays in alternating syntax, like so:
//
// ```javascript
// var fun = ["pretzels", "cheez-its", "m&ms"];
// var work = ["raisins", "dried apricots", "nuts"];
// var trailMix = mergeArray(fun, work);
// // trailMix now equals ["pretzels","raisins", "cheez-its", "dried apricots", "m&ms", "nuts"];
// ```
//
// 4. function ```mergeHashes```
// - takes two hashes
// - returns the combination of the two hashes
//
// ```javascript
// var blue = {
//   "Heisenberg": "Hello, anyone home?",
//   "Cap'n Cook": "Science, friend!",
//   "James McGill": "Ring, ring!"
// }
// var ciudad = {
//   "Vuente": "Salud!",
//   "Gus": "One taste and you'll know.",
//   "Tio": "Family is all."
// }
// var happyFamily = mergeHashes(blue, ciudad);
// // happyFamily now equals { Heisenberg: 'Hello, anyone home?', Vuente: 'Salud!', 'Cap\'n Cook': 'Science, friend!', Gus: 'One taste and you\'ll know.', 'James McGill': 'Ring, ring!', Tio: 'Family is all.' }
// ```
//
// 5. constructor ```Sheep```
// - takes no parameters
// - returns an object with the following properties:
// 1. a ```name``` of "sheep"
// 2. a ```species``` of "O. aries"
// 3. a ```genus``` of "Ovis"
// 4. a ```phylum``` of "Chordata"
// 5. a ```kingdom``` of "Animalia"
//
// 2. constructor ```BaseballPlayer```
// - takes a baseball player name and team
// -returns an object with that name and team as properties.
// - Use the internet (or a partner) to find some names.
//
// 3. constructor ```Car```
// - takes a car brand, model, and color.
// - returns an object that has the following properties
// - brand
// - model
// - color
// - gear (initially ```"parked"```)
// - stopped (initially ```true```)
// - and has the following methods
// - `drive`
// - changes `gear` to "drive" and `stopped` to false.
// - prints out something like ```"Ford focus is in drive."```
// - `accelerate`
// - if `gear` is set to "park", print out a message telling the user to switch to "drive' first.
// - Otherwise, print something like "Ford focus is accelerating."
// - `stop`
// - print out someting like "Ford focus has stopped."
// - change `stopped` to true.
// - `park`
// - if `stopped` is set to false, print a message telling the user to stop the car first.
// - Otherwise, print something like "Ford focus is parked", and set the `gear` to "park".
//
// 8. constructor ```Square```
// - takes the following parameters:
// - x
// - y
// - width
// - height
// - color
// - and returns an object with those parameters
// - and the method ```draw``` which draws the square directly to the screen
//
// 9. Drawing Squares
// - constructor ```RandomSquare```
// - modify the ```Square``` constructor to not take an x or y parameter and instead generate a random position.
//
// - function ```createXSquares```
// - take no parameters
// - create 10 squares using the ```RandomSquare``` constructor and return them in an array
// - function ```drawSquares``` that iterates over a previously created array of squares using ```createXSquares```
// - make sure to call this function with ```setInterval```
//
// 10. Countdown to the new year
// - function ```countDown```
// - will print out to the terminal  10...9...8...7...2...1...HAPPY NEW YEAR
// - make sure that the countdown actually completes in 10 seconds
//
// 11. Canvas New Years
// - create a canvas animation that displays a ball dropping from the top of the canvas to the bottom
// - **Bonus:** have the ball take exactly 10 seconds to drop
//
