//Q2 Nested functions: At the start of a function, declare a variable. Now return a function inside the current, that uses the above mentioned variable.
//Nested functions
function fun1(a) {
  function fun2(b) {
    return a * b;
  }
  return fun2(2);
}
var returnedVal = fun1(5);
console.log(returnedVal);
var returnedVal = fun1(100);

console.log(returnedVal);
