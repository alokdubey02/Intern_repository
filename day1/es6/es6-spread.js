// The spread operator (...) is a feature introduced in ECMAScript 6 (ES6) that allows for the expansion of elements in various contexts, such as arrays, object literals, and function arguments.

// 1) Spreading Array Elements:
// the spread operator is used to concatenate the elements of array1 with the new array2

// const w1 = ["Sun", "Mon", "Tue"];
// console.log(w1);
// const w2 = ["Wed", "Thu", "Fri", "Sat"];
// console.log(w2);
// const week = [...w1, ...w2];
// console.log(week);

// 2) Copying Arrays:
// The spread operator can be used to create a shallow copy of an array.

// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];
// console.log(copyArray);

// 3) Spreading Object Properties:
// The spread operator can also be used to merge object properties.

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3, d: 4 };
// console.log(obj2);

// 4) Copying Objects:
// Similar to arrays, the spread operator can be used to create a shallow copy of an object.

// const originalObject = { x: 1, y: 2 };
// const copyObject = { ...originalObject };
// console.log(copyObject);

// 5) Spreading Function Arguments:
// // The spread operator can be used in function parameters to collect multiple arguments into an array

// function example(...args) {
//   console.log(args);
// }
// example(1, 2, 3);

// 6) Destructuring Arrays or Objects:
// The spread operator can be used in destructuring assignments to capture the rest of the elements.

// const numbers = [1, 2, 3];
// const [first, ...rest] = numbers;
// const [...all] = numbers;
// console.log(first);
// Rest Parameter (...)
// The rest parameter allows a function to accept an indefinite number of arguments as an array.
// console.log(rest);
// console.log(all);
