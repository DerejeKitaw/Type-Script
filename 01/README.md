### Create a function
```
function doSomething(){
    for (var i=0; i<5; i++){
        console.log(i);
    }
    console.log('Finaly' + i);
}
doSomething();
```
run the function
```
tsc main.ts && node main.js
```
Result
```
0
1
2
3
4
Finaly5
```
var is declared inside for loop but accessed outside the loop.

When you change the `var` with `let` you will get error for outside i

Typescript compiler will tell you the error but not stop from compiling the javascript code. Because the compiled jav script code is a valide java script with `var`

### Type assertions
Declaring the type will help us for intelecensce
```
let message='abc';

let endWithC = message.endsWith('c');
console.log('abc end with ' + endWithC);
```
tsc typeAssertions.ts && node typeAssertions.js

if we do not specify the type typescript do not give us intelecense 
```
let message;
let endWithC = message.
```
Other way to get intelecens is to tell typescrpt explicitly message is a string
```
#1 way
let Myname;
let mynameEnd = (<string>Myname).
```
```
#2 way
let mynameEnd = (Myname as string).
```
The above two ways do not change the type of the variable. It is only for typescript intelesense. `Myname` will remain as type `any`.
```

### Arrow function
```

```