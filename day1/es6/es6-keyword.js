//keywords to declare a variable let,const,var

// es6 keyword let,const

// let was introduced in ECMAScript 6 (ES6) to address some of the issues with var.
// Variables declared with let have block scope (scoped to the nearest curly braces {}).
// Variables declared with let are not hoisted to the top of their scope.

// let x = 10;
// console.log(x);
// {
//   let x = 2;
//   console.log(x);
// }

// const also came with ES6 and is used to declare constants.
// Variables declared with const cannot be reassigned once they are defined.
// Like let, variables declared with const have block scope.

// const x = 10;
// console.log(x);
// {
//   const x = 5;
//   console.log(x);
// }

// 1) var is the oldest way to declare variables in JavaScript.
// 2) Variables declared with var are function-scoped or globally-scoped.
// 3) Variables declared with var are hoisted, meaning they are moved to the top of their scope during the compilation phase.

// var x = 10;
// console.log(x);
// {
//   var x = 5;
//   console.log(x);
// }

// within or outside the block it allows you to declare a variable with same variable name
// var x = 10;
// console.log(x);
// {
//   var x = 5;
//   console.log(x);
// }
// var x = 10;
// console.log(x);

// within block it allows you to declare a variable with same variable name but outside the block it won't allow
// const x = 10;
// console.log(x);
// {
//   const x = 5;
//   console.log(x);
// }
// const x = 10;
// console.log(x);

// within block it allows you to declare a variable with same variable name but outside the block it won't allow
// let x = 10;
// console.log(x);
// {
//   let x = 5;
//   console.log(x);
// }
// let x = 10;
// console.log(x);

// hoisting javascript
// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.

// example of
// use of variable before declare of the variable
// {
// console.log(x);

// ReferenceError: Cannot access 'x' before initialization
// let x = 10;

// ReferenceError: Cannot access 'x' before initialization
// const x = 10;

// var x = 10;
// undefined
// }
