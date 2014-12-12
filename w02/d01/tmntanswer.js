var leonardo = {
  name: "Leonardo",
  color: "blue",
  weapon: "ninjato",
  namedAfter: "Leonardo da Vinci",
  likesPizza: true
}

var michelangelo = {
  name: "Michelangelo",
  color: "orange",
  weapon: "nunchucks",
  namedAfter: "Michaelangelo Buonarroti",
  likesPizza: true
}

var raphael = {
  name: "Raphael",
  color: "red",
  weapon: "sai",
  namedAfter: "Raffaello Sanzio da Urbino",
  likesPizza: true
}

var donatello = {
  name: "Donatello",
  color: "purple",
  weapon: "bo",
  namedAfter: "Donato di Niccolo di Betto Bardi",
  likesPizza: true
}

var turtles = [leonardo, michelangelo, raphael, donatello];

for (var i = 0; i < turtles.length; i++) {
  console.log(turtles[i].name + " wears a " + turtles[i].color + " bandana, " +
  "his weapon is " + turtles[i].weapon + ", he is named after " +
  turtles[i].namedAfter + ", and he likes pizza.");
}

Exercise: Make Leonardo eat pizza

Add a boolean property to Leonardo called pizzaEaten (initially set to false).
Add a method to Leonardo called eatPizza() which does the following:
1. If pizzaEaten is true, print out "Leonardo has already eaten pizza." and set pizzaEaten to false. 2. If pizzaEaten is false, print out "Leonardo is eating pizza." and set pizzaEaten to true.
Solution

var leonardo = {
  name: "Leonardo",
  color: "blue",
  weapon: "ninjato",
  namedAfter: "Leonardo da Vinci",
  likesPizza: true,
  pizzaEaten: false,
  eatPizza: function() {
    if(this.pizzaEaten) {
      console.log("Leonardo has already eaten pizza.");
      this.pizzaEaten = false;
    }

    else {
      console.log("Leonardo is eating pizza.");
      this.pizzaEaten = true;
    }
  }
}

leonardo.eatPizza();
leonardo.eatPizza();

//part 2
var leonardo = {
  name: "Leonardo",
  color: "blue",
  weapon: "ninjato",
  namedAfter: "Leonardo da Vinci",
  likesPizza: true,
  pizzaEaten: false,
  eatPizza: function() {
    if(this.pizzaEaten) {
      console.log("Leonardo has already eaten pizza.");
      this.pizzaEaten = false;
    }

    else {
      console.log("Leonardo is eating pizza.");
      this.pizzaEaten = true;
    }
  }
}

leonardo.eatPizza();
leonardo.eatPizza();

//part 3
var Turtle = function(name, color, weapon) {
  this.name = name;
  this.color = color;
  this.weapon = weapon;

  this.likesPizza = true;
  this.pizzaEaten = false;
  this.eatPizza = function() {
    if(this.pizzaEaten) {
      console.log(this.name + " has already eaten pizza.");
      this.pizzaEaten = false;
    }

    else {
      console.log(this.name + " is eating pizza.");
      this.pizzaEaten = true;
    }
  }
};

var leonardo = new Turtle("Leonardo", "blue", "ninjato");
var michelangelo = new Turtle("Michelangelo", "orange", "nunchucks");
var raphael = new Turtle("Raphael", "red", "sai");
var donatello = new Turtle("Donatello", "purple", "bo");

var turtles = [leonardo, michelangelo, raphael, donatello];

leonardo.name = "Sam";
console.log(leonardo.weapon);

var sean = new Turtle("Sean", "green", "JavaScript");
turtles.push(sean);

console.log(turtles);
