var word = "";
function countxx(word){
  for (var i =0; i < word.length; i++){
    if (i === "xx"){
      console.log(1);
    }
    else if (i[word] === "xxx"){
      console.log(2);
    }
    else if (i === "xxxx"){
      console.log(3);
    }
    else{
      console.log("no x");
    }
  }
}

countxx("abcxx")
