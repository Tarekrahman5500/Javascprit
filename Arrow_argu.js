'use strict';
function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

function sayhi(who) {
    console.log("Hi"+' '+who);
}

let say = defer(sayhi, 2000);

say('Tarek');

'use strict';

let user = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
let user2 = {};
Object.defineProperty(user2, "name", {
    value: "John"
});

 descriptor = Object.getOwnPropertyDescriptor(user2, 'name');

console.log( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
let user3 = {
    name: "John"
};

Object.defineProperty(user3, "name", {
    writable: 5

});

user3.name = "Pete"; // Error: Cannot assign to read only property 'name'
console.log(user3.name)