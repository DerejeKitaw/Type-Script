import {Animal,Snake,Horse} from './inheritance';
// console.log('Hello from ts');

let myString: string;
let myNum: number;
let myBool: Boolean;
let myVar: any;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr:Array<string>;
let numArr:Array<number>;
let boolArr:Array<boolean>;

let strNumTuple:[string, number];

myString='hello world';
myNum=33;
myBool=false;
myVar=true;

strArr=['Hello','world'];
numArr=[1,2,3];
boolArr=[true,false,true];
strNumTuple=['string1',0];

let myVoid1: void = null;  //Can be-> let myVoid1: null = null;
let myVoid2: void = undefined;  //Can be-> let myVoid2: undefined = undefined;

console.log('myString ='+myString);
console.log('myNum ='+ myNum);
console.log('myBool ='+ myBool);
console.log('myVar ='+ myVar);
console.log('strArr ='+ strArr);
console.log('numArr ='+ numArr);
console.log('myVar ='+ myVar);
console.log('strNumTuple ='+ strNumTuple);
console.log('myVoid1 ='+ myVoid1);
console.log('myVoid2 ='+ myVoid2);

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);