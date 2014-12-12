var zoo = ["elephant", "alligator", "panda", "lion", "monkey", "koala", "tiger", "t-rex", "puffins", "dodo", "Crawford", "penguins"];
var newzoo = [];

function add(x) {
  newzoo.push(x);
}

function remove(x) {
  var dd = zoo.indexOf(x);
  newzoo = zoo.splice(dd, 1);
}

function swap(x, y) {
  var z = x;
  x = y;
  z = y;
}

function sort() {
  zoo.sort()
}

function reverse() {
  zoo.reverse();
}

remove("dodo");
add("kangaroo");
swap(zoo.indexOf("tiger"), zoo.indexOf("Crawford"));
sort();
reverse();

console.log(zoo);
console.log(newzoo);
