var createPerson = function(){
    var obj={name: "sean"}; //just an object
    return obj;
  }
  var p1 = createPerson();
  p1["age"] = 28;
  var p2 = createPerson();

  console.log(p2)

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
