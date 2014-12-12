//   var leonardo = {
//   name: "Leonardo",
//   color: "blue",
//   weapon: "ninjato",
//   namedAfter: "Leonardo da Vinci",
//   likesPizza: true,
//   pizzaEaten: false,
//   eatPizza=function(){
//
//     var pizzaEaten = false
//
//     if (pizzaEaten = true){
//       console.log("Leonardo has already eaten pizza.")
//     }
//     else{
//       console.log("Leonardo is eating pizza.")
//     }
//     var pizzaEaten= true;
//   }
// }

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

var newTurtle = function(n,c,w,na,lp) {
  var newT ={
    name: n,
    color: c,
    weapon: w,
    namedAfter: na,
    likesPizza: true
  }
  return newT;
}
var t1 = newTurtle("Will", "black", "rocks", "william the conquerer");
var t2 = newTurtle("Betty", "yellow", "ice-pick", "betty boop");

var tmnt = [leonardo, michelangelo, raphael, donatello];
var tmnt2 = tmnt.push(t1, t2)


for (var i = 0; i < tmnt.length; i++){
  var name = tmnt[i].name;
  var color = tmnt[i].color;
  var weapon = tmnt[i].weapon;
  var namedAfter = tmnt[i].namedAfter;
  console.log(name +" wears a " + color + " bandana, his weapon is the " + weapon + ", he is named after " + namedAfter + " and he likes pizza");
}
