//1 Write a function that uses a ternary operator to determine if a given number is even or odd?

function isEvenOdd(num) {
  const checkEvenOdd = num % 2 == 0 ? "even" : "odd";
  return checkEvenOdd;
}
console.log(isEvenOdd(23));
console.log(isEvenOdd(24));
console.log(isEvenOdd(0));
console.log(isEvenOdd(1));
