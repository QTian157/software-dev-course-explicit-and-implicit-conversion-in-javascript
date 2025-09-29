/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// --- Task 1: Debugging Type Conversion ---
// let result = "5" - 2;
// console.log("The result is: " + result);

let resultChange = Number("5") - 2; // apply Number() to implixity to convert string to number
console.log("The result is: " + resultChange);

// let isValid = Boolean("false");
// if (isValid) {
//     console.log("This is valid!");
// }

let isValidChange = Boolean(true); // Boolean("false") is true
if (isValidChange) {
    console.log("This is valid!");
}

// let age = "25";
// let totalAge = age + 5;
// console.log("Total Age: " + totalAge);

let ageChange = Number("25");
let totalAgeChange = ageChange + 5;
console.log("Total Age: " + totalAgeChange);

// --- Task 2: Examples of Type Conversion ---
// 1. Implicit type conversion
console.log("2"+2); // 22
// edge case: empty
console.log("" + 2); // 2
// 2. Explicit type conversion
let age = "22kk";
console.log(Number(age)); // NaN, becasue "kk" can't conver to number
console.log(typeof Number(age)); // "number" since NaN is Number type