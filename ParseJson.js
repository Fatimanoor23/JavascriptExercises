//Q2 Take a json object as an input and try to parse it as a string. Return an error message if unable to do so.
function ParseJson(str) {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return "The string is not valid JSON string";
  }
}
var str1 = '{"name": "John", "age": 30, "city": "New York"}';
var str2 = "name";
console.log(ParseJson(str1));
console.log(ParseJson(str2));
