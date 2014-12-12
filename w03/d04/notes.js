var arr = [1,10,20,50];
for (var i= 0; i < arr.length; i++){ // for each simplifies this process, because the 3 thigns are always the case when looping through sterf
  var elem = arr[i];
  console.log(elem)
}

//forEach
//interacting functions:
var f = function(x){
  console.log(x);//prints somethign to node, but does not return anything. it return undefined
}
var a = [1,2,3]; //this gives each element of  the array, "a" to the function, "f"
a.forEach(f);

//with anonamous function. the same as "interacting functions" (above), just better syntax
var a = [10,20,30];
a.forEach(function(x){
  console.log(x);
});
//dont use "return" within forEach

//quiz using for loop
var doublePrint = function(x){
  console.log(x * 2);
}
var doublePrintArray = function(x){
  for (var i = 0; i < x.length; i++){
    var elem x[i];
    doublePrint(elem);
  }
}
var x = [1,2,3];
doublePrintArray(x);

//quiz using forEach
var doublePrint = function(x){
  console.log(x * 2);
}
var doublePrintArray = function(x){
  x.forEach(function(elem){// this is repeating the same function and parameter
    doublePrint(elem);
  });
};

//removing element

var ul = document.querySelector("#myul");
var li = document.querySelector("#myli");
ul.removeChild(li);
var parent = li.parentElement
parent.removeChild(li);

//or.... this=the object that the method is on.
li.addEventListener("dragstart", function(){
  ul.removeChild(li); //could swap li with .this, but cuz its an anonamous func, it doesnt need to be robust
});

var obj = {name: "sean"}
obj.printName = function(){
  console.log(this.name);//could swap .this with obj, but its less robust, not easy to reuse
}
