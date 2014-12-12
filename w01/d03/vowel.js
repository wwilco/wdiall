var string = "will is my name"
var counter = 0
var new_word = ""

while (counter < string.length){
  if ((string[counter] === "a") || (string[counter] === "e") || (string[counter] === "i") || (string[counter] === "o") || (string[counter] === "u") || (string[counter] === "y")){
    console.log(string[counter])
    new_word = new_word + string[counter];
  }
  counter ++
}
