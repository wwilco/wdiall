//EX 1
var createPerson = function(){
    var obj={name: "sean"}; //just an object
    return obj;
  }
  var p1 = createPerson();
  p1["age"] = 28;
  var p2 = createPerson();

  console.log(p2)
//EX 2
var createPerson= function(n, a) {
  var o ={
    name: n,
    beautiful: true,
    age: a
  }
  return o;
}

var p1 = createPerson("sean", 28);
var p2 = createPerson("sam", 26);

//EX 3
var person = function(){
  this.name="sean";// this refers to the object that is sean. it refers to itself
  this["age"]=28;
}
var p1 = new person();//new replaces use of return, it is needed to run 
p1.age=27; //change age
