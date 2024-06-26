// Using iteration, write a function fibs which takes a number and returns an array
// containing that many numbers from the Fibonacci sequence.
function fibs(number) {
  let array = [];

  let a = 0;
  let b = 1;

  for (let i = 0; i < number; i++) {
    const temp = a;
    a = a + b;
    b = temp;

    array.push(b);
  }

  return array;
}

// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
console.log(fibs(8));

// Now write another function fibsRec which solves the same problem recursively.

// Version 1
function fibsRec(number) {
  let array = [];
  function fib(number) {
    if (number < 2) return number;
    return fib(number - 1) + fib(number - 2);
  }
  for (let i = 0; i < number; i += 1) {
    array.push(fib(i));
  }
  return array;
}

// Version 2
function fibsRec2(number) {
  const array = [0, 1];
  function fib(number) {
    if (array[number] == null) {
      array[number] = fib(number - 1) + fib(number - 2);
    }
    return array[number];
  }
  fib(number - 1);
  return array;
}

// Test both versions of your functions by passing in various lengths as arguments.
console.log(fibsRec(8));
console.log(fibsRec2(8));
