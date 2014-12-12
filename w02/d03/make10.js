makeTen = function(x, y){
  if(x+y===10){
    console.log(true);
  }
  else if ((x===10) || (y===10)){
    console.log(true);
  }
  else{
    console.log(false);
  }
}

makeTen(9, 6);
