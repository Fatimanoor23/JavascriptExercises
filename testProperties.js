//Q3 Take an object and try to access its property. If the property does not exist, print out an error message, else return the value of that property.
//creating an object Person

var person = {
  name: "Fatima",
  age: 22,
  hobbies: ["Reading", "Cooking", "Photography"],
};
//accessing objects
try {
  var name = person.name;
  var school = person.school;
  console.log(name);
  console.log(school);
} catch (e) {
  console.log(e);
}
