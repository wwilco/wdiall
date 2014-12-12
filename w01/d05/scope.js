var counter = 0;

var stayHi = function() {
  console.log("Hi")
  counter++
  if (counter === 5) {
    clearInterval(refreshIntervalId); //knows its a function because camel case and the () attatched to it
  };
}

var refreshIntervalId = setInterval(stayHi, 500) //setInterval is a set function already written in js
