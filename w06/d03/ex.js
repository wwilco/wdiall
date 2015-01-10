// //weatherman
// var con = process.argv[2]
// var temp = process.argv[3]
//
// if ((con === "rainy") && (temp === "cold")){
//   console.log("gross");
// }
// else {
//   console.log("yay");
// }

//meaning of life

var meaning = function(){
  return 42
}
console.log("wanna know the meaning of life?")

process.stdin.on("data", function(answer){
  var ansr = answer.toString().trim();
  if (ansr === "y"){
    console.log(meaning());
    console.log("god bless");
    process.exit();
  }
  else {
    console.log("bummer")
    process.exit();
  }
});
