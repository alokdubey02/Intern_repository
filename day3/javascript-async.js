// callback function
// a callback function passed as an argument to another function.
// This technique allows a function to call another function
// a callback function can run after another function has finished

// function sequence
// javascript functions are executed in the sequence they are called. not in the sequence they are defined.

// eg
// function myFirst() {
//   console.log("Hello");
// }
// function mySecond() {
//   console.log("Alok");
// }
// mySecond();
// myFirst();

// Sequence control
// Sometimes you would like to have better control over when to execute a function
// eg
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// let result = myCalculator(5, 5);
// console.log(result);

// another example
// you call a function and let the function call the display function
// function display(sum) {
//   console.log(sum);
// }
// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }
// myCalculator(5, 4, display);

// in the above example display is a called a callback function
// it is passed in myCalculator as an argument

// When you pass a function as an argument, remember not to use parenthesis.
// Right: myCalculator(5, 5, myDisplayer);
// Wrong: myCalculator(5, 5, myDisplayer());

// const num = [2, 3, 6, 4, 1, 0, -5];
// const positiveNUm = povFun(num, (x) => x >= 0);
// function povFun(num, callback) {
//   const myArr = [];
//   for (const x of num) {
//     if (callback(x)) {
//       myArr.push(x);
//     }
//   }
//   return myArr;
// }
// console.log(positiveNUm);

// here (x)=>x>=0 is a callback function
// it is passed to povFun() as an argument

// Asynchronous javascript
// With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in paralell.
// But, asynchronous programmes are difficult to write and difficult to debug.
// Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead

// Promises
// "I Promise a Result!"
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code

// JavaScript Promise Object
// A Promise contains both the producing code and calls to the consuming code:
// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//     console.log("Successful");
//   },
//   function (error) {
//     /* code if some error */
//     console.log("un-Successful");
//   }
// );

// example
// function myDisplayer(some) {
//   console.log(some);
// }
// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;
//   // The producing code (this may take some time)
//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });
// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// Async/await
// async makes a function return a Promise
// await makes a function wait for a Promise

// The keyword async before a function makes the function return a promise:

// async function myFunction() {
//   return "Hello";
// }
// myFunction().then(function (value) {
//   console.log(value);
// });

// Await Syntax
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

// async function myDisplay() {
//   let myPromise = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("Hello sir  !!");
//     }, 3000);
//   });
//   const gg = await myPromise;
//   console.log(gg);
// }

// myDisplay();
