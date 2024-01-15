// es6 symbol()

//Symbols are always unique.

// A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.
// It represents a unique "hidden" identifier that no other code can accidentally access.
// For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.
// Using Symbol() to create a unique identifiers, solves this problem:

// const person = {
//   firstName: "Alok",
//   lastName: "Dubey",
//   age: 23,
// };

// let id = Symbol("id");
// person[id] = 123123;
// console.log(person);
