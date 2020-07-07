const user = require('./sayHi');

console.log(user); // function...
user.f('tarek'); // Hello, tarek// !

console.log(
    `${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}.`
);

const { getName, dob } = require('./sayHi');
console.log(
    `${getName()} was born on ${dob}.`
);