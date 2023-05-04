//Try to divide a number by zero, and return an error message if it does not happen
function tryCatch(num) {
  try {
    var res = num / 0;
    return res;
  } catch (e) {
    console.log(e);
  }
}
console.log(tryCatch(22));
