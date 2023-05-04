//Q3 Take the marks of a student as an input. Return first division if they are greater than 60 else return second division.
function checkMarks(num) {
  if (num > 60) {
    return "First Division!";
  } else {
    return "Second Division";
  }
}
console.log(checkMarks(70));
console.log(checkMarks(40));
