var words = ["hello", "world", "typescript"];
var capitalizedWords = words.map(function (str) { return str.charAt(0).toUpperCase() + str.slice(1); });
console.log(capitalizedWords);
