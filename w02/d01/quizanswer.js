//part 1

// function age(name, age) {
//   console.log(name + " is " + age + " years old.")
// }
// age("Will", 25)

//part 3 (use with part 1)

var metaBouncer = function(age, name, func){ //function that takes a function
  console.log(func(age) + " " + name)
}

//func(age)

//part 2

var bouncer = function(age){
  if (age >= 21){
    return "Come in!"; // could use console.log("Come in") instead of return, but remove console.log() at the bottom
  }
  else{
    return "Psh nice try";
  }
}
console.log(bouncer(26)); //do not var age because it is defined on this line with 26
//other return method:
// var msg = bouncer(25);
//console.log(msg);
