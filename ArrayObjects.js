//Q2 Write a function that takes an array of objects, where each object has a "name" property, and returns a new array containing only the names of the objects.
//Array's manipulation

let car = [
  {
    name: "Honda",
    plateno: 3449,
    engineType: "Hybrid",
  },
  {
    name: "Mehran",
    plateno: 1234,
    engineType: "Internal combustion",
  },
  {
    name: "Tesla",
    plateno: 336279,
    engineType: "electric",
  },
];
function nameCar(car) {
  var names = [];
  for (var i = 0; i < car.length; i++) {
    names.push(car[i].name);
  }
  return names;
}
console.log(nameCar(car));
