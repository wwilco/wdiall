var hash1 = {
  "Heisenberg": "Hello, anyone home?",
  "Cap'n Cook": "Science, friend!",
  "James McGill": "Ring, ring!"
}
var hash2 = {
  "Vuente": "Salud!",
  "Gus": "One taste and you'll know.",
  "Tio": "Family is all."
}

var mergeHashes = function(hash1, hash2) {
  var merged = {}

  var hash1keys = Object.keys(hash1);
  var hash2keys = Object.keys(hash2);

  for(var i=0; i<hash1keys.length; i++) {
    var key1 = hash1keys[i];
    merged[key1] = hash1[key1];
  }

  for(var i=0; i<hash2keys.length; i++) {
    var key2 = hash2keys[i];
    merged[key2] = hash2[key2];
  }

  return merged;
}

var happyFamily = mergeHashes(hash1, hash2);
console.log(happyFamily)
