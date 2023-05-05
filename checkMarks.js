//Q3 Take the marks of a student as an input. Return first division if they are greater than 60 else return second division.
function checkMarks(num) {
  return num > 60 ? "First Division" : "Second Division";
}
console.log(checkMarks(70));
console.log(checkMarks(40));
