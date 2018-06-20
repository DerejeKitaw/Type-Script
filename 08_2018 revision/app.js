"use strict";
// String
var myName = 'Dereje';
// number
var myAge = 41;
// boolean
var hasHobbies = false;
// assign types
var myRealAge;
myRealAge = 41;
// array
var hobbies = ["cooking", "sports"]; // type is arrays of string
// hobbies1 = [10]; will give error
var hobbies1 = ["cooking", "sports"]; // types is arrays of anything
hobbies1 = [10]; // do not give error
console.log(hobbies);
// tuples is an array of mixed types with limited number of elements
var address = ["street", 99];
// address=[99, "street1"]; // will through errors
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // return 1 the default value
// To overide the default value
var Color1;
(function (Color1) {
    Color1[Color1["Gray"] = 0] = "Gray";
    Color1[Color1["Green"] = 100] = "Green";
    Color1[Color1["Blue"] = 101] = "Blue";
    Color1[Color1["Red"] = 3] = "Red";
    Color1[Color1["Pink"] = 4] = "Pink";
})(Color1 || (Color1 = {}));
var myColor1 = Color1.Green;
var myColor2 = Color1.Blue;
console.log(myColor1); // return 100 
console.log(myColor2); // return 101 --incremented from the last value
console.log(Color1.Red); // return 3
console.log(Color1.Pink); // return 4 --incremented from the last value
// any
var car = "TOYOTA";
console.log(car);
car = { brand: "TOYOTA", series: 3 }; // able to change the type from string to object because of the `any` type
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName()); // return Dereje
// functions return value types
function returnMyAge() {
    return myAge; // Should return number only
}
console.log(returnMyAge()); // return 41
// functions with no return
function sayHello() {
    // return myAge; // Should through error
    console.log("Say Hello");
}
console.log(returnMyAge()); // return 41
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 4)); // return 8
// console.log(multiply(2,"abc")); // through error
/**
 * Functions are types by their own
 */
// function types
var myMultiply;
myMultiply = sayHello; // we do not use syHello() because we dont want to assign the return values of the function. Instead to the function themselves
myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 3)); // return 6
/**
 * In the above example we were able to assign myMultiply to both sayHello and multiply.
 * How can we restrict myMultiply not to take sayhello function
 */
var myMultiply1;
// myMultiply1 = sayHello; // will through error
myMultiply1 = multiply;
console.log(myMultiply1(4, 3)); // return 12
//# sourceMappingURL=app.js.map