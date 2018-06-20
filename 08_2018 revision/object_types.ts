// objects
let userData ={
  name: "Dereje",
  age: 41
}
// userData = {} // will through error because the type do not match with the above userData
// to assign types to the object
let userData1:{name: string, age: number} ={
  name: "Dereje",
  age: 41
}

// complex object
let complex: {data: number[], output: (all: boolean) => number[]}={
  data: [100,3.99, 10],

  output: function(all: boolean): number[]{
    return this.data;
  }
};
// complex ={}; // will through error

/**
 * Creating custom types with aliases.
 * If we want to create another same complex object we have to copy the types. Is there any better way to avoide copy the types. Yes, use types alias. It is created by `types`
 * 
 */
type Complex = {data: number[], output: (all: boolean) => number[]}; // type created

let complex2: Complex = {   // type used
  data: [100,3.99, 10],

  output: function(all: boolean): number[]{
    return this.data;
  }
};

/**
 * Giving two types using union
 */
let myRealRealAge: number | string = 27;
myRealRealAge = "88";
console.log(typeof myRealRealAge);  // return string
myRealRealAge = 88;
console.log(typeof myRealRealAge);  // return number
// myRealRealAge = true; // will through error because myRealRealAge can be only number or string
if (typeof myRealRealAge == "number"){
  console.log("The value is number");
}

// Typescript 2 added `never` as a type
// never - is not void 
function neverReturn():never{
  throw new Error('An error occured!!!!');
}
neverReturn();

/**
 * nullable types
 */
let canBeNull = 12;
// canBeNull = null; // work in typescript 2 and "strictNullChecks": true, in tsconfig.json
let canAlsoBeNull;
canAlsoBeNull = null; // this will make `canAlsoBeNull` type to null so canAlsoBeNull = 12; will through error