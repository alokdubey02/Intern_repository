// The length property returns the length of a string:
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

// Extracting String Characters
// There are 4 methods for extracting string characters:

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays

// The charAt() method returns the character at a specified index (position) in a string:
// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char);

// The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
// let charr = text.charCodeAt(0);
// console.log(charr);

// at()
// ES2022 intoduced the string method at()
// const name = "KVKATIHAR";
// let letter = name.at(2);
// console.log(letter);

// The at() method returns the character at a specified index (position) in a string.
// The at() method returns the same as carAt().
// The at() method is supported in all modern browsers since March 2022

// Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2)

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included)

// let text = "Apple, Banana, Kiwi";
// let part1 = text.slice(7, 13);
// console.log(part1);

// If you omit the second parameter, the method will slice out the rest of the string:
// let part2 = text.slice(7);
// console.log(part2);

// If a parameter is negative, the position is counted from the end of the string
// let text = "Apple, Banana, Kiwi";
// let part3 = text.slice(-12);
// console.log(part3);

// This example slices out a portion of a string from position -12 to position -6:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// console.log(part);
