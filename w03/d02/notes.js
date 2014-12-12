//Change Element of an html on chrome
document.querySelector("#mouse")
<li class=​"mammal" id=​"mouse">​mouse​</li>​
var x = document.querySelector("#mouse")
undefined
x
<li class=​"mammal" id=​"mouse">​mouse​</li>​
x.innerText //try inner.HTML on firefox
"mouse"
x.innerText = "itchy"
"itchy"

for(var i = 0; i < x.length; i++) { x[i].innerText = "dodo"; }//switches all birds

use setAttribute to change stuff
var pic = document.querySelector("img")
undefined
pic.setAttribute("src", "new url") //like a method on an object
undefined

var button = document.querySelector("#button");
var box = document.querySelector("input#checkbox");
button.addEventListener("click", function(){
  box.addEventListener("click")
  if (box.checked){
    window.alert("It's checked!");
  }
  else {
    window.alert("Not checked!");
  }
});
