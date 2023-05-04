//Q1 Find and return the largest and smallest number of an array.
//find the largest in array
function isMax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function isMin(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

var maxx = isMax([2, 3, 90, 87, 34, 10]);
console.log(maxx);
var min = isMin([2, 4, 5, 6, 0, 100]);
console.log(min);
