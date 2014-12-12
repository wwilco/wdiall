//review 1. callbacks 2. calculator hw

//Callbacks

var button = document.querySelector("button");
var x = 0; //initialize varibale outside of callback
button.addEventListener("click", function(){ //event listener is the click, when the click happens it calls the function
  alert(x);
  x++;
});//calls function each time button is clicked

//this code block is the same as above, but makes less sense due to syntax. it is not reusable code(cannot be applied to other var because it is dependent on x). writting it out like this is less functional
var button = document.querySelector("button");
var x = 0;
var f = function(){
  alert(x);
  x++;//does reach outside of itself to effect the x varibale
};
button.addEventListener("click", f);



var button = document.querySelector("button");
var x = 0; //initialize varibale outside of callback
button.addEventListener("click", function(){
  alert(x);
  x++;
  return x;
});//calls function each time button is clicked
console.log(x);



//calculate function
var add = function (x,y){
  return x + y;
};
var calculate = function(func, x, y){//a function that takes a function that takes two parameters
  return func(x, y);
}
var answer = calculate(add(2, 3));
console.log(answer);
