//stores all available animals
var animals = ["elephant", "alligator", "panda", "lion", "monkey", "koala", "tiger", "t-rex", "puffins", "dodo", "Crawford", "penguins"]

//create empty array for later
var zoo = [];

//funciton to add a kangaroo to the zoo, with an array as a parameter
var add = function(array) {

  //pushes "kangaroo" into array
  array.push(animals + ",kangaroo");

  console.log(zoo.toString());
};

add(zoo);

var dodo = animals.indexOf("dodo");


var minus = function(arr) {
  arr.splice(9, 1);
  console.log(animals.splice);
};

minus();
