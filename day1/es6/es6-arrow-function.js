// arrow function
// Arrow functions are a concise way to write function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions. Here's an overview of arrow functions:

// es5 or Traditional function expression

// let add = function (a, b) {
// return a + b;
//   };

// es6 or Arrow function equivalent

//   let add = (a, b) => a + b;

// Features:
// 1) shorter syntax
// Arrow functions have a more concise syntax, especially when the function body is a single expression.

// 2) Implicit Return:
// If the function body is a single expression, the return statement is implicit.
// Implicit Return: In functions, especially arrow functions in JavaScript, when the return statement is omitted, the last evaluated expression is implicitly returned.

// 3) No this Binding:
// Arrow functions do not have their own this context. They inherit this from the enclosing scope.

// 4) No arguments Object:
// Arrow functions do not have their own arguments object. You can still access the arguments of the enclosing scope.

// Examples

// single parameter:
// let name = (eName) => `Hello, ${eName}`;
// console.log(name("Alok"));

// let square = (x) => x * x;
// console.log(square(5));

// No parameters or without parameters
// let sayHello = () => "Hello!";
// console.log(sayHello());

// Implicit Return:
// Implicit Return: In functions, especially arrow functions in JavaScript, when the return statement is omitted, the last evaluated expression is implicitly returned.

// let add = (x, y) => x + y;
// console.log(add(3, 4));

// use of this

// function Time() {
//   this.sec = 0;
//   setInterval(() => {
//     this.sec++;
//     console.log(this.sec);
//   }, 1000);
// }

// let time = new Time();
// console.log(time);
// this will return 1,2,3... for n number of times

// Avoiding this Issues:
// Arrow functions are useful when you want to maintain the same this context from the enclosing scope.

// Arrow functions are not suitable for all situations. Traditional function expressions have their own this context, which can be important in certain scenarios.
// Arrow functions are especially useful for short, one-liner functions and for avoiding issues related to the binding of this in nested functions.

// Use Cases:

// 1) Simple One-Liners:
// Arrow functions are great for short, concise functions.
// let double = (x) => x * 2;
// console.log(double(4));

// 2) Callback Functions:
// Arrow functions are often used for callback functions, especially in scenarios like Array.prototype.map, filter, and forEach.
// let numbers = [1, 2, 3];
// console.log(numbers);

// let numbers = [1, 2, 3];
// let squared = numbers.map((x) => x * x);
// console.log(squared);

// Block Statements:
// If the function body requires more than one statement, you need to use curly braces {} to create a block statement.
// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };
// console.log(sum(3, 4));

// No arguments Object:
// If you need access to the arguments object, you should use a traditional function expression, as arrow functions do not have their own arguments.
// function name() {
// arguments works here
//   console.log("Alok", arguments);
//   let arrowFunc = () => {
// arguments doesn't work here
//     console.log("Alok", arguments);
//   };
//   arrowFunc();
// }
// console.log(name(10, 20, 30));
// is arguments default keyword in javascript
// Yes, arguments is a default keyword in JavaScript, and it is used to access the arguments passed to a function. The arguments object is automatically available within the body of a function and provides an array-like structure containing all the arguments passed to that function.
