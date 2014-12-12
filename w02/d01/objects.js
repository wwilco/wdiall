var obj = {name: "sean", age: 28} ;
console.log(obj["name"])//prints sean

obj["name"]="sam";//change a name and assign new value

//key = "name", "age" -> generally want to use strings for key
//value = "sean", "28" ->this can be anything
//a map b/w a key and a value

var obj = { //same as previous var obj, just different syntax
  name: "sean",
  age: 28,
  "555": ["david", "laura"]//put numbers in "" to make it a string. it may work w/o, but js is weird
  }

console.log(obj[555][1])//prints laura

obj["555"][0]="new name"//changes "david" to "new name"
obj.name="joe"//dot notation: chnages name to "joe" cannot do . then a number. must use obj["555"]

//mixing objects and arrays

var obj ={
  age: 28,
  fav_num: 28,
  color: "purple",
  name: "sean"
}
var keys = Object.keys(obj) //returns an array of keys
console.log(keys)//prints out ["age", "fav_num"]
