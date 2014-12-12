var tmgtch = function(hungry, sick, age) {
  this.hungry = false;
  this.sick = false;
  this.age = 0;
  // feed() if hungry is true, print "That was yummy" and set hungry to false. If hungry is false, print "No thanks, I'm full." and set hungry to true
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
  //Prints out all methods that are called.
  this.sleep = function() {console.log("ZzzZZzzzZZZzzZZzZZ");}
  this.bark = function() {console.log("ruff ruff");}
  this.goOutside = function() {console.log("I own that tree now!");}
  this.meow = function() {console.log("Meow!");}
  this.useLitterBox = function() {console.log("Burried treasure!");}
  this.swim = function() {console.log("Just keep swimming");}

  // medicate() if sick is true, print "I feel much better!" and set sick to false. If sick is false, print "No thanks, I feel fine." and set sick to true
  this.medicate = function() {
    if (this.sick) {
      console.log("I feel much better!");
      this.sick = false;
    }
    else {
      console.log("No thanks, I feel fine.");
      this.sick = true;
    }
  }
  // IncreaseAge() increase the age by one and print "Happy Birthday to me! I am " + age + "years old!"
  this.IncreaseAge = function() {
    this.age++
    console.log("Happy Birthday to me! I am " + this.age + " years old!");
  }
}

//Created new variables dog, cat and fish
var dog = new tmgtch(true, false, 0);
var cat = new tmgtch();
var fish = new tmgtch(false, true);

dog.feed();
dog.feed();
dog.IncreaseAge();
dog.IncreaseAge();
dog.bark();
dog.goOutside();
cat.meow();
cat.sleep();
cat.useLitterBox();
fish.medicate();
fish.swim();

//#2

var Tamagotchi = function() {
  this.hungry = false;
  this.sick = false;
  this.age = 0;

  this.feed = function() {
    if(this.hungry === true) {
      console.log("That was yummy!");
      this.hungry = false;
    }
    else {
      console.log("No thanks, I'm full.");
      this.hungry = true;
    }
  };

  this.sleep = function() {
    console.log("zzzzzzzzzzzz");
  };

  this.medicate = function() {
    if(this.sick === true) {
      console.log("I feel much better");
      this.sick = false;
    }
    else {
      console.log("No thanks, I feel fine.");
      this.sick = true;
    }
  };

  this.increaseAge = function() {
    this.age ++;
    console.log("Happy Birthday to me! I am " + this.age +
    " years old!");
  };
};

var dog = new Tamagotchi();
dog.bark = function() {
  console.log("ruff ruff!");
}

dog.goOutside = function() {
  console.log("I own that tree now!");
}

var cat = new Tamagotchi();
cat.meow = function() {
  console.log("Meow!");
}
cat.useLitterBox = function() {
  console.log("Burried treasure!");
}

var fish = new Tamagotchi();
fish.swim = function() {
  console.log("Just keep swimming...");
}

dog.feed();
dog.feed();
dog.increaseAge();
dog.increaseAge();
dog.bark();
dog.goOutside();
console.log();

cat.meow();
cat.sleep();
cat.useLitterBox();
console.log();

fish.medicate();
fish.medicate();
fish.swim();
