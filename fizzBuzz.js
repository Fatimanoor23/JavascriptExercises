//Q4 Take a number and return the string ‘FizzBuzz’ if it is divisible by both 3 and 5, else return Fizz if it is divisible by 3 and return Buzz if it is divisible by 5 only. Else return the number.(Hint: chaining)
function checkNum(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz!";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}
console.log(checkNum(2));
console.log(checkNum(15));
console.log(checkNum(12));
console.log(checkNum(25));
console.log(checkNum(1));
