// String
let myName = 'Dereje';

// number
let myAge = 41;

// boolean
let hasHobbies: boolean = false;

// assign types
let myRealAge: number;
myRealAge = 41;

// array
let hobbies = ["cooking", "sports"]; // type is arrays of string
// hobbies1 = [10]; will give error

let hobbies1: any[] = ["cooking", "sports"]; // types is arrays of anything
hobbies1 = [10]; // do not give error
console.log(hobbies);

// tuples is an array of mixed types with limited number of elements
let address: [string, number] = ["street", 99];
// address=[99, "street1"]; // will through errors

// enum
enum Color {
  Gray, // 0
  Green,  // 1
  Blue  // 2
}
let myColor: Color = Color.Green;
console.log(myColor); // return 1 the default value
// To overide the default value
enum Color1 {
  Gray, // 0
  Green = 100,  // 1
  Blue,  // 2
  Red =3,
  Pink
}
let myColor1: Color1 = Color1.Green;
let myColor2: Color1 = Color1.Blue;
console.log(myColor1); // return 100 
console.log(myColor2); // return 101 --incremented from the last value
console.log(Color1.Red); // return 3
console.log(Color1.Pink); // return 4 --incremented from the last value

// any
let car: any = "TOYOTA";
console.log(car);
car = {brand:"TOYOTA", series: 3}; // able to change the type from string to object because of the `any` type
console.log(car);

// functions
function returnMyName(){
  return myName;
}
console.log(returnMyName()); // return Dereje


// functions return value types
function returnMyAge(): number{
  return myAge; // Should return number only
}
console.log(returnMyAge()); // return 41


// functions with no return
function sayHello(): void{
  // return myAge; // Should through error
  console.log("Say Hello");
}
console.log(returnMyAge()); // return 41

// argument types
function multiply(value1: number, value2: number): number{
  return value1 * value2;
}

console.log(multiply(2,4)); // return 8
// console.log(multiply(2,"abc")); // through error

/**
 * Functions are types by their own
 */
// function types
let myMultiply;
myMultiply = sayHello; // we do not use syHello() because we dont want to assign the return values of the function. Instead to the function themselves
myMultiply();

myMultiply = multiply;
console.log(myMultiply(2,3)); // return 6
/**
 * In the above example we were able to assign myMultiply to both sayHello and multiply.
 * How can we restrict myMultiply not to take sayhello function
 */
let myMultiply1: (a: number, b: number) => number;
// myMultiply1 = sayHello; // will through error
myMultiply1 = multiply;
console.log(myMultiply1(4,3)); // return 12