var sean = {
  name:"sean",
  age: 28,
  // sayHello: function(){
  //   console.log("hey");
  // }
  sayHello: function(){
    var myname = this.name //"this" is a kernel word, can be used on obj. recognized by js
    console.log("Hey I am " + myname); // 
  }
  color: "purple",
  sayMyName: function(name){
    console.log(name); //call obj["sayMyName"]("lee")-> object oriented vocabulary
  }
}
//obj["sayHello"](); - calls the function

var sam = {
  name:"sam",
  age: 26,
  color: "purple"
}

var people = ["sean", "sam"];

// var people = Object.people(ppl);

for (var i=0; i < people.length; i++) {
  var name = people[i]["name"];
  console.log(name);
}

var obj = {};
obj.x=3;
obj.y=5;
obj["z"]="sean";
obj["a"]=[1,2,3];
//console.log(obj)
//prints:   { x: 3, y: 5, z: 'sean', a: [ 1, 2, 3 ] }

var hello = function(){
  console.log("hello");
}
obj["sayHello"] = hello;
//print: obj.sayhello() or obj["sayHello"]()

var a = 3;
var b = a;
a++;
//console.log(a); //be remains 3, a chnages to 4

var x = function() {
  return 2;
}
var y = x;
var z = x(); // will return 2
console.log(y())//will return 2
