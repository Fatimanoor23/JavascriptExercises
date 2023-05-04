//Q2 Write a function to determine if a character string entered is longer than 10 characters.
function countChar(str) {
  var strr = "";
  count = 0;
  for (var i = 0; i < str.length; i++) {
    count += 1;
  }
  return count;
}
function checkChar(str) {
  var countstr = countChar(str);
  if (countstr > 10) {
    return "The character string is greater than 10";
  } else {
    return "The character string is less than 10.";
  }
}
console.log(checkChar("SHDHSJS112323"));
console.log(checkChar("123458"));
