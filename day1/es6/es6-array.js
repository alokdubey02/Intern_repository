// es6 array methods

// array.fr0m() methods returns an array object from any object with a length property or any iterable object
// Array.from("ABCDEF");
// console.log(Array.from("ABCDEF"));

// keys() method returns an Array Iterator object with the keys of an array

// const names = ["AA", "BB", "CC"];
// const keys = names.keys();

// let text = "";
// for (let x of keys) text += x + " ";
// console.log(text);

// Array find()
// The find() method returns the value of the first array element that passes a test function.

// const num = [1, 2, 3];
// let first = num.find(fun);
// function fun(value, index, array) {
//   return value > 1;
// }
// console.log(first);

// Array findIndex()
// findIndex() method returns the index of the first array element that passes a test function.

// const num = [1, 2, 3];
// let first = num.findIndex(fun);
// function fun(value, index, array) {
//   return value > 1;
// }
// console.log(first);

// array includes()
// This allows us to check if an element is present in an array
// const names = ["BMW", "TATA", "FERRARI"];
// const y = names.includes("FERRARI");
