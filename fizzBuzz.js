//Q4 Take a number and return the string ‘FizzBuzz’ if it is divisible by both 3 and 5, else return Fizz if it is divisible by 3 and return Buzz if it is divisible by 5 only. Else return the number.(Hint: chaining)
function checkNum(num) {
  return num % 3 === 0 && num % 5 === 0
    ? "fizzBuzz"
    : num % 3 === 0
    ? "Fizz"
    : num % 5 === 0
    ? "Buzz"
    : num;
}
console.log(checkNum(2));
console.log(checkNum(15));
console.log(checkNum(12));
console.log(checkNum(25));
console.log(checkNum(1));
