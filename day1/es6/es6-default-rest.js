// es6 rest and default parameter values

// ES6 allows function parameters to have default values.
// function fun(x, y = 10) {
//   return x + y;
// }
// console.log(fun(5));
// y is not passed and y is also undefined

// Rest parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }
// let x = sum(4, 6, 7, 4, 6, 7);
// console.log(x);
