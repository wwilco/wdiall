// var Sheep = function() {
//     this.name = "sheep";
//     this.species = "O. aries";
//     this.genus = "Ovis";
//     this.phylum = "Chordata";
//     this.kingdom = "Animalia";
//   }
//
// return Sheep
// console.log(Sheep)

//
// var BaseballPlayer = function(name, team) {
//   this.name = name;
//   this.team = team;
// }
//
// var name = "Dogg Fun";
// var team = "LA HAcks";
// console.log(BaseballPlayer())

var Car = function(){
  this.brand = "volvo";
  this.model = "v70";
  this.color = "black";
  this.gear = "parked";
  this.stopped = true;

  this.drive = function() {
    this.gear = "drive";
    this.stopped = false;
    console.log(this.brand + " " + this.model + " is in drive.");
  }

  this.accelerate = function() {
    if(this.gear === "park") {
    console.log("The car has to be in drive in order to accelerate.");
    }
    else {
    console.log(this.brand + " " + this.model + " is accelerating.");
    }
  }
}
