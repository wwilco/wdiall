var textbox = document.querySelector(#mytextbox) //documnt is an object. can use dot notation, querySelector is a property, when u put function on them, it becomes a method
var text = textbox.value

createElement

documnt.createElement("li") //not currently on html page. must be captured in a variable
var li = documnt.createElement("li") //like here! inside element must be a tag element, ex div, li, ul, p, h1

//attaching on element to another
var ol = document.querySelector("#myol"); //grab ol parent element
var myli = documnt.createElement("li"); //create child element
ol.appendChild(myli) //attatch li to ol



var body = document.querySelector("body"); //grab body(parent element)
var ul = document.createElement("ul"); //create child
body.appendChild(ul); //attach ul to body, child to parent
var li = document.createElement("li");
ul.appendChild(li); //attach li to ul, ul becomes parent of li which is a child

// should always have handle right above calling the alert..
bar button = document.querySelector("button");
button.addEventlistener("click", function(){
  var textbox = document.querySelector(“input”);//this is the handle
  alert(tectbox.value)
});


ol.style //grabs

//forEach notes

//looping through array
var arr = [1,2,3,4,5];
for (var i = 0; i < arr.length; i++){
  var elem = arr[i];//use loop ariable as index, i is middleman
  console.log(elem);
}

var arr = [1,5,10,15];
var func - function(elem){
  console.log(elem);
}
arr.forEach(func) //just takes one function, like running a function through the array
func(1);
func(5);
func(10);
func(15);
//method that takes a function that is expected to take a parameter

//with anonamous function:
var arr = [1,5,10,15];
arr.forEach(function(elem){
  console.log(elem); //print out 1, 5, 10, 15 without return elem
  return elem; //if returned, it exits the function your in, but forEach method nulls this, within a for loop return exits out of the loop, bnut not within a function, which is what forEach is 
});
