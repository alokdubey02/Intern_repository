// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is plain text written in JavaScript object notation
// JSON is used to send data between computers
// JSON is language independent

// Why Use JSON?
// The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.
// Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.
// JavaScript has a built in function for converting JSON strings into JavaScript objects:
// JSON.parse()
// JavaScript also has a built in function for converting an object into a JSON string:
// JSON.stringify()

// JSON Syntax Rules
// JSON syntax is derived from JavaScript object notation syntax:

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
// JSON Data - A Name and a Value
// JSON data is written as name/value pairs (aka key/value pairs).

// A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

// Example
// "name":"John"
// JSON names require double quotes.

// JSON - Evaluates to JavaScript Objects
// The JSON format is almost identical to JavaScript objects.

// In JSON, keys must be strings, written with double quotes:

// JSON
// {"name":"John"}
// In JavaScript, keys can be strings, numbers, or identifier names:

// JavaScript
// {name:"John"}
// ADVERTISEMENT

// JSON Values
// In JSON, values must be one of the following data types:

// a string
// a number
// an object
// an array
// a boolean
// null
// In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:

// a function
// a date
// undefined
// In JSON, string values must be written with double quotes:

// JSON
// {"name":"John"}
// In JavaScript, you can write string values with double or single quotes:

// JavaScript
// {name:'John'}
// JavaScript Objects
// Because JSON syntax is derived from JavaScript object notation, very little extra software is needed to work with JSON within JavaScript.

// With JavaScript you can create an object and assign data to it, like this:

// Example
// person = {name:"John", age:31, city:"New York"};
// You can access a JavaScript object like this:

// Example
// // returns John
// person.name;
// It can also be accessed like this:

// Example
// // returns John
// person["name"];
// Data can be modified like this:

// Example
// person.name = "Gilbert";
// It can also be modified like this:

// Example
// person["name"] = "Gilbert";
// You will learn how to convert JavaScript objects into JSON later in this tutorial.

// JavaScript Arrays as JSON
// The same way JavaScript objects can be written as JSON, JavaScript arrays can also be written as JSON.

// You will learn more about objects and arrays later in this tutorial.

// JSON Files
// The file type for JSON files is ".json"
// The MIME type for JSON text is "application/json"

// Both JSON and XML can be used to receive data from a web server.

// The following JSON and XML examples both define an employees object, with an array of 3 employees:

// JSON Example
// {"employees":[
//   { "firstName":"John", "lastName":"Doe" },
//   { "firstName":"Anna", "lastName":"Smith" },
//   { "firstName":"Peter", "lastName":"Jones" }
// ]}

// XML Example
// <employees>
//   <employee>
//     <firstName>John</firstName> <lastName>Doe</lastName>
//   </employee>
//   <employee>
//     <firstName>Anna</firstName> <lastName>Smith</lastName>
//   </employee>
//   <employee>
//     <firstName>Peter</firstName> <lastName>Jones</lastName>
//   </employee>
// </employees>

// JSON DATA TYPE

// Valid Data Types
// In JSON, values must be one of the following data types:

// a string
// a number
// an object (JSON object)
// an array
// a boolean
// null

// JSON values cannot be one of the following data types:

// a function
// a date
// undefined

// JSON.parse()

// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// Array as JSON

// When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

// const text = '["Ford", "BMW", "Audi", "Fiat"]';
// const myArr = JSON.parse(text);

// Parsing Dates

// Date objects are not allowed in JSON.
// If you need to include a date, write it as a string.
// You can convert it back into a date object later:

// Convert a string into a date:

// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.birth = new Date(obj.birth);

// Parsing Functions

// Functions are not allowed in JSON.
// If you need to include a function, write it as a string.
// You can convert it back into a function later:

// Convert a string into a function:

// const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.age = eval("(" + obj.age + ")");

// JSON.stringify()

// A common use of JSON is to exchange data to/from a web server.
// When sending data to a web server, the data has to be a string.
// Convert a JavaScript object into a string with JSON.stringify().

// Stringify a JavaScript Object
// Imagine we have this object in JavaScript:

// const obj = {name: "John", age: 30, city: "New York"};

// Use the JavaScript function JSON.stringify() to convert it into a string.

// const myJSON = JSON.stringify(obj);

// JSON Object Literals

// This is a JSON string:

// '{"name":"John", "age":30, "car":null}'
// Inside the JSON string there is a JSON object literal:

// {"name":"John", "age":30, "car":null}
// JSON object literals are surrounded by curly braces {}.

// JSON object literals contains key/value pairs.

// Keys and values are separated by a colon.

// Keys must be strings, and values must be a valid JSON data type:

// string
// number
// object
// array
// boolean
// null
// Each key/value pair is separated by a comma

// Accessing Object Values
// You can access object values by using dot (.) notation:

// Example
// const myJSON = '{"name":"John", "age":30, "car":null}';
// const myObj = JSON.parse(myJSON);
// x = myObj.name;

//
// JSON Array Literals
// This is a JSON string:

// '["Ford", "BMW", "Fiat"]'
// Inside the JSON string there is a JSON array literal:

// ["Ford", "BMW", "Fiat"]
// Arrays in JSON are almost the same as arrays in JavaScript.

// In JSON, array values must be of type string, number, object, array, boolean or null.

// In JavaScript, array values can be all of the above, plus any other valid JavaScript expression, including functions, dates, and undefined.
// myJSON = '["Ford", "BMW", "Fiat"]';
// myArray = JSON.parse(myJSON);
// myArray[0];

// JSON From a Server
// You can request JSON from the server by using an AJAX request

// As long as the response from the server is written in JSON format, you can parse the string into a JavaScript object.

// Example
// Use the XMLHttpRequest to get data from the server:

// const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function() {
//   const myObj = JSON.parse(this.responseText);
//   document.getElementById("demo").innerHTML = myObj.name;
// };
// xmlhttp.open("GET", "json_demo.txt");
// xmlhttp.send();

// JSON HTML
// JSON can very easily be translated into JavaScript.
// JavaScript can be used to make HTML in your web pages.

// <!DOCTYPE html>
// <html>
// <body>

// <h2>Make a table based on the value of a drop down menu.</h2>

// <select id="myselect" onchange="change_myselect(this.value)">
//   <option value="">Choose an option:</option>
//   <option value="customers">Customers</option>
//   <option value="products">Products</option>
//   <option value="suppliers">Suppliers</option>
// </select>

// <p id="demo"></p>

// <script>
// function change_myselect(sel) {
//   const dbParam = JSON.stringify({table:sel,limit:20});
//   const xmlhttp = new XMLHttpRequest();
//   xmlhttp.onload = function() {
//     myObj = JSON.parse(this.responseText);
//     text = "<table border='1'>"
//     for (x in myObj) {
//       text += "<tr><td>" + myObj[x].name + "</td></tr>";
//     }
//     text += "</table>"
//     document.getElementById("demo").innerHTML = text;
//   }
//   xmlhttp.open("POST", "json_demo_html_table.php", true);
//   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xmlhttp.send("x=" + dbParam);
// }
// </script>

// </body>
// </html>
