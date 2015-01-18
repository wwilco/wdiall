var url = "http://api.randomuser.me/";

var xhr = new XMLHttpRequest();

xhr.open("GET", url);

xhr.addEventListener('load' , function() {
  var d = xhr.responseText
  var parsed = JSON.parse(d);
  console.log(parsed.results[0].user);
  console.log(parsed.results[0].user.email);

})

xhr.send();
