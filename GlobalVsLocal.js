//Q1 Global and Local Scope: Create a variable outside a function and another variable using var with the same name inside a function. Try to access both variables from inside and outside the function. This will help you understand the concept of global and local scope.
//Now try the above using let and see what happens.

let name = "Ali";
function checkName() {
  let name = "Hamza";
  return name;
}
console.log(name);
console.log(checkName());
