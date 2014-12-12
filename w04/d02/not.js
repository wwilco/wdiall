var message = "Enter two numbers with a space inbetween";
console.log(message);
process.stdin.on("data", function(input) {
  var input = input.toString();
  var arr = input.split(" ");
  var answer = parseInt(arr[0]) + parseInt(arr[1])
  var answer2 = answer.toString();
  var notifier = require('node-notifier');
  notifier.notify({
    'title': 'My notification',
    'message': answer2
  });
});


//Andrews code
console.log("Please enter in two numbers with a space inbetween");
process.stdin.on("data", function(input){
  //convert input to string and split at the space
  var inputStr = input.toString().split(" ");
  //convert each index back into integers
  var num1 = parseInt(inputStr[0]);
  var num2 = parseInt(inputStr[1]);
  //add the integers
  var answer = num1 + num2;

  var notifier = require('node-notifier');
  //Method on the notifier object called notify
  notifier.notify({
    'title': 'Notification',
    'message': answer
  });

});
