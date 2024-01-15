// Asynchronous
// it allows code to execute the task without waiting for other tasks to complete.
// common use cases includes handling events, making network requests, and dealing with timeouts.

// console.log("start");
// setTimeout(() => {
//   console.log("Inside timeout");
// }, 2000);
// console.log("End");
// In this example, setTimeout is used to schedule the execution of a function after a delay (in milliseconds). The code following setTimeout continues to execute, demonstrating asynchronous behavior.

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { message: "Data fetched successfully" };
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data.message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   Here, fetchData returns a Promise, allowing asynchronous handling of data fetching. The then and catch methods handle the success and error cases, respectively.
