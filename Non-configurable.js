'use strict';
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(JSON.stringify(descriptor, null, 2));

//...Math.PI = 3; make ct error
console.log(Math.PI);
let x = 34.54
let y = 20
 let z = -5 ;

console.log(y>50 && z > 10 || x > 30)

let user = { };
Object.defineProperty(user, 'name',{
  value: "Tarek",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(user, 'name',{
    //writable: true // ct error
});