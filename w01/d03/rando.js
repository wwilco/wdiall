var x = process.argv[2];
x = parseInt(x)
//var rando = Math.floor(Math.random() * 9) + 1

if ((Math.floor(Math.random() * 9) + 1) === x){
  console.log("Hooray!")
}
else {
  console.log("we were looking for " + x)
};
