var name = "sam";
var f = function(){
  console.log(name);
  name = "sean"
}
f();//sam. its sees conosle.log before name is changed to sean
f();//sean

var name = "sam";
var f = function(){
  name = "sean"
  return name;
}
f();sean
f();sean

var name = "sam";
var f = function(){
  var name2 = "sean"
  return name2;
}
console.log() //will not print anything without console.log
f();//sean
f();//sean


//why not to console.log within a function

var dbl = function(x){ // can do MORE with this code
  return x * 2;
}
var num = 3;
var d = double(num);
var quad = double(d);//quadruples 3
console.log(quad);

var dbltwo = function(x){//can do LESS with this
  console.log(x);
}
var num = 3;
dbltwo(num); //6
