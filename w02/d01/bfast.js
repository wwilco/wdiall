// var x = process.argv[2];
// var bfast = {
//   "emilio": "andrew clark",
//   "anthony": "brian johnson",
//   "judd": "john bender",
//   "molly": "claire standish"
// }
// console.log(bfast[x])

var colors = {
  dan: "purple",
  lisa: "kale",
  carl: "green",
  lenny: "pink",
  tina: "maroon",
  ted: "yellow",
  crawford: "pink",
  kobe: "silver",
  david: "white",
  sean: "purple",
  nina: "black",
  robyn: "aqua",
  larry: "orange",
  sam: "purple"
};

var keys = Object.keys(colors);

for(var i=0; i < keys.length; i++) {
  if (colors[keys[i]]=== "pink" || colors[keys[i]]=== "purple"){
  console.log(keys[i]);
  }
}

//
// var key = keys[i];
// var value = obj[key]
