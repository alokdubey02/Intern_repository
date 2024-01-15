// LOOP in javascript

// for loop over an Array and over a string
// method 1
// const cars = ["BMW", "Volvo", "Mini"];
// for (let i = 0; i < cars.length; i++) console.log(cars[i]);

//method 2
// for (let x of cars) console.log(x);

// method 3
// for...in Loop:
// Iterates over the enumerable properties of an object.
// for (let key in cars) {
//   console.log(key, cars[key]);
// }

// forEach Method(Array)
// Array method that executes a provided function once for each array element.
// const numbers = [1, 2, 3];
// numbers.forEach(function (number) {
//   console.log(number);
// });

// method 1 for string
// let language = "JavaScript";
// for (let i = 0; i < language.length; i++) console.log(language[i]);

// method 2 for string
// for...of Loop:
// Introduced in ES6, iterates over iterable objects like arrays, strings, maps, sets, etc.
// for (let x of language) console.log(x);

// method 3 for string
// for...in Loop:
// Iterates over the enumerable properties of an object.

// for (let key in language) {
//   console.log(key, language[key]);
// }

// While loop
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// do-while loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// Array method that creates a new array by applying a function to each element of an existing array

// Map

// Map(["key",value])
// Map([key,value])

// map Method(Array)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const variable = numbers.map(function (number) {
//   return number * 2;
// });
// console.log(variable);

// using arrow function
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const variable = numbers.map((number) => number * 2);
// console.log(variable);

// filter Method (Array)
// Array method that creates a new array with elements that satisfy a condition.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens);

// Sets
// a Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references. The values in a Set must be unique, and the insertion order of values is maintained.
// const numbers = new Set([1, 2, 3, 4, 5, "hello"]);
// console.log(numbers);
// adding element
// numbers.add("Alok");
// console.log(numbers);
// deleting element
// numbers.delete(5);
// console.log(numbers);

//checking for element existence
// console.log(numbers.has(2));

//getting the size
// console.log(numbers.size);

// iterating over a set
// use for of method
// for (const key of numbers) {
//   console.log(key);
// }

// or use forEach method
// numbers.forEach((key) => {
//   console.log(key);
// });

// Converting Set to Array

// You can convert a Set to an array using the spread operator or the Array.from method:
// const arrayVariable1 = [...numbers];
// console.log(arrayVariable1);
// const arrayVariable2 = Array.from(numbers);
// console.log(arrayVariable2);

//Removing Duplicates from an array

// The Set can be used to quickly eliminate duplicates from an array.

// const array = [1, 2, 3, 4, 5, 5, 7, 2, 3, 1];
// console.log(array);
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray);

// Checking Uniqueness

// You can use Set to check if all values in an array are unique.
// function areUnique(array) {
//   return new Set(array).size === array.length;
// }
// console.log(areUnique(array));

// Intersection, Union and Difference
// const setA = new Set([1, 2, 3]);
// const setB = new Set([2, 3, 4]);

// const intersection = new Set([...setA].filter((x) => setB.has(x)));
// const union = new Set([...setA, ...setB]);
// const difference = new Set([...setA].filter((x) => !setB.has(x)));
// console.log(intersection);
// console.log(union);
// console.log(difference);
