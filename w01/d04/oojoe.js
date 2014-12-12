var input = process.argv[2];
var counter = 0;
var str = "";

while(counter < input.length) {
  if(input.charAt(counter) === 'o') {
    console.log(input.charAt(counter));
    str = str +  input.charAt(counter);
  }
  counter ++;
}

console.log(str.length);

if(str.length === 2) {
  console.log("This word contains two o's");
}else if (str.length > 2){
  console.log("This contains more than 2 o's")
}
else { console.log("This word does not have 2 o's ");
}

if(str === "oo") {
  console.log("2 o's next to eachother")
}
