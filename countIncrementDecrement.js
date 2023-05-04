//Q3 Create a function with a private variable ‘count’. Make an instance/object of this function. Make functions inside the object to increase and decrease the value of the private variable. Also make a function to return the value of that variable so you can observe the impact on that variable.
function counter() {
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
}

const myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());
myCounter.decrement();
console.log(myCounter.getCount());
