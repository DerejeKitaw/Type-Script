"use strict";
// objects
var userData = {
    name: "Dereje",
    age: 41
};
// userData = {} // will through error because the type do not match with the above userData
// to assign types to the object
var userData1 = {
    name: "Dereje",
    age: 41
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
/**
 * Giving two types using union
 */
var myRealRealAge = 27;
myRealRealAge = "88";
console.log(typeof myRealRealAge); // return string
myRealRealAge = 88;
console.log(typeof myRealRealAge); // return number
// myRealRealAge = true; // will through error because myRealRealAge can be only number or string
if (typeof myRealRealAge == "number") {
    console.log("The value is number");
}
// Typescript 2 added `never` as a type
// never - is not void 
function neverReturn() {
    throw new Error('An error occured!!!!');
}
neverReturn();
/**
 * nullable types
 */
var canBeNull = 12;
// canBeNull = null; // work in typescript 2 and "strictNullChecks": true, in tsconfig.json
var canAlsoBeNull;
canAlsoBeNull = null; // this will make `canAlsoBeNull` type to null so canAlsoBeNull = 12; will through error
//# sourceMappingURL=object_types.js.map