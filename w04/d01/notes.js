//grabbing info from Users
//More on EventListeners

//process.argv... process is an object, argv is an array, which becomes a property since its on a function
//process.stdin... the mechanism by which
//gate keeper to data that can come into your program, through "piping"
//it can be from the user or a file or a remote connection or a sound csar or video feed. it can be from anythign

process.stdin.on("data", function(data){ //parameter insdie function does not have to be the same as in this example
  var newdata = data.toString().trim();
  //newdata = newdata.trim(); //minimize code and just add .trim above^ DRY
  console.log(newdata);
});
