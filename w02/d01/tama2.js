var tama = function(hungry, sick, age) {
  this.hungry = false;
  this.sick = false;
  this.age = 0;
  this.feed = function() {
    if (this.hungry) {
      console.log("That was yummy");
      this.hungry = false;
    }
    else {
      console.log("No thanks, I'm full.");
      this.hungry = true;
    }
  }
  this.sleep = function() {console.log("zzzzzzz");}
  this.medicate = function() {
    if (this.sick){
      console.log("I feel much better!");
      this.sick = false;
    }
    else {
      console.log("No thanks, I feel fine.")
      this.sick = true;
    }
  }
  this.increaseAge = function() {
    this.age++;
    "Happy Birthday to me! I am " + this.age + " years old!"
  }
  this.bark = function() {console.log("ruff, ruff");}
  this.goOutside = function() {console.log("i own that tree bitches!");}


var dog = new tama(true, false, 4);
var cat = new tama(false, true, 12);
var fish = new tama(false, false, 1);

console.log(dog);
